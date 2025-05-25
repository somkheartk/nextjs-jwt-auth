'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';

function LogoutButton() {
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    try {
      const res = await fetch('/api/logout', {
        method: 'POST',
      });

      if (res.ok) {
        router.push('/login');
      } else {
        throw new Error('Failed to logout');
      }
    } catch (error) {
      console.error('Error during logout:', error);
      alert('An error occurred while logging out. Please try again.');
    }
  }, [router]);

  return (
    <button
      onClick={handleLogout}
      className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700"
    >
      Logout
    </button>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-bold border-b border-gray-700">Admin Panel</div>
      <nav className="flex-1 p-4 space-y-2">
        <a href="/dashboard" className="block px-4 py-2 rounded hover:bg-gray-700">
          Dashboard
        </a>
        <a href="/dashboard/users" className="block px-4 py-2 rounded hover:bg-gray-700">
          Users
        </a>
        <a href="/dashboard/settings" className="block px-4 py-2 rounded hover:bg-gray-700">
          Settings
        </a>
        <LogoutButton />
      </nav>
    </aside>
  );
}
