import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BsBatteryFull, BsSpeedometer, BsSend } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import scooterImg from '../assets/scooter-large.svg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css';

const CustomerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'customer',
      text: 'Hello, I need help with my booking.',
      timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    },
    {
      id: 2,
      sender: 'admin',
      text: 'Hi! How can I assist you today?',
      timestamp: new Date(Date.now() - 1000 * 60 * 4).toISOString(),
    },
    {
      id: 3,
      sender: 'customer',
      text: 'I want to extend my booking time.',
      timestamp: new Date(Date.now() - 1000 * 60 * 3).toISOString(),
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newMsg = {
      id: messages.length + 1,
      sender: 'admin',
      text: newMessage.trim(),
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  if (!id) {
    navigate('/');
    return null;
  }

  const customer = {
    name: "Abhishek Sharma",
    avatar: "https://ui-avatars.com/api/?name=Abhishek+Sharma&background=4CAF50&color=fff",
    vehicleDetails: {
      name: "Bajaj Chetak",
      presentAmount: "₹ 500.00",
      battery: "16h",
      speed: "25km/h"
    }
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-[300px_1fr_300px] bg-white rounded-xl shadow-sm">
        {/* Left Section */}
        <div className="p-6 border-r border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <img src={customer.avatar} alt={customer.name} className="w-12 h-12 rounded-full" />
            <div>
              <h3 className="text-sm font-medium">{customer.name}</h3>
              <button className="text-[11px] text-[#82CD47] bg-[#82CD47]/10 px-4 py-1.5 rounded-full mt-1">
                View Details
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-100 mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium">{customer.vehicleDetails.name}</h3>
                <p className="text-[11px] text-gray-500 mt-1">Present Amount</p>
                <p className="text-sm font-medium">{customer.vehicleDetails.presentAmount}</p>
              </div>
              <div className="w-10 h-10 bg-[#82CD47]/10 rounded-xl flex items-center justify-center">
                <img src={scooterImg} alt="Vehicle" className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-100 mb-6">
            <div className="h-[120px] bg-gray-50 rounded-xl flex items-center justify-center">
              <BiMap className="text-3xl text-gray-400" />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium mb-4">Everyday Ride</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[11px] text-gray-500">
                    <th className="pb-2">Distance</th>
                    <th className="pb-2">Speed</th>
                    <th className="pb-2">Rent</th>
                    <th className="pb-2">Fine</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  {[
                    { distance: "2km", speed: "25km/h", rent: "₹ 90.00", fine: "₹ 0.00", status: "Complete" },
                    { distance: "4km", speed: "44km/h", rent: "₹ 180.00", fine: "₹ 0.00", status: "Complete" },
                    { distance: "2km", speed: "30km/h", rent: "₹ 90.00", fine: "₹ 500.00", status: "Complete" },
                    { distance: "5km", speed: "35km/h", rent: "₹ 390.00", fine: "₹ 0.00", status: "Cancelled" },
                    { distance: "3km", speed: "28km/h", rent: "₹ 90.00", fine: "₹ 500.00", status: "Complete" },
                    { distance: "2km", speed: "38km/h", rent: "₹ 390.00", fine: "₹ 500.00", status: "Complete" }
                  ].map((ride, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="py-3">{ride.distance}</td>
                      <td className={`py-3 ${parseInt(ride.speed) > 40 ? 'text-red-500' : 'text-[#82CD47]'}`}>{ride.speed}</td>
                      <td className="py-3">{ride.rent}</td>
                      <td className={`py-3 ${ride.fine !== "₹ 0.00" ? 'text-red-500' : ''}`}>{ride.fine}</td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                          ride.status === 'Complete' ? 'bg-[#82CD47]/10 text-[#82CD47]' : 'bg-red-100 text-red-500'
                        }`}>
                          {ride.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="bg-[#82CD47] p-6 flex items-center justify-center">
          <div className="w-[320px] flex flex-col items-center">
            <div className="relative mb-6">
              <img src={scooterImg} alt="Scooter" className="w-[180px]" />
            </div>
            
            <div className="flex gap-8 mb-4">
              <div className="text-center">
                <div className="bg-white/20 w-11 h-11 rounded-full flex items-center justify-center mb-1">
                  <BsBatteryFull className="text-white text-lg" />
                </div>
                <div className="text-white text-xs font-medium">{customer.vehicleDetails.battery}</div>
                <div className="text-white/80 text-[10px]">Battery</div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-11 h-11 rounded-full flex items-center justify-center mb-1">
                  <BsSpeedometer className="text-white text-lg" />
                </div>
                <div className="text-white text-xs font-medium">{customer.vehicleDetails.speed}</div>
                <div className="text-white/80 text-[10px]">Speed</div>
              </div>
            </div>

            <div className="w-full bg-white/20 rounded-xl p-4 mb-4">
              <div className="text-white text-center">
                <p className="text-xs mb-1">Current Status</p>
                <p className="text-sm font-medium">Vehicle in Use</p>
                <p className="text-[10px] mt-1">Started 45 minutes ago</p>
              </div>
            </div>

            <button className="bg-white text-[#82CD47] px-6 py-1.5 rounded-full text-xs font-medium">
              Hold Ride
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-6 border-l border-gray-100">
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-4">Schedule Booking</h3>
            <Calendar 
              className="custom-calendar" 
              view="month"
              tileClassName={({ date }) => {
                const day = date.getDate();
                if ([8, 9, 10].includes(day)) return 'highlight-green';
                return '';
              }}
            />
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-medium mb-4">Customer Chat Box</h3>
            <div className="flex flex-col">
              <div className="space-y-4 mb-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex items-start gap-2 ${message.sender === 'admin' ? 'justify-end' : ''}`}>
                    {message.sender === 'customer' && (
                      <img src={customer.avatar} alt="" className="w-6 h-6 rounded-full" />
                    )}
                    <div className={`rounded-xl p-3 max-w-[80%] relative group ${
                      message.sender === 'admin' ? 'bg-gray-100' : 'bg-[#82CD47]/10'
                    }`}>
                      <p className="text-xs">{message.text}</p>
                      <span className="text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 absolute -bottom-4 transition-opacity ${
                        message.sender === 'admin' ? 'right-0' : 'left-0'
                      }">
                        {formatTimestamp(message.timestamp)}
                      </span>
                    </div>
                    {message.sender === 'admin' && (
                      <img src="https://ui-avatars.com/api/?name=Admin&background=4CAF50&color=fff" alt="" className="w-6 h-6 rounded-full" />
                    )}
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
              <form onSubmit={handleSendMessage} className="flex gap-2 mt-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 text-xs rounded-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-[#82CD47]"
                />
                <button
                  type="submit"
                  disabled={!newMessage.trim()}
                  className="bg-[#82CD47] text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#72bd37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <BsSend size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
