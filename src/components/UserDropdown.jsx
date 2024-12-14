import React from 'react';
import { useApp } from '../context/AppContext';
import { IoPersonOutline, IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5';

const UserDropdown = ({ onClose }) => {
  const { user, logout } = useApp();

  const menuItems = [
    {
      icon: <IoPersonOutline className="text-lg" />,
      label: 'My Profile',
      onClick: () => console.log('Navigate to profile'),
    },
    {
      icon: <IoSettingsOutline className="text-lg" />,
      label: 'Settings',
      onClick: () => console.log('Navigate to settings'),
    },
    {
      icon: <IoLogOutOutline className="text-lg" />,
      label: 'Logout',
      onClick: logout,
      className: 'text-red-500 hover:bg-red-50',
    },
  ];

  return (
    <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="font-medium text-gray-900">{user.name}</div>
            <div className="text-xs text-gray-500">{user.email}</div>
          </div>
        </div>
      </div>

      <div className="py-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              item.onClick();
              onClose();
            }}
            className={`w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors ${item.className || 'text-gray-700'}`}
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserDropdown;
