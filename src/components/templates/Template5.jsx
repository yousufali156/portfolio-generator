import React, { useState } from 'react';

// --- NEW EXCLUSIVE TEMPLATE ---
const Template5 = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Project Details Modal
  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 font-sans">
        <div className="bg-gray-800 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto text-white">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold mb-4 text-indigo-400">{project.name}</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl font-bold">&times;</button>
            </div>
            <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded-lg mb-4"/>
            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-2 text-indigo-300">Technology Stack:</h4>
              <p className="text-gray-300">{project.stack}</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-2 text-indigo-300">Description:</h4>
              <p className="text-gray-300">{project.description}</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-2 text-indigo-300">Challenges Faced:</h4>
              <p className="text-gray-300">{project.challenges}</p>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2 text-indigo-300">Future Improvements:</h4>
              <p className="text-gray-300">{project.improvements}</p>
            </div>
            <div className="flex space-x-4">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg">Live Link</a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-20 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#hero" className="font-bold text-xl text-indigo-400">Portfolio</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#skills" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Skills</a>
                <a href="#projects" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                <span className="block text-gray-300">Hello, I'm</span>
                <span className="block text-indigo-400">{data.personalInfo.name}</span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl text-gray-400 md:mt-5">{data.personalInfo.designation}</p>
              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <a href={data.personalInfo.resumeUrl} download className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Download Resume</a>
                <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 border border-gray-600 text-base font-medium rounded-md text-white bg-transparent hover:bg-gray-700">Contact Me</a>
              </div>
              <div className="mt-6 flex justify-center md:justify-start space-x-6">
                {data.socialLinks.map(l => (
                  <a href={l.url} key={l.name} className="text-gray-400 hover:text-indigo-400">{l.name}</a>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <img className="h-64 w-64 md:h-80 md:w-80 rounded-full object-cover ring-4 ring-offset-4 ring-offset-gray-900 ring-indigo-500" src={data.personalInfo.photo} alt={data.personalInfo.name} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">About Me</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">A little bit about myself</p>
              <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">{data.about}</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Skills</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">What I Can Do</p>
            </div>
            <div className="mt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {data.skills.map(s => (
                  <div key={s.name} className="text-center">
                    <div className="text-lg font-medium text-white">{s.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Career</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">My Professional Journey</p>
            </div>
            <div className="mt-12 max-w-4xl mx-auto">
              {data.experience.map(e => (
                <div key={e.company} className="bg-gray-900 p-6 rounded-lg mb-6 shadow-lg">
                  <h3 className="text-xl font-bold text-white">{e.title}</h3>
                  <p className="text-indigo-400 font-semibold">{e.company} | {e.duration}</p>
                  <p className="mt-2 text-gray-300">{e.responsibilities}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Projects</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Some of my work</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {data.projects.map(p => (
                <div key={p.name} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <img className="h-48 w-full object-cover" src={p.image} alt={p.name}/>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                    <p className="mt-2 text-base text-gray-400">{p.description}</p>
                    <div className="mt-4">
                      <button onClick={() => setSelectedProject(p)} className="w-full text-indigo-400 hover:text-indigo-300 font-semibold">View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-800">
          <div className="max-w-xl mx-auto text-center px-4">
            <h2 className="text-3xl font-extrabold text-white">Contact Me</h2>
            <p className="mt-4 text-lg text-gray-300">Feel free to reach out for collaborations or just a friendly hello!</p>
            <div className="mt-8 space-y-4">
              <p className="text-lg text-indigo-400">{data.personalInfo.email}</p>
              <p className="text-lg text-gray-300">{data.personalInfo.phone}</p>
              <a href={`https://wa.me/${data.personalInfo.whatsapp}`} className="inline-block text-lg text-green-400 hover:text-green-300">WhatsApp Me</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {data.personalInfo.name}. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Template5;
