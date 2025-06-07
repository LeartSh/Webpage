import React from "react";

const ResponsiveCards = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Responsive Cards</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Card Title {idx + 1}</h2>
              <p className="text-gray-600">This is a responsive card component using Tailwind CSS.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCards;