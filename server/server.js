const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const fs = require("fs");
const https = require("https");
const cors = require("cors");
const nodemailer = require("nodemailer");
const express = require("express");
const { parse } = require("url");
const sslPath = "/etc/letsencrypt/live/apolloe.com";
const dev = process.env.NODE_ENV !== "production";
const path   = require('path')
const app= express();
console.log(process.env.PORT)
function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (
    !req.secure &&
    req.get("x-forwarded-proto") !== "https" &&
    process.env.NODE_ENV !== "development"
  ) {
    return res.redirect("https://www." + req.get("host") + req.url);
  }
  next();
}


app.use(cors());
  

  app.post("/sendemail", jsonParser, (req, res) => {
    const { email, name, message } = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.FROM,
      to: email,
      subject: `Email from ${name}`,
      text: `You have received a new email from ${email}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(500).send(error);
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).send("Email has been sent");
      }
    });
  });
  // Start http server
const port = process.env.PORT
      if(port == 443){

       
        // Certificate
        const privateKey = fs.readFileSync(`${sslPath}/privkey.pem`, "utf8");
        const certificate = fs.readFileSync(`${sslPath}/cert.pem`, "utf8");
        const ca = fs.readFileSync(`${sslPath}/chain.pem`, "utf8");
    
        const credentials = {
          key: privateKey,
          cert: certificate,
          ca: ca,
        };
    
        server.use(requireHTTPS);

      }

      app.use(express.static(path.resolve(__dirname, '../client/build')));

    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    });
    // app.listen(port ? port : 8000, () => {
    //   console.log(`Listening on HTTP 8080`);
    // });

  
  // If in production then start https server
  // else {
    // const port = 443;
    // // Certificate
    // const privateKey = fs.readFileSync(`${sslPath}/privkey.pem`, "utf8");
    // const certificate = fs.readFileSync(`${sslPath}/cert.pem`, "utf8");
    // const ca = fs.readFileSync(`${sslPath}/chain.pem`, "utf8");

    // const credentials = {
    //   key: privateKey,
    //   cert: certificate,
    //   ca: ca,
    // };

    // server.use(requireHTTPS);
    // server.get("*", (req, res) => {
    //   const parsedUrl = parse(req.url, true);
    //   return handle(req, res, parsedUrl);
    // });
    // var httpsServer = https.createServer(credentials, server);
    // httpsServer.listen(port, function (err) {
    //   if (!!err) {
    //     console.error("HTTPS server FAIL: ", err, err && err.stack);
    //   } else {
    //     console.log(`Listening on HTTP 443`);
    //   }
    // });

    // // Also need to start http server with https
    // server.listen(80, () => {
    //   console.log(`Listening on HTTP 80`);
    // });
  // }



    app.listen(port, () => { 
      console.log(`HTTP server running on port ${port}`);
    });