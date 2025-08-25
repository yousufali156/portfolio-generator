import React from 'react';

import Template1 from './templates/Template1';
import Template2 from './templates/Template2';
import Template3 from './templates/Template3';
import Template4 from './templates/Template4';
import Template5 from './templates/Template5';

const Preview = React.forwardRef(({ portfolioData }, ref) => (
  <div className="bg-gray-700 h-full p-2 overflow-y-auto">
    <div className="bg-white shadow-lg max-w-4xl mx-auto rounded-lg overflow-hidden" ref={ref}>
      {portfolioData.template === 'template1' && <Template1 data={portfolioData} />}
      {portfolioData.template === 'template2' && <Template2 data={portfolioData} />}
      {portfolioData.template === 'template3' && <Template3 data={portfolioData} />}
      {portfolioData.template === 'template4' && <Template4 data={portfolioData} />}
      {portfolioData.template === 'template5' && <Template5 data={portfolioData} />}
    </div>
  </div>
));

export default Preview;