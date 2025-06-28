import React, { useState } from 'react';

import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Template1 from './components/templates/Template1';
import Template2 from './components/templates/Template2';
import Template3 from './components/templates/Template3';
import Template4 from './components/templates/Template4';
import Template5 from './components/templates/Template5';
import GeneratorPage from './components/GeneratorPage';
import About from './components/About/About';
import Footer from './components/Footer';

const App = () => {
  const [page, setPage] = useState('home');
  const [selectedTemplate, setSelectedTemplate] = useState('template5');

  // Map of templates for dynamic rendering
  const templates = {
    template1: Template1,
    template2: Template2,
    template3: Template3,
    template4: Template4,
    template5: Template5,
  };

  const TemplateComponent = templates[page]; // Will be undefined if page !== template1-5

  return (
    <>
      <Navbar
        page={page}
        setPage={setPage}
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
      />

      {page === 'home' && <HomePage setPage={setPage} />}

      {TemplateComponent && <TemplateComponent />}

      {page === 'generator' && (
        <GeneratorPage
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
      )}

      {page === 'about' && (
        <About
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
      )}
      {page === 'footer' && (
        <Footer
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
      )}
    </>
  );
};

export default App;
