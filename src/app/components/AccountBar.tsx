import React from 'react';

export default function AccountBar() {
  const userName = "John Doe"; // Replace with dynamic user data as needed

  return (
    <div className="flex items-center space-x-4">
      <span className="text-gray-700 font-medium">{userName}</span>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Logout
      </button>
    </div>
  );
}
