import React, { useState } from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';


import { FaHome } from "react-icons/fa";
import { PiEyeFill } from "react-icons/pi";
import { IoPersonSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { LiaStarSolid } from "react-icons/lia";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import WebsiteVisitorsChart from '../components/WebsiteVisitorsChart/WebsiteVisitorsChart';
import LatestTransactions from '../components/LatestTransactions/LatestTransactions';







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
    <div className="bg-black rounded-lg p-6 shadow-[inset_0_0_19px_0_rgba(179,244,86,0.5)]">
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
    <div className="bg-black flex overflow-auto min-h-[250vh]">
      

      {/* Main Content */}
      <div className="flex-1 overflow-auto">

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={PiEyeFill}
              title="Pageviews"
              value="9870"
              change="8.5%"
              isPositive={true}
            />
            <StatCard
              icon={IoPersonSharp}
              title="Monthly users"
              value="654"
              change="2.5%"
              isPositive={true}
            />
            <StatCard
              icon={CiCirclePlus}
              title="New sign ups"
              value="12"
              change="4.3%"
              isPositive={false}
            />
            <StatCard
              icon={LiaStarSolid}
              title="Subscriptions"
              value="12"
              change="1.3%"
              isPositive={true}
            />
          </div>

          {/* Earnings Chart */}
          <div className="bg-black text-white rounded-lg shadow-[inset_0_0_19px_0_rgba(179,244,86,0.5)] p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Earning Details</h3>
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

          <div className='w-full flex items-stretch  justify-between gap-8 bg-black rounded-lg shadow-sm'>
            <WebsiteVisitorsChart />
            <LatestTransactions />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;