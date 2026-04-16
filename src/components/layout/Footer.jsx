import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo2.png";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Assessment", to: "/assessment" },
  { label: "Contact", to: "/contact" },
];

const iconButtonClass =
  "flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300/14 bg-white/6 text-emerald-50 transition hover:border-emerald-300/40 hover:bg-emerald-400/14 hover:text-white";

const Footer = () => {
  return (
    <footer id="site-footer" className="bg-[linear-gradient(180deg,#0f3d35_0%,#0d312c_100%)] px-4 pb-8 pt-10 text-emerald-50 sm:px-6 md:pb-12 md:pt-16">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-emerald-300/10 bg-[linear-gradient(180deg,rgba(17,75,65,0.96)_0%,rgba(10,49,44,0.98)_100%)] px-6 py-10 shadow-[0_30px_80px_rgba(4,20,18,0.35)] sm:rounded-[2.5rem] sm:px-10 md:px-12 md:py-14">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <Link to="/" className="group flex items-center justify-center gap-3 lg:justify-start">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-emerald-300/12 ring-1 ring-emerald-200/20 sm:h-11 sm:w-11 transition-all duration-300 group-hover:ring-emerald-300/40">
              <img src={logo} alt="Samhitha logo" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </span>
            <div className="flex flex-col items-start justify-center pt-0.5 leading-none">
              <span className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                <span>Sam</span>
                <span className="text-emerald-300">hitha</span>
              </span>
              <span className="mt-1 text-[9px] font-black uppercase tracking-[0.22em] text-emerald-100/60 sm:text-[10px]">
                Save the joint
              </span>
            </div>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium sm:gap-x-12 lg:w-auto lg:gap-x-10">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-emerald-50/82 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-3">
            <a href="#" aria-label="Twitter" className={iconButtonClass}>
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M18.9 7.2c.8-.1 1.5-.5 2.1-1-.3.8-.9 1.5-1.7 2 .8 0 1.5-.3 2.1-.6-.5.8-1.2 1.4-2 1.9v.5c0 5.2-4 11.2-11.2 11.2-2.2 0-4.3-.6-6.1-1.8h.9c1.8 0 3.5-.6 4.8-1.7-1.7 0-3.2-1.2-3.7-2.8h.7c.3 0 .6 0 .9-.1-1.8-.4-3.1-1.9-3.1-3.8v-.1c.5.3 1.1.5 1.8.5-1.1-.7-1.8-1.9-1.8-3.3 0-.7.2-1.4.6-2 2 2.5 5.1 4.1 8.5 4.3-.1-.3-.1-.7-.1-1 0-2.3 1.8-4.1 4.1-4.1 1.2 0 2.2.5 3 1.3.9-.2 1.8-.5 2.6-1-.3 1-1 1.8-1.9 2.3Z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className={`${iconButtonClass} bg-emerald-400/18 text-white hover:border-emerald-300 hover:bg-emerald-400/24`}>
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4V10H8.3v3h2.6v8h2.6Z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className={iconButtonClass}>
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.7 1.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className={iconButtonClass}>
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.5 1.1 3.1.9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5A3.9 3.9 0 0 1 7.6 8c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9 9 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.7 5 .4.3.8 1 .8 2v3c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.2C22 6.6 17.5 2 12 2Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-7 h-px w-full bg-emerald-200/10 md:mt-8" />

        <div className="mt-5 flex flex-col gap-2 text-center text-xs text-emerald-50/68 sm:text-sm md:mt-6 md:flex-row md:items-center md:justify-between md:text-left">
          <p className="max-w-xl">Built around guided joint care, clear recovery steps, and assessment-led support.</p>
          <p className="text-emerald-50/78">© 2026 Samhitha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
