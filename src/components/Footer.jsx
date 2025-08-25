import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaBriefcase,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-sm mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Logo & Description */}
          <div className="flex flex-col items-start max-w-xs">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 mb-4 cursor-pointer transition-colors hover:text-indigo-600 dark:hover:text-purple-400"
            >
              <img
                src="/yousuf-logo.png"
                alt="PortfoGen Logo"
                className="w-12 h-12 md:w-14 md:h-14 transition-all duration-300 ease-in-out brightness-95 dark:brightness-150 drop-shadow-md dark:drop-shadow-xl"
              />
              <span className="text-lg md:text-2xl font-bold">
                Portfo<span className="text-blue-500">Gen</span>
              </span>
            </a>
            <p>
              A freelance marketplace for small tasks where users can post jobs,
              bid, and connect based on skills, budget, and deadlines.
            </p>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 flex-1">
            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-4 text-indigo-500 dark:text-purple-500">Categories</h3>
              <ul className="space-y-2">
                {[
                  { path: "#template1", label: " Light" },
                  { path: "#template2", label: " Dark" },
                  { path: "#template3", label: " Creative" },
                  { path: "#template5", label: " Exclusive" },
                ].map(({ path, label }) => (
                  <li key={path}>
                    <a
                      href={path}
                      className="hover:underline hover:text-indigo-500 dark:hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>


            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4 text-indigo-500 dark:text-purple-500">Social Links</h3>
              <div className="flex flex-wrap items-center gap-4 text-base font-semibold">
                {[
                  { href: "https://www.facebook.com/yousufali156", icon: <FaFacebook />, label: "Facebook" },
                  { href: "https://www.linkedin.com/in/yousufali156/", icon: <FaLinkedin />, label: "LinkedIn" },
                  { href: "https://www.instagram.com/mdyousufali001", icon: <FaInstagram />, label: "Instagram" },
                  { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
                  { href: "https://yousufali-portfolio.vercel.app/", icon: <FaBriefcase />, label: "Portfolio" },
                  { href: "https://github.com/yousufali156", icon: <FaGithub />, label: "GitHub" }
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline hover:text-indigo-500 dark:hover:text-purple-500 transition-colors duration-200 cursor-pointer"
                  >
                    {icon}
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4 text-indigo-500 dark:text-purple-500">Contact Us</h3>
              <ul className="space-y-3">
                <li>
                  📧 <a href="mailto:mdyousufali.dev@gmail.com" className="hover:underline hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200">support@portfogen.com</a>
                </li>
                <li>
                  📞 <a href="tel:+8801754954385" className="hover:underline hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200">+880 1754 954385</a>
                </li>
                <li>📍 Bogura, Rajshahi, BD 5800</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo and copyright */}
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center gap-2">
              <img
                src="/yousuf-logo.png"
                alt="PortfoGen Logo"
                className="w-12 h-12 md:w-14 md:h-14 transition-all duration-300 ease-in-out brightness-95 dark:brightness-150 drop-shadow-md dark:drop-shadow-xl"
              />
              <span className="text-lg md:text-2xl font-bold">
                Portfo<span className="text-blue-500">Gen</span>
              </span>
            </a>
            <span>© Md. Yousuf Ali {new Date().getFullYear()}</span>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/2">
            <h3 className="font-semibold text-center mb-1">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md hover:brightness-110 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Bottom social icons */}
          <div className="flex items-center gap-4 text-xl">
            <a href="https://github.com/yousufali156" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/yousufali156/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaLinkedin /></a>
            <a href="https://www.facebook.com/yousufali156" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaFacebook /></a>
            <a href="https://www.instagram.com/mdyousufali001" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;