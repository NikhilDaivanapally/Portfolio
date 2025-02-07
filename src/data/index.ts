import chatapp from "../assets/Screenshot 2025-01-27 161945.png";
import ecommerce from "../assets/Screenshot 2025-01-27 164129.png";
import portfolio from "../assets/Screenshot 2025-01-27 165738.png";
export const Projectslist = [
  {
    image: chatapp,
    description:
      "A chat application that enables users to engage in one-on-one conversations or group chats with multiple members. Users can send text messages, share images, and enjoy features like real-time messaging, delivery status indicators (sent, delivered, and read receipts)",
    techstacksused: [
      "Html",
      "Css",
      "Js",
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongodb",
      "Passport",
      "Scoketio",
      "Redis",
    ],
    githubRepo: "https://github.com/NikhilDaivanapally/ByteMessenger",
    livelink: "https://byte-messenger.vercel.app/login",
  },
  {
    image: ecommerce,
    description:
      "An e-commerce clothing store featuring categories such as men's, women's, and kids' clothing, allowing customers to browse and purchase their desired items. The store includes features like breadcrumb navigation, a wishlist, a shopping cart, a search functionality, and filters based on price, brand, and more.",
    techstacksused: [
      "Html",
      "Css",
      "Js",
      "React",
      "Redux",
      "Node",
      "Express",
      "Mysql",
      "Passport",
      "Redis",
    ],
    githubRepo: "https://github.com/NikhilDaivanapally/WearClothing_Ecommerce",
    livelink: "https://wearclothings.vercel.app",
  },
  {
    image: portfolio,
    description: "Personal Portfolio",
    techstacksused: ["Html", "Css", "Js", "React", "Gsap", "Framermotion"],
    githubRepo: "https://github.com/NikhilDaivanapally/Portfolio",
    livelink: "https://nikhilportfolio-alpha.vercel.app/",
  },
];

export const Navigates = [
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "About",
    path: "/about",
  },
];

export const Socials = [
  { name: "Github", link: "https://github.com/NikhilDaivanapally" },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nikhil-daivanapally/",
  },
];

