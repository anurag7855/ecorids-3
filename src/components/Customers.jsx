import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoFilter } from 'react-icons/io5';
import { FaCircle } from 'react-icons/fa';

const Customers = () => {
  const navigate = useNavigate();

  const stats = [
    { title: 'Online Customers', value: 624, trend: 5, status: 'online' },
    { title: 'Offline Customers', value: 16, trend: -9, status: 'offline' },
    { title: 'Wait List Customers', value: 248, trend: 3, status: 'waitlist' },
  ];

  const liveCustomers = [
    { id: '01', vehicleNo: '5684', name: 'Abhishek', status: 'Online' },
    { id: '02', vehicleNo: '2458', name: 'Payal', status: 'Offline' },
    { id: '03', vehicleNo: '3587', name: 'Ritu', status: 'Offline' },
    { id: '04', vehicleNo: '3458', name: 'Preety', status: 'Online' },
    { id: '05', vehicleNo: '5254', name: 'Rahul', status: 'Online' },
    { id: '06', vehicleNo: '2314', name: 'Amlan', status: 'Online' },
    { id: '07', vehicleNo: '2647', name: 'Jeet', status: 'Offline' },
    { id: '08', vehicleNo: '2647', name: 'Preety', status: 'Online' },
    { id: '09', vehicleNo: '3254', name: 'Itishree', status: 'Online' },
    { id: '10', vehicleNo: '1547', name: 'Avinash', status: 'Online' },
    { id: '11', vehicleNo: '6587', name: 'Virat', status: 'Online' },
  ];

  const waitListCustomers = [
    { id: '01', name: 'Rahul' },
    { id: '02', name: 'Gourav' },
    { id: '03', name: 'Ritu' },
    { id: '04', name: 'Preety' },
    { id: '05', name: 'Rahul' },
    { id: '06', name: 'Amlan' },
    { id: '07', name: 'Jeet' },
    { id: '08', name: 'Preety' },
    { id: '09', name: 'Itishree' },
    { id: '10', name: 'Avinash' },
    { id: '11', name: 'Virat' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-between">
            <div>
              <h3 className="text-gray-500 text-sm">{stat.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-2xl font-semibold">{stat.value}</span>
                <span className={`text-xs ${stat.trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.trend > 0 ? '+' : ''}{stat.trend}%
                </span>
              </div>
            </div>
            <div className={`p-3 rounded-full ${
              stat.status === 'online' ? 'bg-green-100' :
              stat.status === 'offline' ? 'bg-red-100' : 'bg-yellow-100'
            }`}>
              <div className={`w-4 h-4 rounded-full ${
                stat.status === 'online' ? 'bg-green-500' :
                stat.status === 'offline' ? 'bg-red-500' : 'bg-yellow-500'
              }`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Live Customers Status */}
        <div className="bg-white rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Live Customers Status</h2>
            <button className="flex items-center gap-2 text-gray-500">
              <IoFilter /> Filter
            </button>
          </div>
          <table className="w-full">
            <thead className="text-left text-gray-500 text-sm">
              <tr>
                <th className="py-2">No.</th>
                <th className="py-2">Vehicle no.</th>
                <th className="py-2">Customers</th>
                <th className="py-2">Status</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {liveCustomers.map((customer) => (
                <tr key={customer.id} className="border-t">
                  <td className="py-3">{customer.id}</td>
                  <td className="py-3">{customer.vehicleNo}</td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://ui-avatars.com/api/?name=${customer.name}&background=random`}
                        alt={customer.name}
                        className="w-6 h-6 rounded-full"
                      />
                      {customer.name}
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-1">
                      <FaCircle className={`text-xs ${customer.status === 'Online' ? 'text-green-500' : 'text-red-500'}`} />
                      {customer.status}
                    </div>
                  </td>
                  <td className="py-3">
                    <button
                      onClick={() => navigate(`/customer/${customer.id}`)}
                      className="px-4 py-1 bg-green-500 text-white rounded-md text-sm"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Wait List Customers */}
        <div className="bg-white rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Wait List Customers</h2>
            <button className="flex items-center gap-2 text-gray-500">
              <IoFilter /> Filter
            </button>
          </div>
          <table className="w-full">
            <thead className="text-left text-gray-500 text-sm">
              <tr>
                <th className="py-2">No.</th>
                <th className="py-2">Customers</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {waitListCustomers.map((customer) => (
                <tr key={customer.id} className="border-t">
                  <td className="py-3">{customer.id}</td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://ui-avatars.com/api/?name=${customer.name}&background=random`}
                        alt={customer.name}
                        className="w-6 h-6 rounded-full"
                      />
                      {customer.name}
                    </div>
                  </td>
                  <td className="py-3">
                    <button className="px-4 py-1 bg-green-500 text-white rounded-md text-sm">
                      Accept
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
