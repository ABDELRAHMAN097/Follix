import React, { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const ContentManager = () => {
  const [activeTab, setActiveTab] = useState("hero");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [partition, setPartition] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`https://api.example.com/partition?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setPartition(data.partition);
        setTotalPages(data.totalPages);
      });
  }, [currentPage]);

  const HeroSection = () => (
    <div>
      <div className="overflow-hidden rounded-t-[18px] border border-gray-300">
        <table dir="ltr" className="min-w-full text-start border-collapse">
          <thead>
            <tr className="text-center text-[14px] text-gray-700">
              <th className="w-[45%] text-start p-3 font-semibold rounded-tl-[18px]">
                Video Name
              </th>
              <th className="w-[45%] text-start p-3 font-semibold">
                Updated Date
              </th>
              <th className="w-[10%] text-start p-2 font-semibold rounded-tr-[18px]"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center text-sm text-gray-600 hover:bg-gray-50">
              <td className="p-3 text-start border-t border-gray-300 font-medium">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                GettyImages-997991030.
              </td>
              <td className="p-3 text-start border-t border-gray-300">
                12-12-2025
              </td>
              <td className="p-1 text-start border-t border-gray-300 text-gray-400">
                <div className="flex items-center justify-center gap-2">
                  <MdDeleteOutline
                    className="text-[19px] cursor-pointer"
                    onClick={() => setShowDeleteModal(true)}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const BannersSection = () => (
   <div>
      <div className="overflow-hidden rounded-t-[18px] border border-gray-300">
        <table dir="ltr" className="min-w-full text-start border-collapse">
          <thead>
            <tr className="text-center text-[14px] text-gray-700">
              <th className="text-start p-3 font-semibold rounded-tl-[18px]">
                Photo
              </th>
              <th className=" text-center p-3 font-semibold">
                Title 
              </th>
               <th className=" text-center p-3 font-semibold">
                Description
              </th>
               <th className=" text-center p-3 font-semibold">
                Date
              </th>
              <th className=" text-center p-2 font-semibold rounded-tr-[18px]"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center text-sm text-gray-600 hover:bg-gray-50">
              <td className="p-3 text-start border-t border-gray-300 font-medium flex items-center justify-start">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <div className="w-8 h-8 bg-[#D9D9D9] rounded-full"></div>
              </td>
              <td className="p-3 text-center border-t border-gray-300">
                title which will appear in banner
              </td>
              <td className="p-3 text-center border-t border-gray-300">
                description about title
              </td>
              <td className="p-3 text-center border-t border-gray-300">
                12-12-2025
              </td>
              <td className="p-1 text-start border-t border-gray-300 text-gray-400">
                <div className="flex items-center justify-center gap-2">
                  <MdDeleteOutline
                    className="text-[19px] cursor-pointer"
                    onClick={() => setShowDeleteModal(true)}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const AdsSection = () => (
   <div>
      <div className="overflow-hidden rounded-t-[18px] border border-gray-300">
        <table dir="ltr" className="min-w-full text-start border-collapse">
          <thead>
            <tr className="text-center text-[14px] text-gray-700">
              <th className="text-start p-3 font-semibold rounded-tl-[18px]">
                Photo
              </th>
              <th className=" text-center p-3 font-semibold">
                Title 
              </th>
               <th className=" text-center p-3 font-semibold">
                Description
              </th>
               <th className=" text-center p-3 font-semibold">
                Will Appear
              </th>
              <th className=" text-center p-2 font-semibold rounded-tr-[18px]"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center text-sm text-gray-600 hover:bg-gray-50">
              <td className="p-3 text-start border-t border-gray-300 font-medium flex items-center justify-start">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <div className="w-8 h-8 bg-[#D9D9D9] rounded-full"></div>
              </td>
              <td className="p-3 text-center border-t border-gray-300">
                title which will appear in banner
              </td>
              <td className="p-3 text-center border-t border-gray-300">
                description about title
              </td>
              <td className="p-3 text-center border-t border-gray-300">
                3 Days
              </td>
              <td className="p-1 text-start border-t border-gray-300 text-gray-400">
                <div className="flex items-center justify-center gap-2">
                  <MdDeleteOutline
                    className="text-[19px] cursor-pointer"
                    onClick={() => setShowDeleteModal(true)}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const VisitorsPhotoSection = () => (
    <div>
      <div className="overflow-hidden rounded-t-[18px] border border-gray-300">
        <table dir="ltr" className="min-w-full text-start border-collapse">
          <thead>
            <tr className="text-center text-[14px] text-gray-700">
              <th className="w-[45%] text-start p-3 font-semibold rounded-tl-[18px]">
                Photo Name
              </th>
              <th className="w-[45%] text-start p-3 font-semibold">
                Updated Date
              </th>
              <th className="w-[10%] text-start p-2 font-semibold rounded-tr-[18px]"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center text-sm text-gray-600 hover:bg-gray-50">
              <td className="p-3 text-start border-t border-gray-300 font-medium">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                GettyImages-997991030.
              </td>
              <td className="p-3 text-start border-t border-gray-300">
                12-12-2025
              </td>
              <td className="p-1 text-start border-t border-gray-300 text-gray-400">
                <div className="flex items-center justify-center gap-2">
                  <MdDeleteOutline
                    className="text-[19px] cursor-pointer"
                    onClick={() => setShowDeleteModal(true)}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case "hero":
        return <HeroSection />;
      case "banners":
        return <BannersSection />;
      case "ads":
        return <AdsSection />;
      case "visitors":
        return <VisitorsPhotoSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center justify-center gap-2">
          <button className="flex items-center justify-center gap-2 px-3 py-2 bg-[#134049] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <CiCirclePlus className="text-white text-[18px]" />
            <span className="text-white font-medium">Add</span>
          </button>
        </div>
        <h4 className="text-[#6B7280] text-[18px]">Manage Content</h4>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center justify-end gap-8 py-2">
        {/* Visitors */}
        <button
          onClick={() => setActiveTab("visitors")}
          className={`text-[16px] ${
            activeTab === "visitors"
              ? "text-[#134049] font-bold border-b-2 border-[#134049]"
              : "text-[#6B7280]"
          }`}
        >
          Visitors Photo
        </button>
        {/* Ads */}
         <button
          onClick={() => setActiveTab("ads")}
          className={`text-[16px] ${
            activeTab === "ads"
              ? "text-[#134049] font-bold border-b-2 border-[#134049]"
              : "text-[#6B7280]"
          }`}
        >
          Ads
        </button>
        {/* Banners */}
        <button
          onClick={() => setActiveTab("banners")}
          className={`text-[16px] ${
            activeTab === "banners"
              ? "text-[#134049] font-bold border-b-2 border-[#134049]"
              : "text-[#6B7280]"
          }`}
        >
          Banners
        </button>
        {/* Hero */}
         <button
          onClick={() => setActiveTab("hero")}
          className={`text-[16px] ${
            activeTab === "hero"
              ? "text-[#134049] font-bold border-b-2 border-[#134049]"
              : "text-[#6B7280]"
          }`}
        >
          Hero Section
        </button>
      </div>

      {/* Active Tab Content */}
      {renderActiveTab()}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div
          onClick={() => setShowDeleteModal(false)}
          className="fixed inset-0 bg-black/30 flex flex-col items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-lg shadow-md min-w-[300px]"
          >
            <div className="flex items-start justify-center gap-1 ">
              <p className="text-lg font-semibold mb-2 text-primary">
                Delete Video
              </p>
              <img
                src="../../public/images/delete-D0ruh0tMf7.jpg"
                alt="delete-img"
                className="w-7"
              />
            </div>
            <p>? Do you sure you wanna to delete this property</p>
            <div className="flex items-start justify-between mt-12">
              <button className="px-5 py-1 bg-primary text-white rounded-md">
                Delete
              </button>
              <button className="px-5 py-1 bg-primary text-white rounded-md">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 p-2 rounded-xl">
        <div className="flex gap-3 text-gray-500 text-sm">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 ${
                page === currentPage
                  ? "border border-[#1e3a3a] text-[#1e3a3a] font-medium"
                  : ""
              }`}
            >
              {page.toString().padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentManager;
