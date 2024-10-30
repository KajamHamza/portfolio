import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/bg2.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I can work anywhere",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Always trying  to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building on a Mobile App",
    description: "Future work",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start working together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-quivalence",
    des: "A web application developed to simplify the diploma homologation process for students and administrators.",
    img: "/eq.png",
    iconLists: ["/Angular.svg", "/Spring.svg", "/MYSQL.svg"],
    link: "/ui.earth.com",
    url: "https://github.com/wijdanemgarred/diploma-homologation",
  },
  {
    id: 2,
    title: "To-Do List - Web Application",
    des: "Designed to help users organize and track tasks by categories and set deadlines for timely completion.",
    img: "/arch.png",
    iconLists: [
      "/Spring.svg",
      "/Angular.svg",
      "/MYSQL.svg",
      "/Postman.svg",
      "/JUnit.svg",
    ],
    link: "/ui.yoom.com",
    url: "https://github.com/wijdanemgarred/To-Do-List---Spring-Boot",
  },
  {
    id: 3,
    title: "Stock Management Application",
    des: "This project deploys a stock management application using a CI/CD pipeline for reliability.",
    img: "/devops.png",
    iconLists: [
      "/Docker.svg",
      "/Kubernetes.svg",
      "/Jenkins.svg",
      "/Ansible.svg",
    ],
    link: "/ui.aiimg.com",
    url: "https://github.com/wijdanemgarred/stock-management-app",
  },
  {
    id: 4,
    title: "Mooster - Livestock Management",
    des: "helps owners and veterinarians monitor cattle health in real-time with IoT devices.",
    img: "/mooster.jpg",
    iconLists: [
      "Flutter.svg",
      "/HTML5.svg",
      "/CSS3.svg",
      "/Firebase.svg",
      "/Bootstrap.svg",
    ],
    link: "/ui.apple.com",
    url: "https://github.com/wijdanemgarred/Mooster-livestock-management-app",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Mobile App Developer",
    desc: "Developed a livestock management mobile application using Flutter and Firebase.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    title: "Intern Observer",
    desc: "Observed Agile methodologies and software development processes.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/GitHub.svg",
    link: "https://github.com/wijdanemgarred",
  },

  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/wijdanemgarred/",
  },
];
