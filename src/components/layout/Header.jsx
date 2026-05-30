import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'INÍCIO', path: '/' },
  { label: 'CURSOS', path: '/#courses' },
  { label: 'PRÁTICA', path: '/#practical' },
  { label: 'INTERNACIONAL', path: '/#international' },
  { label: 'COMANDANTES', path: '/comandantes' },
  { label: 'LIVROS', path: '/livros' },
  { label: 'REFERÊNCIAS', path: '/referencias' },
  { label: 'SOBRE', path: '/#about' },
  { label: 'CONTATO', path: '/#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path) => {
    setIsOpen(false);
    if (path === '/') {
      if (location.pathname !== '/') {
        window.location.href = '/';
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (path.includes('#')) {
      const id = path.split('#')[1];
      if (location.pathname !== '/') {
        window.location.href = path;
      } else {
        const el = document.getElementById(id);
        if (el) {
          const offset = 80;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    }
  };

  const solidHeader = scrolled || !isHome;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-ship ${
          solidHeader
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-orange/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center group" onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img
              src="/images/logo.png"
              alt="NAUTK"
              className={`h-8 object-contain transition-all duration-500 ease-ship ${solidHeader ? 'brightness-50' : 'brightness-0 invert'}`}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`font-mono text-xs tracking-[0.15em] hover:text-orange transition-colors duration-300 ease-ship ${solidHeader ? 'text-navy/70' : 'text-white/80'}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={() => handleNavClick('/#contact')}
              className="font-mono text-xs tracking-[0.15em] bg-orange text-white px-5 py-2.5 hover:bg-orange/90 transition-all duration-300 ease-ship"
            >
              MATRICULE-SE
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden w-11 h-11 flex items-center justify-center transition-colors duration-500 ease-ship ${solidHeader ? 'text-navy' : 'text-white'}`}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-40 bg-white pt-20 px-8 md:hidden"
          >
            <nav className="flex flex-col gap-8 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className="font-archivo text-2xl tracking-widest text-navy"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/#contact"
                onClick={() => handleNavClick('/#contact')}
                className="font-archivo text-2xl tracking-widest text-orange"
              >
                MATRICULE-SE
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}