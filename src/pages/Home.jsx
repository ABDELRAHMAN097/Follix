import React, { useState } from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';


import { FaHome } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";







const HomePage = () => {
  const [selectedYear, setSelectedYear] = useState('2025');

  // Sample earnings data
  const earningsData = [
    { month: 'Jan', earnings: 10000 },
    { month: 'Feb', earnings: 12000 },
    { month: 'Mar', earnings: 18000 },
    { month: 'Apr', earnings: 15000 },
    { month: 'May', earnings: 17000 },
    { month: 'Jun', earnings: 16000 },
    { month: 'Jul', earnings: 19000 },
    { month: 'Aug', earnings: 27876 },
    { month: 'Sep', earnings: 25000 },
    { month: 'Oct', earnings: 23000 },
    { month: 'Nov', earnings: 22000 },
    { month: 'Dec', earnings: 24000 }
  ];

  // Sample room data
  const roomsData = [
    { id: '#12', type: 'Single', status: 'Available', availableFrom: '12-12-2025', availableTo: '18-12-2025', hotel: 'Makah', price: '120 $', distance: '200 m' },
    { id: '#13', type: 'Double', status: 'Reserved', availableFrom: '12-12-2025', availableTo: '18-12-2025', hotel: 'Makah', price: '150 $', distance: '200 m' },
    { id: '#14', type: 'Single', status: 'Available', availableFrom: '12-12-2025', availableTo: '18-12-2025', hotel: 'Makah', price: '120 $', distance: '200 m' },
    { id: '#15', type: 'Double', status: 'Reserved', availableFrom: '12-12-2025', availableTo: '18-12-2025', hotel: 'Makah', price: '150 $', distance: '200 m' },
    { id: '#16', type: 'Double', status: 'Reserved', availableFrom: '12-12-2025', availableTo: '18-12-2025', hotel: 'Makah', price: '150 $', distance: '200 m' }
  ];

  const sidebarItems = [
    { icon: FaHome, label: 'Overview', active: true },
    { icon: FaBuilding, label: 'Properties' },
    { icon: FaFileAlt, label: 'contact' },
    { icon: FaHome, label: 'Requests' },
    { icon: FaHome, label: 'Users' },
    { icon: FaHome, label: 'Support System' }
  ];

  const StatCard = ({ icon: Icon, title, value, change, isPositive }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <Icon className="w-5 h-5 text-gray-400" />
      </div>
      <div className="flex items-end justify-between">
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className={`flex items-center text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <FaHome className="w-4 h-4 mr-1" /> : <FaHome className="w-4 h-4 mr-1" />}
          {change}
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-1">
        {isPositive ? 'Up' : 'Down'} from yesterday
      </div>
    </div>
  );

  return (
    <div className="  flex overflow-auto min-h-[250vh]">
      

      {/* Main Content */}
      <div className="flex-1 overflow-auto">

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={FaHome}
              title="Check in"
              value="9870"
              change="8.5%"
              isPositive={true}
            />
            <StatCard
              icon={FaHome}
              title="Check out"
              value="654"
              change="2.5%"
              isPositive={true}
            />
            <StatCard
              icon={FaHome}
              title="Available Rooms"
              value="12"
              change="4.3%"
              isPositive={false}
            />
            <StatCard
              icon={FaHome}
              title="Occupied Room"
              value="12"
              change="1.3%"
              isPositive={true}
            />
          </div>

          {/* Earnings Chart */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Earning Details</h3>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={earningsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                    tickFormatter={(value) => `${value / 1000}k`}
                  />
                  <Line
                    type="monotone"
                    dataKey="earnings"
                    stroke="#0d9488"
                    strokeWidth={2}
                    dot={{ fill: '#0d9488', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#0d9488', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Rooms Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-gray-200 bg-gray-50">
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Room ID</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Room Type</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Available from</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Available to</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Hotel</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Price / day</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Distance (from hrm)</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {roomsData.map((room, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 mr-3"
                          />
                          <span className="text-sm font-medium text-gray-900">{room.id}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600">{room.type}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${room.status === 'Available'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                          }`}>
                          <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${room.status === 'Available' ? 'bg-green-600' : 'bg-red-600'
                            }`}></div>
                          {room.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600">{room.availableFrom}</td>
                      <td className="py-4 px-6 text-sm text-gray-600">{room.availableTo}</td>
                      <td className="py-4 px-6 text-sm text-gray-600">{room.hotel}</td>
                      <td className="py-4 px-6 text-sm text-gray-600">{room.price}</td>
                      <td className="py-4 px-6 text-sm text-gray-600">{room.distance}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <button className="p-1 text-gray-400 hover:text-teal-600 transition-colors">
                            <FaHome className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                            <FaHome className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                            <FaHome className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;