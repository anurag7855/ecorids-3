import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdDashboard, MdPeople, MdPayment, MdDirectionsCar } from 'react-icons/md';
import logo from '../assets/logo-150.png';

const menuItems = [
  {
    path: '/',
    name: 'Dashboard',
    icon: MdDashboard
  },
  {
    path: '/customers',
    name: 'Customers',
    icon: MdPeople
  },
  {
    path: '/payments',
    name: 'Payments',
    icon: MdPayment
  },
  {
    path: '/vehicles',
    name: 'Vehicles',
    icon: MdDirectionsCar
  }
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-100 py-6 flex flex-col fixed">
      {/* Logo */}
      <div className="px-6 mb-8">
        <Link to="/" className="block">
          <img src={logo} alt="ECORIDS" className="h-8" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-[#82CD47] text-white' 
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  <Icon className={`text-xl ${isActive ? 'text-white' : 'text-gray-400'}`} />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
