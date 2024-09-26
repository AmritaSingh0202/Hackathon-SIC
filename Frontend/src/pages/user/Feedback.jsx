import React, { useState } from 'react';

function Feedback() {
  const [rating, setRating] = useState(0);
  const [suggestions, setSuggestions] = useState('');

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-xl rounded-lg max-w-md w-full p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
          Your Feedback is Important to Us!
        </h2>
        <div className="flex justify-center mb-8">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              onClick={() => setRating(index + 1)}
              className={`cursor-pointer text-4xl mx-1 ${
                index < rating ? 'text-yellow-500' : 'text-gray-300'
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          placeholder="Any Suggestions..."
          className="w-full p-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows="4"
          value={suggestions}
          onChange={(e) => setSuggestions(e.target.value)}
        />
        <button
          type="button"
          className="mt-6 w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Feedback;