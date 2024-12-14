import React from 'react';
import { useApp } from '../context/AppContext';
import { IoSettingsOutline, IoLanguageOutline, IoMoonOutline, IoNotificationsOutline } from 'react-icons/io5';

const SettingsDropdown = ({ onClose }) => {
  const { settings, updateSettings } = useApp();

  const toggleSetting = (key) => {
    updateSettings({ [key]: !settings[key] });
  };

  const updateLanguage = (language) => {
    updateSettings({ language });
  };

  return (
    <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
      <div className="px-4 py-2 border-b border-gray-100">
        <h3 className="font-medium text-gray-900">Settings</h3>
      </div>

      <div className="p-4 space-y-4">
        {/* Dark Mode */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IoMoonOutline className="text-lg text-gray-500" />
            <span className="text-sm text-gray-700">Dark Mode</span>
          </div>
          <button
            onClick={() => toggleSetting('darkMode')}
            className={`w-11 h-6 rounded-full transition-colors ${
              settings.darkMode ? 'bg-green-500' : 'bg-gray-200'
            }`}
          >
            <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
              settings.darkMode ? 'translate-x-6' : 'translate-x-1'
            }`} />
          </button>
        </div>

        {/* Notifications */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IoNotificationsOutline className="text-lg text-gray-500" />
            <span className="text-sm text-gray-700">Notifications</span>
          </div>
          <button
            onClick={() => toggleSetting('notifications')}
            className={`w-11 h-6 rounded-full transition-colors ${
              settings.notifications ? 'bg-green-500' : 'bg-gray-200'
            }`}
          >
            <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
              settings.notifications ? 'translate-x-6' : 'translate-x-1'
            }`} />
          </button>
        </div>

        {/* Language */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IoLanguageOutline className="text-lg text-gray-500" />
            <span className="text-sm text-gray-700">Language</span>
          </div>
          <select
            value={settings.language}
            onChange={(e) => updateLanguage(e.target.value)}
            className="text-sm border rounded-lg px-2 py-1 outline-none focus:border-green-500"
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
      </div>

      <div className="px-4 py-3 border-t border-gray-100 flex justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsDropdown;
