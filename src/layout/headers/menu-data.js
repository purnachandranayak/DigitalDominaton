const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: true,
    title: "Our Services",
    link: "/service",
    active: "active",
    sub_menus: [
      { link: "/email-outreach", title: "Email Outreach" },
      { link: "/linkedin-outreach", title: "Linkedin Outreach" },
      { link: "/ai-appointment-setting", title: "AI Appointment Setting" },
      { link: "/marketing-automation", title: "Marketing Automation" },
      { link: "https://www.prdomination.com/", title: "PR Services" },
    ]
  },
  // {
  //   id: 2,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Pages",
  //   link: "/about",
  //   active: "",
  //   sub_menus: [
  //     { link: "/about", title: "About" },
  //     { link: "/service", title: "Service" },
  //     { link: "/", title: "Service Details" },
  //     { link: "/team", title: "Team" },
  //     { link: "/team-details", title: "Team Details" },
  //     { link: "/career", title: "Career" },
  //     { link: "/career-details", title: "Career Details" },
  //     { link: "/", title: "Integrations" },
  //     { link: "/price", title: "Price" },
  //     { link: "/register", title: "Register" },
  //     { link: "/sign-in", title: "Signin" },
  //     { link: "/404", title: "404" }, 
  //   ],
  // },
  
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about-us",
    active: "",
  },

  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Pricing",
    link: "/pricing",
    active: "",
  },
  // {
  //   id: 3,
  //   mega_menu: false,
  //   has_dropdown: false,
  //   title: "Schedule",
  //   link: "/schedule",
  //   active: "",
  // },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Resources",
    link: "/",
    active: "",
    sub_menus: [
      { title: "Blogs", link: "https://www.digitaldomination.io/blog" },
      { title: "Case Studies", link: "https://www.digitaldomination.io/case-studies" },
      { link: "/career", title: "Career" },
      { link: "/contact", title: "Contact" }
    ],
  },
];
export default menu_data;
