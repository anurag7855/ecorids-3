import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { IoMdPerson } from 'react-icons/io';
import { BsCurrencyRupee } from 'react-icons/bs';
import Map from './Map';
import SearchBar from './SearchBar';
import ProfileDropdown from './ProfileDropdown';
import SettingsModal from './SettingsModal';
import { BiCog } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const data = [
  { name: 'Jan', value: 400, secondValue: 300 },
  { name: 'Feb', value: 350, secondValue: 250 },
  { name: 'Mar', value: 450, secondValue: 380 },
  { name: 'Apr', value: 400, secondValue: 320 },
  { name: 'May', value: 300, secondValue: 250 },
  { name: 'Jun', value: 500, secondValue: 420 },
  { name: 'Jul', value: 450, secondValue: 380 },
  { name: 'Aug', value: 400, secondValue: 350 },
  { name: 'Sep', value: 500, secondValue: 420 },
  { name: 'Oct', value: 450, secondValue: 380 },
  { name: 'Nov', value: 400, secondValue: 320 },
  { name: 'Dec', value: 350, secondValue: 280 },
];

const StatCard = ({ icon: Icon, title, value, trend, bgColor = 'bg-primary/10', iconColor = 'text-primary' }) => (
  <div className="bg-white p-4 rounded-xl flex flex-col gap-4">
    <div className="flex items-center justify-between">
      <div className={`p-3 rounded-full ${bgColor}`}>
        <Icon className={`${iconColor} text-xl`} />
      </div>
    </div>
    <div>
      <h3 className="text-gray-500 text-sm mb-1">{title}</h3>
      <div className="flex items-center gap-2">
        <span className="text-2xl font-semibold">{value}</span>
        <span className={`text-xs ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {trend > 0 ? '+' : ''}{trend}%
        </span>
      </div>
    </div>
  </div>
);

const liveScooters = [
  { vehicleNumber: '5684', location: 'New York', battery: '80%', speed: '25km/h' },
  { vehicleNumber: '2458', location: 'Los Angeles', battery: '60%', speed: '30km/h' },
  { vehicleNumber: '3587', location: 'Chicago', battery: '40%', speed: '20km/h' },
  { vehicleNumber: '3458', location: 'Houston', battery: '90%', speed: '35km/h' },
];

const LiveScooterRow = ({ vehicleNumber, location, battery, speed, onDetailsClick }) => (
  <tr className="text-[11px] border-b border-gray-50 hover:bg-gray-50 transition-colors">
    <td className="py-2">{vehicleNumber}</td>
    <td className="py-2">{location}</td>
    <td className="py-2">{battery}</td>
    <td className="py-2">{speed}</td>
    <td className="py-2">
      <button 
        onClick={(e) => {
          e.preventDefault();
          onDetailsClick(vehicleNumber);
        }}
        className="text-[#82CD47] hover:underline"
      >
        Details
      </button>
    </td>
  </tr>
);

const Dashboard = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const navigate = useNavigate();
  const barData = Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    value: Math.floor(Math.random() * 500) + 100
  }));

  const handleDetailsClick = (id) => {
    try {
      navigate(`/customer/${id}`);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Settings Modal */}
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />

      {/* Stats Cards */}
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-4 gap-6">
          <StatCard
            icon={BsCurrencyRupee}
            title="Today's Income"
            value="₹ 12,540.00"
            trend={5}
          />
          <StatCard
            icon={BsCurrencyRupee}
            title="Today's Expense"
            value="₹ 4,940.00"
            trend={-9}
          />
          <StatCard
            icon={IoMdPerson}
            title="Today's New User"
            value="268"
            trend={3}
          />
          <StatCard
            icon={BsCurrencyRupee}
            title="Total Balance"
            value="₹ 72,540.00"
            trend={0}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-6">
          {/* Active Users Chart */}
          <div className="bg-[#1C2260] text-white p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">Today's Active Users</h2>
            <p className="text-green-400 text-sm mb-6">(+23) than last week</p>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="day" 
                    stroke="#fff" 
                    opacity={0.5}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="#fff" 
                    opacity={0.5}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Bar 
                    dataKey="value" 
                    fill="#4CAF50"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Sales Overview */}
          <div className="bg-white p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Sales Overview</h2>
              <span className="text-[#82CD47] text-sm">(+5) more in 2023</span>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82CD47" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#82CD47" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSecondValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#666" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="#666" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="secondValue" 
                    stroke="#2563eb" 
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorSecondValue)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#82CD47" 
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-6">
          {/* Live Scooter Status */}
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium">Live Scooter Status</h3>
              <button className="text-[11px] text-[#82CD47]">View All</button>
            </div>
            <div>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-[11px] text-gray-500">
                    <th className="font-medium pb-3">Vehicle No.</th>
                    <th className="font-medium pb-3">Location</th>
                    <th className="font-medium pb-3">Battery</th>
                    <th className="font-medium pb-3">Speed</th>
                    <th className="font-medium pb-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {liveScooters.map((scooter) => (
                    <LiveScooterRow 
                      key={scooter.vehicleNumber} 
                      {...scooter} 
                      onDetailsClick={handleDetailsClick}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-6 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Live Location</h2>
              <button className="text-gray-500 px-4 py-1 rounded-lg hover:bg-gray-100">
                Filter
              </button>
            </div>
            <div className="h-[300px] w-full">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
