import React from 'react';
import InfiniteScrollExample from '@/components/ui/InfiniteScrollExample';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Infinite Scroll Animation Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Smooth, performant infinite linear scroll animations using GSAP and Tailwind CSS.
            All animations maintain 60fps performance and handle responsive design gracefully.
          </p>
        </div>
        
        <InfiniteScrollExample />
        
        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-green-50 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              ✅ Performance Features
            </h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Hardware-accelerated animations with GSAP</li>
              <li>• Seamless looping with no visible gaps</li>
              <li>• Responsive design with resize handling</li>
              <li>• 60fps performance optimization</li>
              <li>• Memory-efficient with proper cleanup</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}