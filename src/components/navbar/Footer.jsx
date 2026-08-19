import '../styles/Footer.css';

const YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-text">© {YEAR} Richlee E. Hernandez</span>
      <div className="footer-social">
        <a href="#" target="_blank" rel="noreferrer" aria-label="GitHub">
          <i className="ti ti-brand-github" aria-hidden="true"></i>
        </a>
        <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <i className="ti ti-brand-linkedin" aria-hidden="true"></i>
        </a>
        <a href="mailto:youremail@example.com" aria-label="Email">
          <i className="ti ti-mail" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;