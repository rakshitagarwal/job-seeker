import { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>Copyright &copy; 2024. All Rights Reserved</div>
      <div>
        <Link to={"https://wa.me/+919997443874"} target="_blank">
          <FaWhatsapp />
        </Link>
        <Link to={"https://github.com/rakshitagarwal"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://www.linkedin.com/in/rakshitagarwal"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/rakshit__agarwal/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
