import { useState, useEffect } from 'react';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/VeltexLogo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Work', to: '/case-studies', hasDropdown: false },
    { label: 'Services', to: '/services', hasDropdown: false },
    { label: 'Creators', to: '/creators', hasDropdown: false },
    { label: 'About', to: '/about', hasDropdown: false },
  ];

  const isLightPage = !isHomePage;
  const isSticky = scrolled || isLightPage;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-brand-dark/80 backdrop-blur-lg border-b border-white/10 shadow-xl' 
          : isHomePage 
            ? 'bg-transparent' 
            : 'bg-brand-dark/40 backdrop-blur-md'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={logo} alt="Veltex" className="h-10 w-auto" />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`px-4 py-2 text-sm font-bold tracking-wide transition-colors hover:text-brand-green text-white`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex px-7 py-3 bg-brand-blue hover:bg-brand-blue/90 text-white text-sm font-bold rounded-md transition-all hover:shadow-lg"
          >
            Contact Us
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-all bg-white ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 mb-1.5 transition-all bg-white ${mobileOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 transition-all bg-white ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-gray-800 font-semibold text-sm hover:bg-gray-50 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 px-4 py-3 bg-brand-blue text-white text-center font-bold rounded-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
