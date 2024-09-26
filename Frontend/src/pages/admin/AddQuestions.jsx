import React, { useState } from 'react';

const AddQuestions = () => {
  // State to handle form visibility and question data
  const [showForm, setShowForm] = useState(false);
  const [question, setQuestion] = useState('');
  const [questionsList, setQuestionsList] = useState([]);

  // Handle input change for the question field
  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      // Add new question to the questions list (for now, just local state)
      setQuestionsList([...questionsList, question]);
      setQuestion('');
      setShowForm(false);
      alert('Question added successfully!');
      
      // TODO: Add logic to submit to database (API integration)
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions (Admin)</h2>

      {/* Add Question Button */}
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 transition-colors"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Close' : 'Add Question +'}
      </button>

      {/* Form to add a new question */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-4">
          <label className="block text-sm font-bold mb-2">New Question:</label>
          <textarea
            value={question}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            placeholder="Type your question here..."
            rows="4"
            required
          ></textarea>

          <button 
            type="submit" 
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            Submit Question
          </button>
        </form>
      )}

      {/* Display list of questions (temporary until database integration) */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Questions List:</h3>
        <ul className="list-disc pl-6">
          {questionsList.map((q, index) => (
            <li key={index} className="mb-2">{q}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddQuestions;