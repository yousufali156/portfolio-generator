import React, { useState } from 'react';

const Navbar = ({ page, setPage, selectedTemplate, setSelectedTemplate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
    setPage('generator');
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (pageName) => {
    setPage(pageName);
    setIsMobileMenuOpen(false);
  };

  const templateLabels = {
    template1: 'Light',
    template2: 'Dark',
    template3: 'Creative',
    template4: 'Elegant',
    template5: 'Exclusive',
  };

  return (
    <nav className="bg-white shadow-md w-full fixed z-30 top-0 start-0">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setPage('home');
          }}
          className="flex items-center gap-2"
        >
          <img
            src="/yousuf-logo.png"
            alt="Yousuf Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-green-400">
            Portfo<span className="text-blue-500">Gen</span>
          </span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('home')}
            className={`text-gray-700 hover:text-blue-600 font-medium rounded-lg text-sm px-3 py-2 ${page === 'home' ? 'border-b-2 border-blue-600' : ''
              }`}
          >
            Home
          </button>

          {Object.entries(templateLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => handleTemplateClick(key)}
              type="button"
              className={`text-gray-700 hover:text-blue-600 font-medium rounded-lg text-sm px-3 py-2 ${page === 'generator' && selectedTemplate === key ? 'border-b-2 border-blue-600' : ''
                }`}
            >
              {label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick('about')}
            className={`text-gray-700 hover:text-blue-600 font-medium rounded-lg text-sm px-3 py-2 ${page === 'about' ? 'border-b-2 border-blue-600' : ''
              }`}
          >
            About Me
          </button>

          <button
            onClick={() => handleNavClick('generator')}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Create Your Portfolio
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md px-4 pb-4">
          <div className="flex flex-col space-y-2 mt-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left text-gray-700 font-medium rounded-lg px-4 py-2 ${page === 'home' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                }`}
            >
              Home
            </button>

            {Object.entries(templateLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => handleTemplateClick(key)}
                className={`text-left text-gray-700 font-medium rounded-lg px-4 py-2 ${page === 'generator' && selectedTemplate === key
                  ? 'bg-blue-100 text-blue-700'
                  : 'hover:bg-gray-100'
                  }`}
              >
                {label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick('about')}
              className={`text-left text-gray-700 font-medium rounded-lg px-4 py-2 ${page === 'about' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                }`}
            >
              About Me
            </button>

            <button
              onClick={() => handleNavClick('generator')}
              className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 py-2 text-sm"
            >
              Create Your Portfolio
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
