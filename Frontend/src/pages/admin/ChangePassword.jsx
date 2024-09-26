import React, { useState } from 'react';

function ChangePassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
      setMessage('Your password has been changed. Please login.');
      setTimeout(() => {
        window.location.href = '/login'; // Redirect to login page after 2 seconds
      }, 2000);
    } else {
      setMessage('Passwords do not match. Please try again.');
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-xl rounded-lg max-w-md w-full p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
          Change Password
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            New Password:
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full p-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Confirm Password:
          </label>
          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full p-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {message && (
          <div className="text-center mb-6 text-red-500 font-semibold">
            {message}
          </div>
        )}
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={() => {
              setNewPassword('');
              setConfirmPassword('');
              setMessage('');
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50"
            onClick={handleChangePassword}
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;