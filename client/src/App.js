import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Blog from "./Pages/Blog";
import PortfolioDetails from "./Components/PortfolioDetails/PortfolioDetails";
// import ResponsiceCreating from "./Pages/ServicesPage/ResponsiceCreating";
import DedicatedTeams from "./Pages/ServicesPage/DedicatedTeams";
// import QualityAssurance from "./Pages/ServicesPage/QualityAssurance";
// import WebDevelopment from "./Pages/ServicesPage/WebDevelopment";

function App() {
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/61d5b6e4f7cf527e84d0916f/1fold4rjd";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
      document.head.appendChild(s1);
      var s3 = document.createElement("script"),
        s4 = document.getElementsByTagName("script")[0];
      s3.async = true;
      s3.src = "https://www.googletagmanager.com/gtag/js?id=G-NMW3C5KVC7";
      s3.charset = "UTF-8";
      s3.setAttribute("crossorigin", "*");
      s4.parentNode.insertBefore(s3, s4);
      document.head.appendChild(s3);
    })();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolioDetails" element={<PortfolioDetails />} />
        {/* <Route path="/qualityAssurance" element={<QualityAssurance />} />
        <Route path="/responsiceCreating" element={<ResponsiceCreating />} />
        <Route path="/dedicatedTeams" element={<DedicatedTeams />} />
        <Route path="/webDevelopment" element={<WebDevelopment />} /> */}
        <Route path="/dedicatedTeams" element={<DedicatedTeams />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
