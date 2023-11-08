import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="menu">
        <li className="menu-item">
          <a href="#">Home</a>
        </li>
        <li className="menu-item">
          <a href="#">Services</a>
        </li>
        <li className="menu-item">
          <a href="#">News</a>
        </li>
        <li className="menu-item">
          <a href="#">Blog</a>
        </li>
        <li className="menu-item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
