import { useEffect, useState } from "react";
import { CiCirclePlus, CiEdit } from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu";
import { MdDeleteOutline, MdOutlineWifiTethering } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { BsDot } from "react-icons/bs";

const Users = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [partition, setPartition] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.example.com/partition?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setPartition(data.partition);
        setTotalPages(data.totalPages);
      });
  }, [currentPage]);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleLink = (user) => {
    setSelectedUser(user);
    setShowLinkModal(true);
  };

  const handleDelete = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-[#134049] rounded-lg text-white">
            <CiCirclePlus className="text-[18px]" />
            Add
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50">
            <LuSettings2 className="text-gray-700 text-[18px]" />
            <span className="text-gray-700 font-medium">Filtration</span>
          </button>
        </div>
        <h4 className="text-[#6B7280] text-[18px]">Manage Properties</h4>
      </div>

      <div className="overflow-hidden rounded-t-[18px] border border-gray-300">
        <table className="min-w-full text-start border-collapse">
          <thead>
            <tr className="text-center text-[14px] text-gray-700">
              <th className="text-start p-3 font-semibold rounded-tl-[18px]">User Name</th>
              <th className="p-3 font-semibold">Email</th>
              <th className="p-3 font-semibold">Phone Number</th>
              <th className="p-3 font-semibold">Status</th>
              <th className="p-3 font-semibold">Last Checkin</th>
              <th className="p-3 font-semibold">Last Checkout</th>
              <th className="p-2 font-semibold rounded-tr-[18px]"></th>
            </tr>
          </thead>
          <tbody>
            {partition.map((user) => (
              <tr key={user.id} className="text-center text-sm text-gray-600 hover:bg-gray-50">
                <td className="p-3 text-start border-t border-gray-300 font-medium">{user.name}</td>
                <td className="p-3 border-t border-gray-300">{user.email}</td>
                <td className="p-3 border-t border-gray-300">{user.phone}</td>
                <td className="p-3 border-t border-gray-300">
                  {user.status === "active" ? (
                    <span className="text-[#409261] bg-[#E9FFEF] py-1 px-2 rounded-full flex items-center justify-center gap-1 w-fit mx-auto">
                      <BsDot className="text-2xl text-[#409261]" /> Active
                    </span>
                  ) : (
                    <span className="text-[#E32828] bg-[#FFE3E3] py-1 px-2 rounded-full flex items-center justify-center gap-1 w-fit mx-auto">
                      <BsDot className="text-2xl text-[#E32828]" /> Inactive
                    </span>
                  )}
                </td>
                <td className="p-3 border-t border-gray-300">{user.lastCheckin}</td>
                <td className="p-3 border-t border-gray-300">{user.lastCheckout}</td>
                <td className="p-1 border-t border-gray-300">
                  <div className="flex items-center justify-center gap-2 text-gray-500">
                    <CiEdit className="text-[19px] cursor-pointer" onClick={() => handleEdit(user)} />
                    <MdOutlineWifiTethering className="text-[19px] cursor-pointer" onClick={() => handleLink(user)} />
                    <MdDeleteOutline className="text-[19px] cursor-pointer" onClick={() => handleDelete(user)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {showEditModal && selectedUser && (
        <div onClick={() => setShowEditModal(false)} className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 rounded-lg shadow-md w-[40%] relative">
            <IoClose onClick={() => setShowEditModal(false)} className="absolute top-2 right-2 text-xl cursor-pointer text-[#014346]" />
            <p className="text-lg text-[#014346] font-semibold mb-2">Edit {selectedUser.name}</p>
          </div>
        </div>
      )}

      {/* Link Modal */}
      {showLinkModal && selectedUser && (
        <div onClick={() => setShowLinkModal(false)} className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 rounded-lg shadow-md min-w-[300px]">
            <h2 className="text-lg font-semibold mb-2">Room Details for {selectedUser.name}</h2>
            <p>Details content...</p>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && selectedUser && (
        <div onClick={() => setShowDeleteModal(false)} className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 rounded-lg shadow-md min-w-[300px]">
            <div className="flex items-center gap-2 mb-2">
              <p className="text-lg font-semibold text-red-600">Delete {selectedUser.name}?</p>
              <img src="/images/delete.jpg" alt="delete" className="w-6" />
            </div>
            <p>Are you sure you want to delete this user?</p>
            <div className="flex justify-between mt-6">
              <button className="px-4 py-1 bg-red-600 text-white rounded-md">Delete</button>
              <button className="px-4 py-1 bg-gray-300 text-black rounded-md" onClick={() => setShowDeleteModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <div className="flex gap-2 text-sm text-gray-600">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg ${
                page === currentPage ? "border border-[#1e3a3a] text-[#1e3a3a] font-medium" : ""
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

export default Users;
