import "./Header.css";

export const Header = () => {
  return (
    <header className="bg-dark">
      <nav className="nav">
        <div>
          <img className="icon" src="/logo.png" alt="Logo" />
        </div>
        <div className="nav-links">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Java</p>
        </div>
        <div>
          <img className="icon" src="/user.png" alt="user profile" />
        </div>
      </nav>
    </header>
  );
};

export default Header;