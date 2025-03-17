import "./Header.css";

export const Header = () => {
  return (
    <header className="bg-dark">
      <nav className="nav">
        <div>
          <img src="/logo.png" alt="Logo" />
        </div>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React</p>
        <p>Java</p>
        <div>
          <img src="/user.png" alt="user profile" />
        </div>
      </nav>
    </header>
  );
};

export default Header;