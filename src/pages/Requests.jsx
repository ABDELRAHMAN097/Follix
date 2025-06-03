import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

const Requests = () => {
  const [activeTab, setActiveTab] = useState("hotel");
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
              <th className="text-start p-3 font-semibold rounded-tl-[18px]">
                User Name
              </th>
              <th className="text-center p-3 font-semibold">
                No.of peaple
              </th>
              <th className="text-center p-3 font-semibold">
                Hotel
              </th>
              <th className="text-center p-3 font-semibold">
                Date for reservation
              </th>
              <th className="text-center p-3 font-semibold">
                Start Date
              </th>
              <th className="text-center p-3 font-semibold">
                End Date
              </th>
              <th className="text-center p-3 font-semibold">
                Payment
              </th>
              <th className="text-center p-3 font-semibold">
                Room Type
              </th>
              <th className="text-center p-2 font-semibold rounded-tr-[18px]"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center text-sm text-gray-600 hover:bg-gray-50">
              <td className="p-3 text-start border-t border-gray-300 font-medium">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                GettyImages-997991030
              </td>
              <td className="p-3 text-center border-t border-gray-300">
                12-12-2025
              </td>
              <td className="p-3 text-center border-t border-gray-300">
                12-12-2025
              </td>
              <td className="p-3 text-center border-t border-gray-300">
                12-12-2025
              </td>
              <td className="p-3 text-center border-t border-gray-300">
                12-12-2025
              </td>
              <td className="p-3 text-center border-t border-gray-300">
                12-12-2025
              </td>
              <td className="p-3 text-center border-t border-gray-300">
                12-12-2025
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

  const CarsSection = () => (
   <div>
      <div className="overflow-hidden rounded-t-[18px] border border-gray-300">
        <table dir="ltr" className="min-w-full text-start border-collapse">
          <thead>
            <tr className="text-center text-[14px] text-gray-700">
              <th className="text-start p-3 font-semibold rounded-tl-[18px]">
                User Name
              </th>
              <th className=" text-center p-3 font-semibold">
                From 
              </th>
               <th className=" text-center p-3 font-semibold">
                To
              </th>
               <th className=" text-center p-3 font-semibold">
                Date
              </th>
              <th className=" text-center p-3 font-semibold">
                Time
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
                description about title
              </td>
              
              <td className="p-3 text-center border-t border-gray-300">
                03:00 pm
              </td>
              <td className="p-1 w-[30%] text-start border-t border-gray-300 text-gray-400">
                <div className="flex items-center justify-end gap-2">
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
      case "hotel":
        return <HeroSection />;
      case "Cars":
        return <CarsSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-end py-2">
        <h4 className="text-[#6B7280] text-[18px]">Manage Requests</h4>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center justify-end gap-8 py-2">
        {/* Cars */}
        <button
          onClick={() => setActiveTab("Cars")}
          className={`text-[16px] ${
            activeTab === "Cars"
              ? "text-[#134049] font-bold border-b-2 border-[#134049]"
              : "text-[#6B7280]"
          }`}
        >
          Cars
        </button>
        {/* Hero */}
         <button
          onClick={() => setActiveTab("hotel")}
          className={`text-[16px] ${
            activeTab === "hotel"
              ? "text-[#134049] font-bold border-b-2 border-[#134049]"
              : "text-[#6B7280]"
          }`}
        >
          Hotel
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

export default Requests;
