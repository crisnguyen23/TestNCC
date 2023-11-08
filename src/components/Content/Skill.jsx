import "./Content.scss";

const Skill = ({ path }) => {
  return (
    <div className="content-container">
      <h2 className="content-header">Lorem ipsum dolor sit amet</h2>
      <div className="content-info">
        <figure className="img">
          <img srcSet={`${path} 2x`} alt="" />
        </figure>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
          sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
          accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
          massa in metus bibendum congue. Pellentesque ultrices liquam egestas
          nunc at
        </p>
      </div>
    </div>
  );
};

export default Skill;
