const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: true,
    title: "Our Services",
    link: "/",
    active: "active",
    sub_menus: [
      { link: "/#", title: "Email Account Setup" },
      { link: "/#", title: "Email Outreach" },
      { link: "/#", title: "PR Services" },
      { link: "/#", title: "Linkedin Outreach" },
      { link: "/#", title: "AI Appointment Setting" },
      { link: "/#", title: "Automation Services" },
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
    title: "Blogs",
    link: "https://www.digitaldomination.io/blog",
    active: "",
  },

  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Case Studies",
    link: "https://www.digitaldomination.io/case-studies",
    active: "",
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "More",
    link: "/",
    active: "",
    sub_menus: [
      { link: "/", title: "Testemonials" },
      { link: "/", title: "Team" },
      { link: "/", title: "Career" },
    ],
  },
];
export default menu_data;
