import React from "react";
import AnswerQuestion from "@/common/answer-question";
import Link from "next/link";
import Image from "next/legacy/image";
import dashbord from "../../../public/assets/img/service/sv-dashbord.png";
import service_img from "../../../public/assets/img/service/sv-details-1.jpg";

const service_details_content = {
  category_title: "Our Services",
  categorys: [
    { id: 1, category: "Email Outreach", cls: "" },
    { id: 2, category: "Linkedin Outreach", cls: "active" },
    { id: 3, category: "AI Appointment Setting", cls: "" },
    { id: 4, category: "Marketing Automation", cls: "" },
    { id: 5, category: "PR Services", cls: "" },
  ],
  sub_menuus: [
    { link: "/email-outreach", title: "Email Outreach" },
    { link: "/linkedin-outreach", title: "Linkedin Outreach" },
    { link: "/ai-appointment-setting", title: "AI Appointment Setting" },
    { link: "/marketing-automation", title: "Marketing Automation" },
    { link: "https://www.prdomination.com/", title: "PR Services" },
  ],
  bg_img: "/assets/img/service/sv-bg.jpg",
  overview_title: "Service Overview",
  overview_des: (
    <>
      Experience the next level of digital excellence with our expert team.
      Since our inception, we have been committed to empowering businesses to
      reach their full potential in the digital era. By partnering with hundreds
      of clients across diverse industries, we deliver customized solutions
      designed to drive growth, enhance engagement, and create lasting value.
      <br />
      With a comprehensive suite of top-tier digital services all under one
      roof, our team of skilled professionals leverages years of industry
      experience to ensure outstanding results. Every project we undertake is a
      testament to our dedication to quality and our mission to help you achieve
      unparalleled success. Let us help you transform your digital presence and
      achieve your business goals.
    </>
  ),
  overview_list: [
    <>
      Product Quality: <br />{" "}
      <span>
        Automatically syncs across all your devices. You can also access...
      </span>
    </>,
    <>
      On Demand Design: <br />{" "}
      <span>Images, videos, PDFs and audio files are supported.</span>
    </>,
    <>
      Choice of Service:{" "}
      <span>Whatever your business needs, you can choose a service.</span>
    </>,
  ],
  challange_titel: "The Challenge",
  challange_des: (
    <>
      In today’s fast-paced and ever-evolving digital landscape, businesses face
      the challenge of staying ahead of the competition while meeting the
      growing demands of their audiences. From maintaining a strong online
      presence to delivering seamless user experiences, the pressure to innovate
      and adapt has never been greater. The digital transformation journey can
      be complex, with hurdles like outdated systems, inconsistent branding, and
      ineffective strategies holding businesses back. Navigating this intricate
      terrain requires not only a clear vision but also the right expertise and
      tools to overcome these obstacles and achieve sustainable growth.
    </>
  ),
};

const {
  category_title,
  categorys,
  sub_menuus, // Added destructuring for sub_menuus
  bg_img,
  overview_title,
  overview_des,
  overview_list,
  challange_titel,
  challange_des,
} = service_details_content;

const ServiceDetailsArea = () => {
  return (
    <div className="sv-details-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="sv-details-widget">
              <div className="sv-details-category mb-30">
                <div className="sv-details-category-title">
                  <h4 className="sv-details-title-sm">{category_title}</h4>
                </div>
                <div className="sv-details-category-list">
                  <ul>
                    {sub_menuus.map((menu, i) => (
                      <li key={i}>
                        <Link href={menu.link}>
                          <span>{menu.title}</span>
                          <i className="fal fa-angle-right"></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className="tp-service__dashboard mb-30"
                style={{ backgroundImage: `url(${bg_img})` }}
              >
                <div className="tp-service__top-content">
                  <h3 className="tp-service__title-white">
                    Data Analysis <br /> Tools & Methods
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text <br /> of the printing
                  </p>
                  <Link
                    className="tp-btn-orange tp-btn-hover alt-color-white"
                    href="#"
                  >
                    <span>Work with Us</span>
                    <b></b>
                  </Link>
                </div>
                <div className="tp-service__dashdboard-sm-img">
                  <Image
                    src={dashbord}
                    className="wow tpfadeRight"
                    data-wow-duration=".9s"
                    data-wow-delay=".3s"
                    alt="theme-pure"
                  />
                </div>
              </div>

              <div className="sv-details-social-box mb-30">
                <h4 className="sv-details-title-sm">Share it.</h4>
                <div className="sv-details-social-link">
                  <Link href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-8">
            <div className="sv-details-wrapper">
              <div className="sv-details-thumb mb-45">
                <Image className="w-100" src={service_img} alt="theme-pure" />
              </div>
              <div className="sv-details-title-box mb-55">
                <h4 className="sv-details-title">{overview_title}</h4>
                <p>{overview_des}</p>
              </div>
              <div className="sv-details-text mb-35">
                <h4 className="sv-details-text-title pb-10">
                  Going Beyond the Usual
                </h4>
                <ul>
                  {overview_list.map((item, i) => (
                    <li key={i}>
                      <i className="fal fa-check"></i>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sv-details-text-2">
                <h4 className="sv-details-text-title">{challange_titel}</h4>
                <p>{challange_des}</p>
              </div>
              <div className="tp-faq-area pt-50">
                <div className="container p-0">
                  <div className="row g-0">
                    <div className="col-xl-12">
                      <h4 className="sv-details-title">
                        Any Questions find here.
                      </h4>
                      <AnswerQuestion style={true} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsArea;
