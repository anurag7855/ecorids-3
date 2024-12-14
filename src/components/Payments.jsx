import React from 'react';
import { BsCreditCard2Back } from 'react-icons/bs';
import { RiQrCodeLine } from 'react-icons/ri';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { name: 'Jan', Card: 3000, UPI: 4400 },
  { name: 'Feb', Card: 4500, UPI: 5200 },
  { name: 'Mar', Card: 3200, UPI: 4800 },
  { name: 'Apr', Card: 4800, UPI: 5800 },
  { name: 'May', Card: 3800, UPI: 4900 },
  { name: 'Jun', Card: 4200, UPI: 5500 },
  { name: 'Jul', Card: 3900, UPI: 4700 },
  { name: 'Aug', Card: 4600, UPI: 5900 },
  { name: 'Sep', Card: 3700, UPI: 4600 },
  { name: 'Oct', Card: 4300, UPI: 5300 },
  { name: 'Nov', Card: 3500, UPI: 4500 },
  { name: 'Dec', Card: 4100, UPI: 5100 }
];

const dailyData = [
  { name: '1', Card: 300, UPI: 440 },
  { name: '2', Card: 450, UPI: 520 },
  { name: '3', Card: 320, UPI: 480 },
  { name: '4', Card: 480, UPI: 580 },
  { name: '5', Card: 380, UPI: 490 },
  { name: '6', Card: 420, UPI: 550 },
  { name: '7', Card: 390, UPI: 470 },
  { name: '8', Card: 460, UPI: 590 },
  { name: '9', Card: 370, UPI: 460 },
  { name: '10', Card: 430, UPI: 530 }
];

const paymentsData = [
  { id: '01', vehicleNo: '5884', customer: 'Abhishek', type: 'Card' },
  { id: '02', vehicleNo: '2458', customer: 'Payal', type: 'Card' },
  { id: '03', vehicleNo: '3587', customer: 'Ritu', type: 'UPI' },
  { id: '04', vehicleNo: '3458', customer: 'Preety', type: 'UPI' },
  { id: '05', vehicleNo: '5254', customer: 'Rahul', type: 'UPI' },
  { id: '06', vehicleNo: '2314', customer: 'Amlan', type: 'UPI' },
  { id: '07', vehicleNo: '2847', customer: 'Jeet', type: 'Card' },
  { id: '08', vehicleNo: '2847', customer: 'Preety', type: 'Card' },
  { id: '09', vehicleNo: '3254', customer: 'Rishiree', type: 'UPI' },
  { id: '10', vehicleNo: '1547', customer: 'Avinash', type: 'UPI' },
  { id: '11', vehicleNo: '6587', customer: 'Virat', type: 'Card' },
  { id: '12', vehicleNo: '2564', customer: 'rahul', type: 'Card' }
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded-lg shadow-md border border-gray-100">
        {payload.map((entry, index) => (
          <div key={index} className="text-xs">
            <span className={entry.name === 'Card' ? 'text-[#82CD47]' : 'text-[#FF69B4]'}>
              {entry.name}: ₹{entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const Payments = () => {
  return (
    <div className="p-8">
      {/* Payment Stats */}
      <div className="flex gap-8 mb-8">
        <div className="flex-1 bg-white rounded-2xl p-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-[#82CD47]/10 rounded-2xl flex items-center justify-center">
            <BsCreditCard2Back className="text-[#82CD47] text-2xl" />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Card Income</p>
            <p className="text-xl font-medium">₹ 45,940.00</p>
          </div>
        </div>
        
        <div className="flex-1 bg-white rounded-2xl p-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-[#82CD47]/10 rounded-2xl flex items-center justify-center">
            <RiQrCodeLine className="text-[#82CD47] text-2xl" />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">UPI Income</p>
            <p className="text-xl font-medium">₹ 75,450.00</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="space-y-6">
        {/* Monthly Chart */}
        <div className="bg-white rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium">Monthly Payments</h3>
            <div className="flex gap-2">
              <button className="px-4 py-1 rounded-full bg-[#82CD47]/10 text-[#82CD47] text-xs">Card</button>
              <button className="px-4 py-1 rounded-full bg-gray-100 text-gray-500 text-xs">UPI</button>
            </div>
          </div>
          <div className="h-[200px] bg-black rounded-2xl p-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCard" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82CD47" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#82CD47" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorUPI" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF69B4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FF69B4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="Card" stroke="#82CD47" strokeWidth={2} fillOpacity={1} fill="url(#colorCard)" />
                <Area type="monotone" dataKey="UPI" stroke="#FF69B4" strokeWidth={2} fillOpacity={1} fill="url(#colorUPI)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Daily Chart */}
        <div className="bg-white rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium">Daily Payments</h3>
            <div className="flex gap-2">
              <button className="px-4 py-1 rounded-full bg-[#82CD47]/10 text-[#82CD47] text-xs">Card</button>
              <button className="px-4 py-1 rounded-full bg-gray-100 text-gray-500 text-xs">UPI</button>
            </div>
          </div>
          <div className="h-[200px] bg-black rounded-2xl p-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dailyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCardDaily" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82CD47" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#82CD47" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorUPIDaily" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF69B4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FF69B4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="Card" stroke="#82CD47" strokeWidth={2} fillOpacity={1} fill="url(#colorCardDaily)" />
                <Area type="monotone" dataKey="UPI" stroke="#FF69B4" strokeWidth={2} fillOpacity={1} fill="url(#colorUPIDaily)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Payments Table */}
        <div className="bg-white rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-medium">Payments Details</h3>
            <button className="px-4 py-1.5 text-xs rounded-lg border border-gray-200 hover:bg-gray-50">
              Filter
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs text-gray-500">
                  <th className="pb-4">No.</th>
                  <th className="pb-4">Vehicle no.</th>
                  <th className="pb-4">Customers</th>
                  <th className="pb-4">Payment Type</th>
                  <th className="pb-4">Invoice</th>
                  <th className="pb-4"></th>
                </tr>
              </thead>
              <tbody>
                {paymentsData.map((payment) => (
                  <tr key={payment.id} className="text-sm border-t border-gray-100">
                    <td className="py-3">{payment.id}</td>
                    <td className="py-3 text-[#82CD47]">{payment.vehicleNo}</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <img 
                          src={`https://ui-avatars.com/api/?name=${payment.customer}&background=4CAF50&color=fff`} 
                          alt={payment.customer} 
                          className="w-6 h-6 rounded-full"
                        />
                        {payment.customer}
                      </div>
                    </td>
                    <td className="py-3">{payment.type}</td>
                    <td className="py-3">
                      <button className="text-xs text-[#82CD47]">PDF</button>
                    </td>
                    <td className="py-3">
                      <button className="text-xs px-6 py-1.5 rounded-full bg-[#82CD47] text-white hover:bg-[#72bd37]">
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
