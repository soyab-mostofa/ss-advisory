'use client';

import ImageRevealAnimation from '@/components/ImageRevealAnimation';

const ResponsiveImageExample = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Responsive ImageRevealAnimation Examples
          </h1>
          <p className="text-lg text-gray-600">
            Demonstrating responsive sizing with Tailwind CSS classes
          </p>
        </div>

        {/* Example 1: Basic Responsive */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            1. Basic Responsive (w-full h-auto)
          </h2>
          <ImageRevealAnimation
            src="/images/megv1vhw-9xzmxbt.png"
            alt="Basic responsive example"
            className="w-full h-auto"
          />
        </section>

        {/* Example 2: Fixed Height with Responsive Width */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            2. Fixed Height with Responsive Width
          </h2>
          <ImageRevealAnimation
            src="/images/megv1vhw-9xzmxbt.png"
            alt="Fixed height example"
            className="w-full h-64 md:h-80 lg:h-96"
          />
        </section>

        {/* Example 3: Breakpoint-specific Sizing */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            3. Breakpoint-specific Sizing
          </h2>
          <ImageRevealAnimation
            src="/images/megv1vhw-9xzmxbt.png"
            alt="Breakpoint sizing example"
            className="w-full h-48 sm:h-56 md:w-3/4 md:h-64 lg:w-2/3 lg:h-72 xl:w-1/2 xl:h-80 mx-auto"
          />
        </section>

        {/* Example 4: Aspect Ratio with Max Constraints */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            4. Aspect Ratio with Max Constraints
          </h2>
          <ImageRevealAnimation
            src="/images/megv1vhw-9xzmxbt.png"
            alt="Aspect ratio with constraints"
            aspectRatio="16 / 9"
            className="w-full max-w-4xl max-h-96 mx-auto"
          />
        </section>

        {/* Example 5: Grid Layout */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            5. Grid Layout with Different Sizes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ImageRevealAnimation
              src="/images/megv1vhw-9xzmxbt.png"
              alt="Grid item 1"
              className="w-full h-48"
              aspectRatio="4 / 3"
            />
            <ImageRevealAnimation
              src="/images/megv1vhw-9xzmxbt.png"
              alt="Grid item 2"
              className="w-full h-48"
              aspectRatio="4 / 3"
            />
            <ImageRevealAnimation
              src="/images/megv1vhw-9xzmxbt.png"
              alt="Grid item 3"
              className="w-full h-48 md:col-span-2 lg:col-span-1"
              aspectRatio="4 / 3"
            />
          </div>
        </section>

        {/* Example 6: Container Queries Style */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            6. Flexible Container Sizing
          </h2>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <ImageRevealAnimation
                src="/images/megv1vhw-9xzmxbt.png"
                alt="Flexible container 1"
                className="w-full h-auto min-h-[200px] max-h-[400px]"
                aspectRatio="3 / 2"
              />
            </div>
            <div className="flex-1">
              <ImageRevealAnimation
                src="/images/megv1vhw-9xzmxbt.png"
                alt="Flexible container 2"
                className="w-full h-auto min-h-[200px] max-h-[400px]"
                aspectRatio="3 / 2"
              />
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Usage Examples
          </h2>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto">
            <pre className="text-sm">
{`// Basic responsive
<ImageRevealAnimation
  src="/path/to/image.jpg"
  alt="Description"
  className="w-full h-auto"
/>

// Responsive with breakpoints
<ImageRevealAnimation
  src="/path/to/image.jpg"
  alt="Description"
  className="w-full h-48 md:h-64 lg:h-80 xl:h-96"
/>

// Centered with max constraints
<ImageRevealAnimation
  src="/path/to/image.jpg"
  alt="Description"
  className="w-full max-w-2xl max-h-96 mx-auto"
  aspectRatio="16 / 9"
/>`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResponsiveImageExample;