import React, { useState, useRef, useEffect } from 'react';

const warehouses = ['คลัง A', 'คลัง B', 'คลัง C', 'คลัง D'];

type UserInfo = {
  fullName: string;
  department: string;
  employeeId: string;
};

type AccountBarProps = {
  user: UserInfo;
};

export default function AccountBar({ user }: AccountBarProps) {
  const [currentWarehouse, setCurrentWarehouse] = useState(warehouses[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (warehouse: string) => {
    setCurrentWarehouse(warehouse);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="w-full font-kanit text-gray-700 text-sm flex items-center space-x-6">
      {/* ชื่อผู้ใช้ */}
      <span
        className="font-medium whitespace-nowrap max-w-[220px] overflow-hidden text-ellipsis block"
        title={user.fullName}
      >
        {user.fullName}
      </span>

      {/* แผนก */}
      <span
        className="whitespace-nowrap max-w-[200px] overflow-hidden text-ellipsis block text-gray-600"
        title={`แผนก: ${user.department}`}
      >
        แผนก: {user.department}
      </span>

      {/* รหัสพนักงาน */}
      <span
        className="whitespace-nowrap max-w-[140px] overflow-hidden text-ellipsis block text-gray-600"
        title={`รหัสพนักงาน: ${user.employeeId}`}
      >
        รหัสพนักงาน: {user.employeeId}
      </span>

      {/* เลือกคลัง */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="
            flex items-center justify-between
            border border-gray-300 rounded-md
            px-3 py-1.5
            bg-white
            text-gray-700
            min-w-[120px]
            cursor-pointer
            hover:border-blue-500
            focus:outline-none focus:ring-2 focus:ring-blue-400
            transition
          "
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          type="button"
        >
          <span className="truncate max-w-[140px] block">{currentWarehouse}</span>
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <ul
            role="listbox"
            className="
              absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg
              max-h-40 overflow-auto
            "
          >
            {warehouses.map((warehouse) => (
              <li
                key={warehouse}
                role="option"
                aria-selected={currentWarehouse === warehouse}
                onClick={() => handleSelect(warehouse)}
                className={`
                  cursor-pointer px-4 py-2
                  hover:bg-blue-600 hover:text-white
                  ${currentWarehouse === warehouse ? 'bg-blue-500 text-white' : 'text-gray-700'}
                `}
              >
                {warehouse}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ปุ่ม Logout */}
      <button
        className="
          bg-blue-600 
          text-white 
          px-3 py-1.5 
          rounded-md 
          hover:bg-blue-700 
          focus:outline-none focus:ring-2 focus:ring-blue-400
          transition
          whitespace-nowrap
          text-sm
        "
        type="button"
      >
        Logout
      </button>
    </div>
  );
}
