import React from 'react';
import { useApp } from '../context/AppContext';

const NotificationsDropdown = ({ onClose }) => {
  const { notifications, markNotificationAsRead, clearAllNotifications } = useApp();

  return (
    <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
      <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center">
        <h3 className="font-medium text-gray-900">Notifications</h3>
        {notifications.length > 0 && (
          <button
            onClick={clearAllNotifications}
            className="text-xs text-gray-500 hover:text-gray-700"
          >
            Clear all
          </button>
        )}
      </div>
      
      <div className="max-h-[400px] overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="px-4 py-8 text-center text-gray-500 text-sm">
            No notifications
          </div>
        ) : (
          notifications.map((notification) => (
            <button
              key={notification.id}
              onClick={() => {
                markNotificationAsRead(notification.id);
                onClose();
              }}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  notification.unread ? 'bg-blue-500' : 'bg-gray-300'
                }`} />
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">{notification.title}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{notification.message}</div>
                  <div className="text-xs text-gray-400 mt-1">{notification.time}</div>
                </div>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationsDropdown;
