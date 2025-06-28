import React, { useRef, useState, useEffect } from 'react';
import Preview from './Preview';
import GeneratorForm from './GeneratorForm';

const initialPortfolioData = {
  template: 'template5',
  personalInfo: {
    name: 'Md. Yousuf Ali',
    designation: 'MERN Stack Developer',
    photo: 'https://placehold.co/400x400/1f2937/ffffff?text=ME',
    email: 'yousuf.ali@example.com',
    phone: '+880 1700 000000',
    whatsapp: '+880 1700 000000',
    resumeUrl: './resume.pdf',
  },
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/your-username' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/your-username' },
    { name: 'Twitter', url: 'https://twitter.com/your-username' },
  ],
  about:
    'I am a passionate MERN stack developer with a knack for building elegant and efficient web applications...',
  skills: [
    { name: 'React', level: 95 },
    { name: 'Node.js', level: 88 },
    { name: 'Express.js', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'JavaScript', level: 92 },
    { name: 'Tailwind CSS', level: 98 },
    { name: 'Git & GitHub', level: 90 },
    { name: 'REST API', level: 94 },
  ],
  experience: [
    {
      title: 'Full Stack Developer',
      company: 'Creative Tech Park',
      duration: 'Jan 2022 - Present',
      responsibilities: 'Led development...',
    },
  ],
  projects: [
    {
      name: 'E-commerce Platform',
      description: 'A full-featured e-commerce website...',
      stack: 'React, Node.js, MongoDB, Stripe',
      liveLink: '#',
      repoLink: '#',
      image: 'https://placehold.co/600x400/2563eb/ffffff?text=E-commerce',
      challenges: 'Secure payment integration...',
      improvements: 'Recommendation engine...',
    },
    {
      name: 'Task Management App',
      description: 'A collaborative task management...',
      stack: 'React, Firebase, Tailwind CSS',
      liveLink: '#',
      repoLink: '#',
      image: 'https://placehold.co/600x400/10b981/ffffff?text=Task+Manager',
      challenges: 'Real-time sync...',
      improvements: 'Calendar integration...',
    },
    {
      name: 'Portfolio Generator',
      description: 'A dynamic portfolio generator...',
      stack: 'Next.js, GraphQL, Vercel',
      liveLink: '#',
      repoLink: '#',
      image: 'https://placehold.co/600x400/f97316/ffffff?text=Portfolio+Gen',
      challenges: 'Modular template system...',
      improvements: 'Add more templates...',
    },
  ],
  education: {
    degree: 'B.Sc in Computer Science & Engineering',
    institution: 'Leading University, Sylhet',
  },
};

const GeneratorPage = ({ selectedTemplate, setSelectedTemplate }) => {
  const [portfolioData, setPortfolioData] = useState(() => ({
    ...initialPortfolioData,
    template: selectedTemplate || initialPortfolioData.template,
  }));

  const previewRef = useRef(null);

  useEffect(() => {
    if (selectedTemplate && selectedTemplate !== portfolioData.template) {
      setPortfolioData((prev) => ({ ...prev, template: selectedTemplate }));
    }
  }, [selectedTemplate]);

  const handleTemplateChange = (value) => {
    setPortfolioData((prev) => ({ ...prev, template: value }));
    setSelectedTemplate(value);
  };

  const handleDownload = () => {
    if (!previewRef.current) return;
    const htmlString = previewRef.current.innerHTML;
    const fullHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${portfolioData.personalInfo.name}'s Portfolio</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Lora:wght@400;600&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; }
          .font-serif { font-family: 'Lora', serif; }
        </style>
      </head>
      <body>${htmlString}</body>
      </html>
    `;
    const blob = new Blob([fullHtml], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'portfolio.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const TemplateOption = ({ value, label, imgSrc }) => (
    <label
      className={`cursor-pointer border-2 rounded-lg p-2 flex flex-col items-center transition-all duration-200 ${
        portfolioData.template === value ? 'border-indigo-500' : 'border-gray-300'
      }`}
    >
      <input
        type="radio"
        name="template"
        value={value}
        checked={portfolioData.template === value}
        onChange={(e) => handleTemplateChange(e.target.value)}
        className="sr-only"
      />
      <img src={imgSrc} alt={`${label} Template`} className="rounded w-full h-20 object-cover" />
      <p className="text-center text-sm mt-1">{label}</p>
    </label>
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left side: Form and template selector */}
      <div className="w-full lg:w-4/12 xl:w-5/12 bg-gray-50 overflow-y-auto">
        <div className="p-4 bg-white rounded-b-lg lg:rounded-none lg:rounded-r-lg shadow lg:sticky lg:top-0 z-10">
          <h3 className="text-xl font-semibold mb-2">Choose a Template</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
            <TemplateOption
              value="template1"
              label="Corporate"
              imgSrc="https://placehold.co/150x100/e0e7ff/3730a3?text=Light"
            />
            <TemplateOption
              value="template2"
              label="Dark"
              imgSrc="https://placehold.co/150x100/1f2937/93c5fd?text=Dark"
            />
            <TemplateOption
              value="template5"
              label="Exclusive"
              imgSrc="https://placehold.co/150x100/4f46e5/ffffff?text=Exclusive"
            />
            <TemplateOption
              value="template3"
              label="Creative"
              imgSrc="https://placehold.co/150x100/fef2f2/ef4444?text=Creative"
            />
            <TemplateOption
              value="template4"
              label="Elegant"
              imgSrc="https://placehold.co/150x100/f9fafb/6b7280?text=Elegant"
            />
          </div>
          <button
            onClick={handleDownload}
            className="w-full mt-4 bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition-all duration-200 text-sm sm:text-base"
          >
            Download HTML
          </button>
        </div>
        <GeneratorForm portfolio={portfolioData} setPortfolio={setPortfolioData} />
      </div>

      {/* Right side: Preview */}
      <div className="w-full lg:w-8/12 xl:w-7/12 border-t lg:border-t-0 lg:border-l overflow-y-auto bg-white min-h-screen">
        <Preview portfolioData={portfolioData} ref={previewRef} />
      </div>
    </div>
  );
};

export default GeneratorPage;
