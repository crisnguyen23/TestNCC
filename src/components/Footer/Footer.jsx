import "./Footer.scss";
import footerLogo from "../../assets/images/copyright.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img srcSet={`${footerLogo} 2x`} alt="" className="footer-copyright" />
    </footer>
  );
};

export default Footer;
