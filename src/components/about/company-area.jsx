import VideoPopup from '@/modals/video-popup';
import React,{useState} from 'react';

const company_content ={
    sub_title:  "Who We Are",
    title: <> Experience a new dimension of digital excellence.</>,
    info_1: <>Since our inception, we have been driven by one mission - to empower businesses to achieve their full potential in the digital era. We have worked with hundreds of clients across industries, delivering tailor-made solutions that drive growth, boost engagement, and generate value.    </>,
    info_2: <>We provide a range of top-tier digital services under one roof.</>,
    info_3: <>Our clean and simple APIs and transparent SaaS model will give you complete peace of mind.</>,
}
const {sub_title, title, info_1, info_2, info_3}  = company_content


const CompanyArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <div className="ab-company-area pt-105 pb-100">
               <div className="container">
                  <div className="row ab-company-section-space">
                     <div className="col-xl-6">
                        <div className="ab-company-section-box">
                           <h4 className="inner-section-subtitle">{sub_title}</h4>
                           <h3 className="tp-section-title">{title}</h3>
                        </div>
                     </div>
                     <div className="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="ab-company-right">
                           <div className="ab-company-section-text">
                              <p className="pb-10">{info_1}</p>
                              <div className="tp-about__list">
                                 <ul>
                                    <li><i className="fal fa-check"></i>We provide a range of top-tier digital services under one roof.</li>
                                    <li><i className="fal fa-check"></i>Our team of professionals brings a wealth of industry experience.</li>
                                    <li><i className="fal fa-check"></i>We are dedicated to delivering superior quality in every project.</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row align-items-center">
                     <div className="col-xl-4">
                        <div className="ab-company-video">
                           <a className="popup-video" 
                           onClick={() => setIsVideoOpen(true)} 
                           ><i className="fas fa-play"></i></a>
                           <span>Watch Demo</span>
                        </div>
                     </div>
                     <div className="col-xl-8">
                        <div className="row">

                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-start">
                                 <div className="ab-company-fun-fact">
                                    {/* <span>USED BY</span> */}
                                    <h4>400<em>+</em></h4>
                                    <p>Five star rating!</p>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-md-center justify-content-left">
                                 <div className="ab-company-fun-fact">
                                    {/* <span>VALUE</span> */}
                                    <h4>98<em>%</em></h4>
                                    <p>Client retention!</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-md-center justify-content-left">
                                 <div className="ab-company-fun-fact">
                                    {/* <span>IN</span> */}
                                    <h4>2,600<em>+</em></h4>
                                    <p>Successful campaigns</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

             {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"vhO-ljSHxM8"}
      />
      {/* video modal end */}
        </>
    );
};

export default CompanyArea;