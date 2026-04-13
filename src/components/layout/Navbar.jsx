import { useState } from "react";
import { Link } from "react-router-dom";

const MenuIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-semibold tracking-wide text-slate-900">
          <span>Sam</span>
          <span className="text-primary">hitha</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          <Link to="/" className="transition hover:text-slate-900">
            Home
          </Link>
          <Link to="/about" className="transition hover:text-slate-900">
            About
          </Link>
          <a href="/#how" className="transition hover:text-slate-900">
            How it Works
          </a>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button className="text-sm text-slate-600 transition hover:text-slate-900">
            Login
          </button>

          <Link
            to="/assessment"
            className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white shadow-lg shadow-teal-500/20 transition hover:bg-secondary"
          >
            Start Assessment
          </Link>
        </div>

        <button
          type="button"
          className="text-slate-900 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isOpen && (
        <div className="px-6 pb-6 md:hidden">
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/70">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-slate-600 hover:text-slate-900"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block text-slate-600 hover:text-slate-900"
            >
              About
            </Link>

            <a
              href="/#how"
              onClick={() => setIsOpen(false)}
              className="block text-slate-600 hover:text-slate-900"
            >
              How it Works
            </a>

            <div className="space-y-3 border-t border-slate-200 pt-4">
              <button className="w-full text-left text-slate-600 hover:text-slate-900">
                Login
              </button>

              <Link
                to="/assessment"
                onClick={() => setIsOpen(false)}
                className="block w-full rounded-xl bg-primary px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-secondary"
              >
                Start Assessment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
