'use client';

import React, { useState, useEffect } from 'react';
import { Kanit } from 'next/font/google';
import Sidebar from '@/app/components/Sidebar';
import AccountBar from '../components/AccountBar';
import { Menu } from 'lucide-react';

const kanit = Kanit({ subsets: ['latin'], weight: ['400', '700'] });


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Mobile toggle
  const [isSidebarExpanded, setSidebarExpanded] = useState(false); // Desktop toggle
  const [isHoveringSidebar, setIsHoveringSidebar] = useState(false); // Desktop hover
  const user = {
    fullName: "สมชาย ใจดี",
    department: "ฝ่ายผลิต",
    employeeId: "123456"
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false); // close mobile menu
      } else {
        setSidebarExpanded(false); // reset desktop expanded state on small screen
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDesktopSidebarOpen = isSidebarExpanded || isHoveringSidebar;

  return (
    <div className={`h-screen bg-gray-100 text-gray-800 flex ${kanit.className}`}>
      {/* Sidebar for Desktop */}
      <div
        className={`hidden md:flex flex-col fixed top-0 left-0 h-screen bg-gray-800 text-white z-40 transition-all duration-300 ease-in-out
          ${isDesktopSidebarOpen ? 'w-64' : 'w-16'}
        `}
        onMouseEnter={() => setIsHoveringSidebar(true)}
        onMouseLeave={() => setIsHoveringSidebar(false)}
      >
        <Sidebar isOpen={isDesktopSidebarOpen} />
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div
          id="sidebar"
          className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden flex"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="w-64 bg-gray-800 h-full text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar isOpen />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out
          md:ml-16 ${isDesktopSidebarOpen ? 'md:ml-64' : ''}
        `}
      >
        {/* Header */}
        <header className="sticky top-0 z-40 w-full bg-white shadow px-4 py-3 flex items-center gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <button
              onClick={() => {
                if (window.innerWidth >= 768) {
                  setSidebarExpanded((prev) => !prev);
                } else {
                  setSidebarOpen((prev) => !prev);
                }
              }}
              className="p-2 bg-gray-100 rounded shadow-md flex-shrink-0"
              aria-label="Toggle sidebar"
            >
              <Menu className="w-6 h-6 text-gray-800" />
            </button>
            <h1 className="text-xl font-bold text-gray-800 truncate select-none">Dashboard</h1>
          </div>
          <div className="flex-grow min-w-0 flex items-center justify-end max-w-[200px]">
          <AccountBar user={user} />


          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">{children}</main>

        {/* Footer */}
        <footer className="bg-white shadow-inner py-4 text-center text-sm text-gray-500 select-none">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
