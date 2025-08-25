'use client';

import React from 'react';
import InfiniteScroll from './InfiniteScroll';

// Sample logo/brand data
const sampleBrands = [
  { name: 'TechCorp', logo: '🚀' },
  { name: 'InnovateLab', logo: '💡' },
  { name: 'DataFlow', logo: '📊' },
  { name: 'CloudSync', logo: '☁️' },
  { name: 'DevTools', logo: '🛠️' },
  { name: 'SecureNet', logo: '🔒' },
  { name: 'FastAPI', logo: '⚡' },
  { name: 'SmartAI', logo: '🤖' },
];

const InfiniteScrollExample: React.FC = () => {
  return (
    <div className="w-full space-y-12 py-8">
      {/* Example 1: Logo Carousel */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">Logo Carousel</h3>
        <InfiniteScroll
          speed={60}
          direction="left"
          pauseOnHover={true}
          className="bg-gray-50 py-8"
        >
          {sampleBrands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-8 px-6 py-4 bg-white rounded-lg shadow-sm border border-gray-200 min-w-[200px]"
            >
              <span className="text-3xl mr-3">{brand.logo}</span>
              <span className="text-lg font-medium text-gray-700">
                {brand.name}
              </span>
            </div>
          ))}
        </InfiniteScroll>
      </div>

      {/* Example 2: Text Ticker */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">News Ticker</h3>
        <InfiniteScroll
          speed={80}
          direction="left"
          className="bg-blue-600 text-white py-3"
        >
          <div className="flex items-center">
            <span className="mx-8 text-sm font-medium">
              📈 Market Update: Tech stocks rise 3.2% in early trading
            </span>
            <span className="mx-8 text-sm font-medium">
              🌟 New Product Launch: Revolutionary AI platform announced
            </span>
            <span className="mx-8 text-sm font-medium">
              💼 Business News: Quarterly earnings exceed expectations
            </span>
            <span className="mx-8 text-sm font-medium">
              🚀 Innovation: Next-gen technology breakthrough revealed
            </span>
          </div>
        </InfiniteScroll>
      </div>

      {/* Example 3: Image Gallery */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">Image Gallery</h3>
        <InfiniteScroll
          speed={40}
          direction="right"
          pauseOnHover={true}
          className="bg-gradient-to-r from-purple-100 to-pink-100 py-6"
        >
          {Array.from({ length: 8 }, (_, index) => (
            <div
              key={index}
              className="mx-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
            >
              {index + 1}
            </div>
          ))}
        </InfiniteScroll>
      </div>

      {/* Example 4: Fast Scrolling Tags */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">Skills Tags</h3>
        <InfiniteScroll
          speed={100}
          direction="left"
          className="py-4"
        >
          {[
            'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GSAP',
            'Node.js', 'GraphQL', 'MongoDB', 'AWS', 'Docker',
            'Kubernetes', 'Python', 'Machine Learning', 'AI'
          ].map((skill, index) => (
            <span
              key={index}
              className="inline-block mx-3 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium border border-green-200"
            >
              {skill}
            </span>
          ))}
        </InfiniteScroll>
      </div>

      {/* Usage Instructions */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h4 className="text-lg font-semibold mb-4">Usage Instructions</h4>
        <div className="space-y-2 text-sm text-gray-600">
          <p><strong>speed:</strong> Controls animation speed (pixels per second)</p>
          <p><strong>direction:</strong> &lsquo;left&rsquo; or &lsquo;right&rsquo; scroll direction</p>
          <p><strong>pauseOnHover:</strong> Pauses animation when hovering</p>
          <p><strong>className:</strong> Additional Tailwind classes for styling</p>
        </div>
        <div className="mt-4 p-4 bg-gray-800 text-green-400 rounded text-xs font-mono">
          {`<InfiniteScroll speed={60} direction="left" pauseOnHover={true}>
  {/* Your content here */}
</InfiniteScroll>`}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollExample;