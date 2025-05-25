import React from 'react';
import '@/app/globals.css'; // Ensure you have Tailwind CSS set up in your project
import { Kanit } from 'next/font/google'; // Import Kanit font
import Sidebar from './Sidebar'; // Import Sidebar component
import AccountBar from '../components/AccountBar'; // Import AccountBar component

const kanit = Kanit({ subsets: ['latin'], weight: ['400', '700'] }); // Configure Kanit font

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`flex h-screen ${kanit.className}`}> {/* Apply Kanit font */}
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <AccountBar /> {/* Add AccountBar component */}
        </header>

        {/* Content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          {children || <p>No content available</p>}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
