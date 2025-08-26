import React from 'react';
import TextRotatingAnimation from '@/components/TextRotatingAnimation';

const TextRotationDemoPage: React.FC = () => {
  const serviceTexts = [
    'Websites',
    'Plugins', 
    'Web Apps',
    'Portals',
    'Communities',
    'Digital Marketing'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Text Rotating Animation Demo
          </h1>
          
          <div className="grid gap-8">
            {/* Basic Example */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-700">
                Basic Animation
              </h2>
              <div className="flex items-center justify-center">
                <span className="text-xl text-gray-600 mr-4">We build</span>
                <div className="border border-blue-400 h-12 w-48 flex items-center justify-center">
                  <TextRotatingAnimation 
                    texts={serviceTexts}
                    className="text-xl text-blue-500 font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Custom Duration Example */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-700">
                Faster Animation (3s duration)
              </h2>
              <div className="flex items-center justify-center">
                <span className="text-xl text-gray-600 mr-4">Quick</span>
                <div className="border border-green-400 h-12 w-48 flex items-center justify-center">
                  <TextRotatingAnimation 
                    texts={serviceTexts}
                    duration={3000}
                    className="text-xl text-green-500 font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Different Text Example */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-700">
                Different Content
              </h2>
              <div className="flex items-center justify-center">
                <span className="text-xl text-gray-600 mr-4">I am a</span>
                <div className="border border-purple-400 h-12 w-48 flex items-center justify-center">
                  <TextRotatingAnimation 
                    texts={['Developer', 'Designer', 'Creator', 'Problem Solver']}
                    className="text-xl text-purple-500 font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Usage Instructions */}
            <div className="bg-gray-100 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Usage
              </h2>
              <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`import TextRotatingAnimation from '@/components/TextRotatingAnimation';

<TextRotatingAnimation 
  texts={['Text 1', 'Text 2', 'Text 3']}
  duration={6000} // Optional: total duration in ms
  className="your-custom-classes" // Optional: styling
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextRotationDemoPage;