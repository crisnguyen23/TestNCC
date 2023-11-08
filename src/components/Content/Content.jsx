import "./Content.scss";
import Skill from "./Skill";
import cssImg from "../../assets/images/css-icon1.png";
import htmlImg from "../../assets/images/html-icon2.png";
import urlImg from "../../assets/images/url-icon2.png";

const Content = () => {
  return (
    <section className="content">
      <Skill path={cssImg} />
      <Skill path={htmlImg} />
      <Skill path={urlImg} />
    </section>
  );
};

export default Content;
