import HTwoTextAnimation from '@/components/HTwoTextAnimation';

export default function H2DemoPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">H2 Text Animation Demo</h1>
          <p className="text-gray-600">Testing dynamic line breaks based on container width</p>
        </div>

        {/* Test Case 1: Short text */}
        <div className="border border-gray-200 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Short Text Example</h3>
          <div className="max-w-md mx-auto border-2 border-blue-200 p-4">
            <HTwoTextAnimation 
              text="Expertise You Can Trust"
              highlightStart="Expertise"
              highlightEnd="Trust"
              className="mb-4"
            />
          </div>
        </div>

        {/* Test Case 2: Medium text */}
        <div className="border border-gray-200 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Medium Text Example</h3>
          <div className="max-w-lg mx-auto border-2 border-green-200 p-4">
            <HTwoTextAnimation 
              text="Strategic Financial Advisory Services for Modern Businesses"
              highlightStart="Strategic Financial"
              highlightEnd="Modern Businesses"
              className="mb-4"
            />
          </div>
        </div>

        {/* Test Case 3: Long text */}
        <div className="border border-gray-200 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Long Text Example</h3>
          <div className="max-w-2xl mx-auto border-2 border-purple-200 p-4">
            <HTwoTextAnimation 
              text="Comprehensive Financial Planning and Investment Management Solutions for Growing Companies"
              highlightStart="Comprehensive Financial Planning"
              highlightEnd="Growing Companies"
              className="mb-4"
            />
          </div>
        </div>

        {/* Test Case 4: Very narrow container */}
        <div className="border border-gray-200 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Narrow Container Test</h3>
          <div className="max-w-xs mx-auto border-2 border-red-200 p-4">
            <HTwoTextAnimation 
              text="Professional Advisory Services"
              highlightStart="Professional"
              highlightEnd="Services"
              className="mb-4"
            />
          </div>
        </div>

        {/* Test Case 5: Wide container */}
        <div className="border border-gray-200 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Wide Container Test</h3>
          <div className="max-w-6xl mx-auto border-2 border-yellow-200 p-4">
            <HTwoTextAnimation 
              text="Excellence in Financial Advisory and Strategic Business Consulting Services"
              highlightStart="Excellence"
              highlightEnd="Services"
              className="mb-4"
            />
          </div>
        </div>

        {/* Dark Mode Tests */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Dark Mode Variants</h2>
          
          {/* Dark Test Case 1: Medium text on dark background */}
          <div className="border border-gray-200 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold mb-4">Dark Mode - Medium Text</h3>
            <div className="max-w-lg mx-auto bg-gray-900 border-2 border-gray-700 p-6 rounded-lg">
              <HTwoTextAnimation 
                text="Strategic Financial Advisory Services for Modern Businesses"
                highlightStart="Strategic Financial"
                highlightEnd="Modern Businesses"
                className="mb-4"
                dark={true}
              />
            </div>
          </div>

          {/* Dark Test Case 2: Long text on dark background */}
          <div className="border border-gray-200 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold mb-4">Dark Mode - Long Text</h3>
            <div className="max-w-2xl mx-auto bg-slate-800 border-2 border-slate-600 p-6 rounded-lg">
              <HTwoTextAnimation 
                text="Comprehensive Financial Planning and Investment Management Solutions for Growing Companies"
                highlightStart="Comprehensive Financial Planning"
                highlightEnd="Growing Companies"
                className="mb-4"
                dark={true}
              />
            </div>
          </div>

          {/* Dark Test Case 3: Narrow container on dark background */}
          <div className="border border-gray-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Dark Mode - Narrow Container</h3>
            <div className="max-w-xs mx-auto bg-indigo-900 border-2 border-indigo-700 p-6 rounded-lg">
              <HTwoTextAnimation 
                text="Professional Advisory Services"
                highlightStart="Professional"
                highlightEnd="Services"
                className="mb-4"
                dark={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}