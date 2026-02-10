import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO, LEGAL_DISCLAIMER } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold text-brand-800 tracking-tight">88부동산</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-brand-700 font-bold'
                      : 'text-gray-600 hover:text-brand-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-700 p-2 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-4 text-base font-medium rounded-md ${
                     location.pathname === item.path
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Floating Call Button (Mobile Only) */}
      <a
        href={`tel:${CONTACT_INFO.phone}`}
        className="fixed bottom-6 right-6 md:hidden z-40 bg-brand-600 text-white p-4 rounded-full shadow-lg hover:bg-brand-700 transition-colors"
        aria-label="전화 걸기"
      >
        <Phone size={24} />
      </a>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">88부동산 공인중개사사무소</h3>
              <p className="mb-2">대표: 홍길동 | 등록번호: {CONTACT_INFO.registrationNumber}</p>
              <p className="mb-2">주소: {CONTACT_INFO.address}</p>
              <p className="mb-2">전화: {CONTACT_INFO.phone}</p>
            </div>
            <div className="text-sm bg-slate-800 p-4 rounded-lg border border-slate-700">
              <p className="leading-relaxed text-slate-400">
                {LEGAL_DISCLAIMER}
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} 88부동산. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href={CONTACT_INFO.youtubeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">유튜브 채널</a>
              <a href={CONTACT_INFO.blogUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">네이버 블로그</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;