import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Booking',
      message: 'Customer #1234 made a new booking',
      time: '5m ago',
      unread: true,
    },
    {
      id: 2,
      title: 'Payment Received',
      message: 'Payment of ₹500 received',
      time: '1h ago',
      unread: true,
    },
    {
      id: 3,
      title: 'Vehicle Return',
      message: 'Vehicle #5678 has been returned',
      time: '2h ago',
      unread: false,
    },
  ]);

  const [user, setUser] = useState({
    name: 'Abhishek',
    email: 'abhishek@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Abhishek&background=random',
    role: 'Admin',
  });

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [serviceStatus, setServiceStatus] = useState('active');
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    language: 'English',
    showOnlineStatus: true,
    shareUsageData: false,
  });

  // Search functionality
  const handleSearch = async (query) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      const results = query ? [
        { id: 1, type: 'customer', title: 'John Doe', subtitle: 'Customer #1234' },
        { id: 2, type: 'vehicle', title: 'Scooter XYZ', subtitle: 'Vehicle #5678' },
        { id: 3, type: 'booking', title: 'Booking #9012', subtitle: 'Active' },
      ] : [];
      setSearchResults(results);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Notification functionality
  const markNotificationAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, unread: false } : notif
      )
    );
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  // Settings functionality
  const updateSettings = (newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  // User functionality
  const updateUserProfile = (updates) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const logout = () => {
    // Add logout logic here
    console.log('User logged out');
  };

  const value = {
    notifications,
    user,
    searchResults,
    isLoading,
    serviceStatus,
    settings,
    handleSearch,
    markNotificationAsRead,
    clearAllNotifications,
    updateSettings,
    updateUserProfile,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
