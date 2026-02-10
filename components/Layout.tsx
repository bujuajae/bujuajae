import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Youtube, PenTool } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';

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
      <footer className="bg-[#222] text-[#ccc] pt-[60px] pb-[20px] px-[20px] text-[0.95rem]">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-[40px] text-left">
            {/* Footer Info */}
            <div className="mb-[20px] md:mb-0">
              <h2 className="text-white text-[1.5rem] font-bold mb-[20px]">88부동산</h2>
              <div className="space-y-[8px]">
                <p><strong className="text-[#ffce00] text-[1.1rem]">대표 공인중개사: 전용성</strong></p>
                <p>{CONTACT_INFO.address}</p>
                <p>사업자등록번호: 413-60-00000 | 등록번호: {CONTACT_INFO.registrationNumber}</p>
              </div>
            </div>

            {/* Footer Contact */}
            <div className="mb-[20px] md:mb-0">
              <h3 className="text-white text-[1.1rem] font-bold mb-[20px]">상담 문의</h3>
              <p className="text-[1.2rem] text-white font-bold mb-[8px]">{CONTACT_INFO.phone}</p>
              <p>카카오톡: 88부동산</p>
            </div>

            {/* Footer Social */}
            <div>
              <h3 className="text-white text-[1.1rem] font-bold mb-[20px]">소셜 미디어</h3>
              <div className="flex gap-[15px]">
                <a 
                  href={CONTACT_INFO.youtubeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="부주아재 유튜브"
                  className="w-[40px] h-[40px] bg-[#444] text-white rounded-full flex items-center justify-center transition-colors hover:bg-[#ffce00] hover:text-black text-[1.2rem]"
                >
                  <Youtube size={20} />
                </a>
                <a 
                  href={CONTACT_INFO.blogUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="88부동산 블로그"
                  className="w-[40px] h-[40px] bg-[#444] text-white rounded-full flex items-center justify-center transition-colors hover:bg-[#ffce00] hover:text-black text-[1.2rem]"
                >
                  <PenTool size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-[50px] pt-[20px] border-t border-[#333] text-center text-[0.8rem] text-[#666]">
            &copy; {new Date().getFullYear()} 88부동산. All Rights Reserved. | 책임중개 전용성
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;