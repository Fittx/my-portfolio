import '../styles/Header.css';

function Header({ theme, onToggleTheme }) {
  return (
    <nav className="site-header">
      <span className="header-logo">REH</span>
      <div className="header-right">
        <ul className="header-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#classmates">Classmates</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="header-sep"></div>
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle light and dark mode"
        >
          <i className={`ti ${theme === 'dark' ? 'ti-moon' : 'ti-sun'}`} aria-hidden="true"></i>
        </button>
      </div>
    </nav>
  );
}

export default Header;