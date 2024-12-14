import React, { useState, useRef, useEffect } from 'react';
import { IoSearchOutline, IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5';
import { BsCircleFill } from 'react-icons/bs';
import { useApp } from '../context/AppContext';
import SearchDropdown from './SearchDropdown';
import NotificationsDropdown from './NotificationsDropdown';
import SettingsDropdown from './SettingsDropdown';
import UserDropdown from './UserDropdown';

const Header = () => {
  const {
    user,
    notifications,
    handleSearch,
    serviceStatus,
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const searchRef = useRef(null);
  const notificationsRef = useRef(null);
  const settingsRef = useRef(null);
  const userRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchDropdown(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setShowSettings(false);
      }
      if (userRef.current && !userRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
    setShowSearchDropdown(!!query);
  };

  const unreadNotifications = notifications.filter(n => n.unread).length;

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-end px-6">
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="w-[280px] relative" ref={searchRef}>
          <div className="relative">
            <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Type here..."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setShowSearchDropdown(!!searchQuery)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-100 text-sm focus:outline-none focus:border-[#82CD47]"
            />
          </div>
          {showSearchDropdown && (
            <SearchDropdown
              onSelect={(result) => {
                console.log('Selected:', result);
                setShowSearchDropdown(false);
              }}
            />
          )}
        </div>

        {/* Service Status */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Service</span>
          <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg">
            <BsCircleFill className="text-[8px] text-[#82CD47]" />
            <span className="text-xs text-gray-600">Active</span>
          </div>
        </div>

        {/* Notification Icon */}
        <div className="relative" ref={notificationsRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <IoNotificationsOutline className="text-xl text-gray-600" />
            {unreadNotifications > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>
          {showNotifications && (
            <NotificationsDropdown onClose={() => setShowNotifications(false)} />
          )}
        </div>

        {/* Settings Icon */}
        <div className="relative" ref={settingsRef}>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <IoSettingsOutline className="text-xl text-gray-600" />
          </button>
          {showSettings && (
            <SettingsDropdown onClose={() => setShowSettings(false)} />
          )}
        </div>

        {/* User Profile */}
        <div className="relative" ref={userRef}>
          <button
            onClick={() => setShowUserDropdown(!showUserDropdown)}
            className="flex items-center gap-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <span className="text-sm font-medium">{user.name}</span>
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </button>
          {showUserDropdown && (
            <UserDropdown onClose={() => setShowUserDropdown(false)} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
