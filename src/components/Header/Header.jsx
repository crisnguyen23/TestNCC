import "./Header.scss";
import logoNCC from "../../assets/images/logoNCC.png";

const Header = () => {
  return (
    <header className="header">
      <figure className="header-logo">
        <img srcSet={`${logoNCC} 2x`} alt="NCC logo" className="img-logo" />
      </figure>
      <div className="des">
        <h3 className="des-header">Lorem ipsum dolor sit amet?</h3>
        <p className="des-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>
    </header>
  );
};

export default Header;
