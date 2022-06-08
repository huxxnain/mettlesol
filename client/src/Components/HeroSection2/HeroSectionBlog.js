import React from "react";
import VideoPlayer from "react-background-video-player";

const HeroSectionBlog = () => {
    return (
        <section id="heroBlog" className="d-flex align-items-center">
            <div className="container ">
                <div className="row ">
                    <div className="col-12 col-lg-5 col-xl-5 mr-auto mt-10 mb-lg-0">
                        <img src="../../assets/img/Capa-5.png" className='ml-6 mb-ml-5' />
                        {/*<h1 className="display-4 text-white font-weight-bold pt-2 pl-2 mt-5 " style={{ "fontSize": "8rem" }} >Blog</h1>*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionBlog;
