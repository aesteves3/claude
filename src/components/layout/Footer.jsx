import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Mail, Phone, MapPin, Anchor, Navigation } from 'lucide-react';

export default function Footer() {
  const location = useLocation();

  const handleNavClick = (e, path) => {
    if (path === '/') {
      if (location.pathname !== '/') {
        window.location.href = '/';
      } else {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (path.includes('#')) {
      const id = path.split('#')[1];
      if (location.pathname !== '/') {
        window.location.href = path;
      } else {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
          const offset = 80;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className="bg-navy text-white/80">
      {/* Instrumentation line */}
      <div className="h-px bg-orange/30" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <img
                src="https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/f408f3d67_noBgColor.png"
                alt="NAUTK"
                className="h-8 object-contain brightness-0 invert opacity-80"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              Instituto de Comando Marítimo. Formando navegadores com excelência e precisão desde o primeiro rumo.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] text-orange mb-6">NAVEGAÇÃO</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Início', path: '/' },
                { label: 'Cursos', path: '/#courses' },
                { label: 'Prática', path: '/#practical' },
                { label: 'Internacional', path: '/#international' },
                { label: 'Comandantes', path: '/comandantes' },
                { label: 'Livros', path: '/livros' },
                { label: 'Referências', path: '/referencias' },
                { label: 'Sobre', path: '/#about' },
                { label: 'Contato', path: '/#contact' },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className="text-sm text-white/60 hover:text-orange transition-colors duration-300 ease-ship"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] text-orange mb-6">CERTIFICAÇÕES</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/course/arrais" className="text-sm text-white/60 hover:text-orange transition-colors duration-300 ease-ship flex items-center gap-2">
                <Anchor className="w-3 h-3" /> Arrais Amador
              </Link>
              <Link to="/course/mestre" className="text-sm text-white/60 hover:text-orange transition-colors duration-300 ease-ship flex items-center gap-2">
                <Navigation className="w-3 h-3" /> Mestre Amador
              </Link>
              <Link to="/course/capitao" className="text-sm text-white/60 hover:text-orange transition-colors duration-300 ease-ship flex items-center gap-2">
                <Compass className="w-3 h-3" /> Capitão Amador
              </Link>
              <Link to="/#international" onClick={(e) => handleNavClick(e, '/#international')} className="text-sm text-white/60 hover:text-orange transition-colors duration-300 ease-ship flex items-center gap-2">
                <Navigation className="w-3 h-3" /> Internacional
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] text-orange mb-6">CONTATO</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:contato@nautk.org" className="text-sm text-white/60 hover:text-orange transition-colors duration-300 ease-ship flex items-center gap-2">
                <Mail className="w-3 h-3" /> contato@nautk.org
              </a>
              <a href="https://wa.me/5511913112332" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-orange transition-colors duration-300 ease-ship flex items-center gap-2">
                <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                +55 (11) 91311-2332
              </a>
              <span className="text-sm text-white/60 flex items-center gap-2">
                <MapPin className="w-3 h-3" /> São Paulo, Ilhabela, Represa Guarapiranga
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/30 tracking-wider">
            © 2026 NAUTK — INSTITUTO DE COMANDO MARÍTIMO
          </p>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-white/30 tracking-wider">
              LAT 22°54'S &nbsp; LON 43°10'W
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}