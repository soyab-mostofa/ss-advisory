import ImageRevealAnimation from '@/components/ImageRevealAnimation';

export default function ImageRevealExample() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Image Reveal Animation Example</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div>
          <ImageRevealAnimation 
            src="https://cdn.prod.website-files.com/66b72e7d8b19345bbd3f446d/66b72fdc7924d1e295c81cfa_lumosteams-app.webp" 
            alt="Lumos Teams App"
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mt-3 mb-2">Lumos Teams</h2>
          <p className="text-gray-600">→ Strategy</p>
          <p className="text-gray-600">→ Brand Guide</p>
          <p className="text-gray-600">→ Website Design</p>
        </div>
        
        <div>
          <ImageRevealAnimation 
            src="https://cdn.prod.website-files.com/66b72e7d8b19345bbd3f446d/66b73021dd2d76b338250574_rijkevent-mockup.webp" 
            alt="Rijk Event Mockup"
            aspectRatio="1 / 1"
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mt-3 mb-2">Rijk Event</h2>
          <p className="text-gray-600">→ Strategy</p>
          <p className="text-gray-600">→ Brand Guide</p>
          <p className="text-gray-600">→ Website Design</p>
        </div>
      </div>
    </main>
  );
}