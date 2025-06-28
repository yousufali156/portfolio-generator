import React from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaExternalLinkAlt,
  FaPaperPlane,
} from 'react-icons/fa';
import Footer from '../Footer';

const About = () => {
  return (
    <div className="text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-16 py-12 bg-gradient-to-br from-blue-50 to-white text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">Md. Yousuf Ali</h1>
        <p className="text-xl font-medium text-blue-600 mb-4">MERN Stack Developer</p>

        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-2">
          💻 I build modern, secure & SEO-friendly websites for various platforms.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-2">
          ⚙ Skilled in MERN stack, Firebase, and Tailwind to craft scalable solutions.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-6">
          📱 Fully responsive, fast-loading & custom-built—perfect for your brand.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:mdyousufali.dev@gmail.com"
            className="inline-flex items-center bg-green-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-700 transition"
          >
            <FaPaperPlane className="mr-2" /> Hire Me
          </a>
          <a
            href="https://yousufali-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-blue-600 text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition"
          >
            <FaExternalLinkAlt className="mr-2" /> Live Portfolio
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section className="px-4 sm:px-6 lg:px-16 py-12 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">About Me</h2>

        <div className="space-y-6 max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          <div>
            <h3 className="text-2xl font-semibold mb-2">My Programming Journey</h3>
            <p>
              My journey into programming began out of curiosity, which quickly evolved into a full-fledged passion.
              Starting with the basics of web development, I was fascinated by how lines of code could transform into
              interactive and functional websites. This led me to explore the MERN stack, and I fell in love with the
              power and flexibility of JavaScript for both frontend and backend development.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">What I Love to Build</h3>
            <p>
              I enjoy building applications that solve real-world problems and provide a seamless user experience.
              Whether it's a complex e-commerce platform or a simple utility app, I am driven by the challenge of
              turning an idea into a tangible product. I'm particularly interested in building scalable systems and
              working on projects that require creative problem-solving.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Beyond the Code</h3>
            <p>
              Outside of programming, I'm an avid cricket fan and love to follow the matches. I also enjoy painting,
              which I find is a great way to express creativity in a different medium. These hobbies help me maintain a
              fresh perspective and bring a balanced approach to my work.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-4 sm:px-6 lg:px-16 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Education</h2>

        <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          <p className="mb-2 font-semibold">🎓 Master of Social Science in Economics</p>
          <p>
            I completed my Master's in Economics from <strong>Govt. Azizul Haque College, Bogura</strong> <br />
            <em>Session: 2019–2020</em>
          </p>
          <p className="mt-4">
            I'm Md. Yousuf Ali, completed my MSS in Economics with a strong foundation in economic theory, statistics,
            and research. Now working as a Full Stack Developer, combining analytical thinking with modern web
            technologies to build scalable digital solutions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-16 py-12 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Get In Touch</h2>

        <div className="max-w-xl mx-auto text-center text-lg text-gray-700 space-y-3">
          <p>I'm currently available for freelance work and open to new opportunities. Feel free to reach out!</p>

          <p className="flex items-center justify-center gap-2">
            <FaEnvelope /> mdyousufali.dev@gmail.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaPhoneAlt /> +880 1754 954385
          </p>

          <div className="flex justify-center gap-5 mt-4 text-2xl text-blue-600">
            <a href="https://linkedin.com/in/yousufali156" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/yousufali156" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://x.com/yousufali156" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/yousufali156" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default About;
