'use client';

import React from 'react';
import ScrollTriggeredAnimation from '../ui/ScrollTriggeredAnimation';
import { useScrollTrigger } from '../ui/ScrollTriggeredAnimation';

const ScrollAnimationExamples: React.FC = () => {
  const { refresh } = useScrollTrigger();

  // Custom animation example
  const customBounceAnimation = {
    from: {
      scale: 0,
      rotation: -180,
      opacity: 0
    },
    to: {
      scale: 1,
      rotation: 0,
      opacity: 1,
      ease: 'back.out(1.7)'
    }
  };

  const handleAnimationStart = () => {
    console.log('Animation started!');
  };

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const handleProgress = (progress: number) => {
    console.log(`Animation progress: ${Math.round(progress * 100)}%`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Scroll-Triggered Animation Examples
        </h1>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Scroll down to see various animation types triggered at different scroll positions.
          Each animation is optimized for performance and works across all devices.
        </p>
      </div>

      {/* Spacer */}
      <div className="h-96"></div>

      {/* Basic Fade Animation */}
      <section className="container mx-auto px-4 py-16">
        <ScrollTriggeredAnimation
          animationType="fade"
          duration={1.2}
          start="top 85%"
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Fade In Animation</h2>
            <p className="text-gray-600 text-lg">
              This element fades in smoothly when it enters the viewport at 85% scroll position.
              Perfect for subtle content reveals.
            </p>
          </div>
        </ScrollTriggeredAnimation>
      </section>

      {/* Slide Up Animation */}
      <section className="container mx-auto px-4 py-16">
        <ScrollTriggeredAnimation
          animationType="slideUp"
          duration={0.8}
          delay={0.2}
          start="top 80%"
          ease="power3.out"
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Slide Up Animation</h2>
            <p className="text-lg opacity-90">
              This card slides up from below with a smooth easing function.
              Great for card reveals and content sections.
            </p>
          </div>
        </ScrollTriggeredAnimation>
      </section>

      {/* Multiple Elements with Stagger */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Staggered Animations</h2>
          <p className="text-gray-600">Multiple elements animating with different delays</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[0, 0.2, 0.4].map((delay, index) => (
            <ScrollTriggeredAnimation
              key={index}
              animationType="slideUp"
              duration={0.6}
              delay={delay}
              start="top 85%"
              className="h-full"
            >
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="w-12 h-12 bg-blue-500 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold mb-2 text-center">Feature {index + 1}</h3>
                <p className="text-gray-600 text-center">
                  This card appears with a {delay}s delay, creating a beautiful staggered effect.
                </p>
              </div>
            </ScrollTriggeredAnimation>
          ))}
        </div>
      </section>

      {/* Scale Animation */}
      <section className="container mx-auto px-4 py-16">
        <ScrollTriggeredAnimation
          animationType="scale"
          duration={1}
          start="top 75%"
          ease="back.out(1.2)"
          className="max-w-4xl mx-auto"
        >
          <div className="bg-green-500 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-8">
            <span className="text-white text-2xl font-bold">SCALE</span>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Scale Animation</h2>
            <p className="text-gray-600 text-lg">
              Elements can scale up from a smaller size with elastic easing for a bouncy effect.
            </p>
          </div>
        </ScrollTriggeredAnimation>
      </section>

      {/* Horizontal Slide Animations */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Horizontal Slides</h2>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          <ScrollTriggeredAnimation
            animationType="slideLeft"
            duration={0.8}
            start="top 80%"
          >
            <div className="bg-orange-500 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Slide from Right</h3>
              <p>This element slides in from the right side of the screen.</p>
            </div>
          </ScrollTriggeredAnimation>
          
          <ScrollTriggeredAnimation
            animationType="slideRight"
            duration={0.8}
            start="top 80%"
          >
            <div className="bg-teal-500 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Slide from Left</h3>
              <p>This element slides in from the left side of the screen.</p>
            </div>
          </ScrollTriggeredAnimation>
        </div>
      </section>

      {/* Custom Animation */}
      <section className="container mx-auto px-4 py-16">
        <ScrollTriggeredAnimation
          animationType="custom"
          customAnimation={customBounceAnimation}
          duration={1.5}
          start="top 80%"
          onStart={handleAnimationStart}
          onComplete={handleAnimationComplete}
          onUpdate={handleProgress}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg shadow-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Custom Animation</h2>
            <p className="text-lg">
              This uses a custom animation with scale, rotation, and bounce easing.
              Check the console for animation callbacks!
            </p>
          </div>
        </ScrollTriggeredAnimation>
      </section>

      {/* Scrub Animation (tied to scroll) */}
      <section className="container mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Scroll-Scrubbed Animation</h2>
          <p className="text-gray-600">This animation is directly tied to scroll position</p>
        </div>
        
        <ScrollTriggeredAnimation
          animationType="custom"
          customAnimation={{
            from: { rotation: 0, scale: 1 },
            to: { rotation: 360, scale: 1.5 }
          }}
          start="top bottom"
          end="bottom top"
          scrub={1}
          className="max-w-md mx-auto"
        >
          <div className="w-32 h-32 bg-purple-600 rounded-lg mx-auto flex items-center justify-center">
            <span className="text-white font-bold text-xl">SCRUB</span>
          </div>
        </ScrollTriggeredAnimation>
      </section>

      {/* Controls */}
      <section className="container mx-auto px-4 py-16 text-center">
        <button
          onClick={refresh}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Refresh All Animations
        </button>
        <p className="text-gray-600 mt-4">
          Click to refresh all ScrollTrigger instances (useful after layout changes)
        </p>
      </section>

      {/* Footer spacer */}
      <div className="h-96"></div>
    </div>
  );
};

export default ScrollAnimationExamples;