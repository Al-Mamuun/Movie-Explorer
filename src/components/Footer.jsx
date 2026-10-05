import { Film } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="brand-heading">
          <Film size={24} strokeWidth={2} aria-hidden="true" />
          <span>MovieExplorer</span>
        </h3>

        <p className="copyright">© 2026 MovieExplorer. Abdullah Al-Mamun.</p>
      </div>
    </footer>
  );
}

export default Footer;
