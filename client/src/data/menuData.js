import home from "../assets/home.png";
import about from "../assets/information-button.png";
import blog from "../assets/blog.png";
import contact from "../assets/contact-us.png";
import dashboard from "../assets/dashboard.png";

const auth = localStorage.getItem("token");

export const menuData = [
  { title: "Home", pageLink: "/", icon: home },
  { title: "About", pageLink: "/about", icon: about },
  { title: "Read Blog", pageLink: "/read-blog", icon: blog },
  { title: "Contact", pageLink: "/contact", icon: contact },
];
