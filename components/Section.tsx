import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  grayBg?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = '', grayBg = false }) => {
  return (
    <section className={`py-16 md:py-24 ${grayBg ? 'bg-gray-100' : 'bg-white'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-12 text-center max-w-3xl mx-auto">
            {title && <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;