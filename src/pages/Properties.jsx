import React, { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineWifiTethering } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu";

const Properties = () => {
  // الmodals يرايق

  const [showEditModal, setShowEditModal] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // تغيير محتوي الفورم
  const totalSteps = 3;
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => (prev >= totalSteps ? 1 : prev + 1));
  };

  const rooms = [
    {
      id: "#12",
      type: "Single",
      status: "Available",
      availableFrom1: "12-15-2025",
      availableFrom2: "18-12-2023",
      hotel: "Match1",
      price: "120.9",
      distance: "200 m",
    },
    {
      id: "#13",
      type: "Double",
      status: "Reserved",
      availableFrom1: "12-15-2025",
      availableFrom2: "19-12-2023",
      hotel: "Match7",
      price: "120.9",
      distance: "200 m",
    },
    {
      id: "#14",
      type: "Double",
      status: "Reserved",
      availableFrom1: "12-15-2025",
      availableFrom2: "19-12-2023",
      hotel: "Match7",
      price: "120.9",
      distance: "200 m",
    },
    {
      id: "#15",
      type: "Double",
      status: "Available",
      availableFrom1: "12-15-2025",
      availableFrom2: "19-12-2023",
      hotel: "May",
      price: "120.9",
      distance: "200 m",
    },
  ];

  // الهههه checkboxes
  const [checkedRooms, setCheckedRooms] = useState({});

  const handleCheckboxChange = (id) => {
    setCheckedRooms((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  {
    /* Pagination */
  }
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

  return (
    <div className="p-4 bg-black">
      {/* nav 5555 */}
      <div className="flex items-center justify-between py-2 bg-black">
        {/* buttonssss / 2 */}
        <div className="flex items-center justify-center gap-2">
          {/* زر الإضافة */}
          <button className="flex items-center justify-center gap-2 px-3 py-2 bg-[#134049] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <CiCirclePlus className="text-white text-[18px]"/>
            <span className="text-white font-medium">Add</span>
          </button>

          {/* زر الفلترة */}
          <button className="flex items-center justify-center gap-2 px-3 py-2 bg-white border border-[#56555CCC] rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <LuSettings2 className="text-gray-700 text-[18px]"/>
            <span className="text-gray-700 font-medium">Filtration</span>
          </button>

        </div>

        <h4 className="text-[#6B7280] text-[18px]">Manage Properties</h4>
      </div>
      {/* table */}
      <div className="overflow-hidden rounded-t-[18px] border border-gray-300">
        <table dir="ltr" className="min-w-full border-collapse">
          <thead>
            <tr className="text-center text-[14px] text-gray-700">
              <th className="p-2 font-semibold rounded-tl-[18px]">Room ID</th>
              <th className="p-2 font-semibold">Room Type</th>
              <th className="p-2 font-semibold">Status</th>
              <th className="p-2 font-semibold">Available from</th>
              <th className="p-2 font-semibold">Available from</th>
              <th className="p-2 font-semibold">Hotel</th>
              <th className="p-2 font-semibold">Price / day</th>
              <th className="p-2 font-semibold">Distance (from hm)</th>
              <th className="p-2 font-semibold rounded-tr-[18px]"></th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr
                key={index}
                className="text-center text-sm text-gray-600 hover:bg-gray-50"
              >
                <td className="p-3 border-t border-gray-300 font-medium">
                  {/* الهههه checkboxes */}
                  <input
                    type="checkbox"
                    checked={!!checkedRooms[room.id]}
                    onChange={() => handleCheckboxChange(room.id)}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  {room.id}
                </td>
                <td className="p-3 border-t border-gray-300">{room.type}</td>
                <td className="p-3 border-t border-gray-300">
                  {room.status === "Available" ? (
                    <span className="text-[#409261] bg-[#E9FFEF] py-[5px] px-[5px] rounded-full flex items-center justify-center gap-1">
                      <BsDot className="text-2xl text-[#409261] p-0" />{" "}
                      {room.status}
                    </span>
                  ) : (
                    <span className="text-[#E32828] bg-[#FFE3E3] py-[5px] px-[5px] rounded-full flex items-center justify-center gap-1">
                      <BsDot className="text-2xl text-[#E32828] p-0" />{" "}
                      {room.status}
                    </span>
                  )}
                </td>
                <td className="p-3 border-t border-gray-300">
                  {room.availableFrom1}
                </td>
                <td className="p-3 border-t border-gray-300">
                  {room.availableFrom2}
                </td>
                <td className="p-3 border-t border-gray-300">{room.hotel}</td>
                <td className="p-3 border-t border-gray-300">${room.price}</td>
                <td className="p-3 border-t border-gray-300">
                  {room.distance}
                </td>
                <td className="p-1 border-t border-gray-300 text-gray-400">
                  <div className="flex items-center justify-center gap-2">
                    <CiEdit
                      className="text-[19px] cursor-pointer"
                      onClick={() => setShowEditModal(true)}
                    />
                    <MdOutlineWifiTethering
                      className="text-[19px] cursor-pointer"
                      onClick={() => setShowLinkModal(true)}
                    />
                    <MdDeleteOutline
                      className="text-[19px] cursor-pointer"
                      onClick={() => setShowDeleteModal(true)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* modals 3  ب */}
        {/* Edit Modal */}
        {showEditModal && (
          <div
            dir="ltr"
            onClick={() => setShowEditModal(false)}
            className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col justify-center bg-white p-6 rounded-lg shadow-md w-[40%] relative"
            >
              {/* Close button */}
              <span
                onClick={() => setShowEditModal(false)}
                className="absolute top-2 right-2 text-xl cursor-pointer"
              >
                <IoClose className="text-[#014346]" />
              </span>

              <p className="text-lg text-[#014346] font-semibold mb-2">
                Edit on property
              </p>

              {/* Steps */}
              {step === 1 && (
                <form className="w-full flex flex-col items-center justify-center gap-2">
                  <div className="w-full">
                    <label className="text-slate-400 text-[15px]">
                      Hotel Name
                    </label>
                    <input
                      className="w-full p-1 outline-none border border-slate-300 rounded text-[#606060]"
                      type="text"
                    />
                  </div>

                  <div className="w-full">
                    <label className="text-slate-400 text-[15px]">
                      Hotel Description
                    </label>
                    <textarea
                      className="w-full min-h-2 p-1 outline-none border border-slate-300 rounded text-[#606060]"
                      type="text"
                    />
                  </div>
                  {/* photoooos */}

                  {/* Distance from */}
                  <div className="w-full">
                    <label className="text-slate-400 text-[15px]">
                      Distance from harm
                    </label>
                    <input
                      className="w-full min-h-2 p-1 outline-none border border-slate-300 rounded text-[#606060]"
                      type="text"
                    />
                  </div>

                  {/* Link for hotel location */}
                  <div className="w-full">
                    <label className="text-slate-400 text-[15px]">
                      Link for hotel location
                    </label>
                    <input
                      className="w-full min-h-2 p-1 outline-none border border-slate-300 rounded text-blue-500 underline"
                      type="text"
                    />
                  </div>
                </form>
              )}

              {step === 2 && (
                <form className="w-full flex flex-col items-center justify-center gap-2">
                  <div className="w-full">
                    <label className="text-slate-400 text-[15px]">
                      Distance from harm
                    </label>
                    <input
                      className="w-full min-h-2 p-1 outline-none border border-slate-300 rounded text-[#606060]"
                      type="text"
                    />
                  </div>

                  <div className="w-full">
                    <label className="text-slate-400 text-[15px]">
                      Link for hotel location
                    </label>
                    <input
                      className="w-full min-h-2 p-1 outline-none border border-slate-300 rounded text-blue-500 underline"
                      type="text"
                    />
                  </div>
                </form>
              )}
              {/* تغيير محتوي الفورم */}
              <div className="w-[100%] flex items-center justify-center gap-15 mt-4">
                {/* buttons */}
                <button className="px-5 py-1 bg-primary text-white rounded-md w-[120px]">
                  Cancel
                </button>
                <button
                  onClick={nextStep}
                  className="px-5 py-1 bg-primary text-white rounded-md w-[120px]"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Link Modal */}
        {showLinkModal && (
          <div
            onClick={() => setShowLinkModal(false)}
            className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-6 rounded-lg shadow-md min-w-[300px]"
            >
              <h2 className="text-lg font-semibold mb-2">Room Details</h2>
              <p>Connection or details popup content...</p>
            </div>
          </div>
        )}

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
                  Delete Property
                </p>
                <img
                  src="../../public/images/delete-D0ruh0tMf7.jpg"
                  alt="delete-img"
                  className="w-7"
                />
              </div>

              <p>? Do you sure you wanna to delete this property</p>
              {/* buttons */}
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
      </div>

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

export default Properties;
