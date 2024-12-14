import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { BsCreditCard2Back } from 'react-icons/bs';
import { RiScooterLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FaRegCircle } from 'react-icons/fa';
import Chat from './Chat';

const slots = [
  { id: 'A', available: 2 },
  { id: 'B', available: 0 },
  { id: 'C', available: 1 },
  { id: 'D', available: 1 },
  { id: 'E', available: 0 },
  { id: 'F', available: 1 },
  { id: 'G', available: 1 },
  { id: 'H', available: 0 },
  { id: 'I', available: 1 },
  { id: 'J', available: 0 },
  { id: 'K', available: 0 },
  { id: 'L', available: 1 },
  { id: 'M', available: 0 },
  { id: 'M', available: 1 }
];

const Vehicles = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-6">
        <div className="mb-8">
          <img src="/logo.png" alt="EcoRyds" className="h-8" />
        </div>
        
        <div className="space-y-4">
          <button className="flex items-center gap-3 w-full px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm">
            <AiOutlineHome className="text-xl" />
            Dashboard
          </button>
          
          <button className="flex items-center gap-3 w-full px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm">
            <FiUsers className="text-xl" />
            Customers
          </button>
          
          <button className="flex items-center gap-3 w-full px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm">
            <BsCreditCard2Back className="text-xl" />
            Payments
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-2 bg-[#82CD47]/10 text-[#82CD47] rounded-lg text-sm">
            <RiScooterLine className="text-xl" />
            Vehicles
          </button>

          {[1,2,3,4].map((_, index) => (
            <button key={index} className="flex items-center gap-3 w-full px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm">
              <FiUsers className="text-xl" />
              Customers
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
          <div className="relative">
            <input
              type="text"
              placeholder="Type here..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-64 focus:outline-none focus:border-[#82CD47]"
            />
            <svg
              className="absolute left-3 top-2.5 text-gray-400 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-600 text-sm">
              Service
              <FaRegCircle className="text-[#82CD47]" />
            </button>
            <button className="text-sm text-gray-600">Abhishek</button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <IoSettingsOutline className="text-xl text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <IoNotificationsOutline className="text-xl text-gray-600" />
            </button>
          </div>
        </div>

        <div className="p-8 flex gap-8">
          {/* Vehicle Display */}
          <div className="flex-1 space-y-6">
            <div className="bg-[#82CD47] rounded-3xl p-8 relative h-80">
              <img 
                src="/scooter.png" 
                alt="Scooter" 
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48"
              />
              <div className="absolute left-4 top-4">
                <FaRegCircle className="text-white text-xl" />
              </div>
              <div className="absolute right-4 top-4">
                <FaRegCircle className="text-white text-xl" />
              </div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
                <div className="bg-white/90 rounded-full p-4 flex flex-col items-center min-w-[80px]">
                  <span className="text-sm text-gray-600">Health</span>
                  <span className="font-medium">90%</span>
                </div>
                <div className="bg-white/90 rounded-full p-4 flex flex-col items-center min-w-[80px]">
                  <span className="text-sm text-gray-600">Km/h</span>
                  <span className="font-medium">25469</span>
                </div>
                <div className="bg-[#FFD700] rounded-full p-4 flex flex-col items-center min-w-[80px]">
                  <span className="text-white font-medium">VC</span>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <button className="px-8 py-2 bg-[#FF6B6B] text-white rounded-full text-sm">
                  Service
                </button>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-3xl p-6">
              <div className="mb-4">
                <h3 className="text-sm font-medium">Vehicle Add/Remove</h3>
              </div>
              <div className="bg-gray-100 rounded-2xl h-48">
                {/* Map will be integrated here */}
              </div>
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">UIN NO</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Km/h</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Health</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Vehicle Condition</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">BM</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 px-4 py-2 bg-[#82CD47] text-white rounded-lg text-sm hover:bg-[#72bd37]">
                    Add
                  </button>
                  <button className="flex-1 px-4 py-2 bg-[#FF6B6B] text-white rounded-lg text-sm hover:bg-[#ff5252]">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-96 space-y-6">
            {/* Booking Slots */}
            <div className="bg-white rounded-3xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-medium">Booking Slot</h3>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-[#82CD47] rounded-full"></span>
                    Available
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-[#FF6B6B] rounded-full"></span>
                    Unavailable
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {slots.map((slot, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{slot.id} Slot</span>
                      {slot.available > 0 && (
                        <span className="text-xs text-[#82CD47]">{slot.available} Available</span>
                      )}
                      {slot.available === 0 && (
                        <span className="text-xs text-[#FF6B6B]">0 Available</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            i < slot.available
                              ? 'bg-[#82CD47]/10'
                              : 'bg-[#FF6B6B]/10'
                          }`}
                        >
                          {i < slot.available && (
                            <RiScooterLine className="text-[#82CD47]" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Section */}
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
