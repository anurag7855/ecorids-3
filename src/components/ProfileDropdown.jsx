import React, { useState, useRef, useEffect } from 'react';
import { BiUser, BiLogOut, BiCog } from 'react-icons/bi';

const ProfileDropdown = ({ userImage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { icon: <BiUser className="text-lg" />, label: 'My Profile', action: () => console.log('Profile clicked') },
    { icon: <BiCog className="text-lg" />, label: 'Settings', action: () => console.log('Settings clicked') },
    { icon: <BiLogOut className="text-lg" />, label: 'Logout', action: () => console.log('Logout clicked') },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center focus:outline-none"
      >
        <img
          src={userImage || 'https://via.placeholder.com/40'}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-gray-200"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-50">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                item.action();
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
