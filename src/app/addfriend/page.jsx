"use client";
import React, { useState } from "react";
import { Search, UserPlus, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AddFriendPage() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();
  const [user,setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  const totalPages = Math.ceil(searchResults.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const currentResults = searchResults.slice(startIndex, startIndex + resultsPerPage);
  useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
    }, []);
  
  const senderId = user?.user_id;
  console.log(senderId);

  
  const handleSearch = async () => {
  try {
    const response = await fetch("/api/getUsers");
    const data = await response.json();
    console.log(data);
    const filtered = data.filter((u) =>
      u.displayName &&
      u.displayName.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(filtered)

   
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
};

useEffect(() => {
  handleSearch();
  
}, []);



const sendFriendRequest = async (receiverId,senderId) => {
  try {
    const res = await fetch("/api/friend-request/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderId: senderId,  
        
        receiverId,
      }),
    });

    const result = await res.json();

    if (res.ok) {
      alert("Friend request sent!");
    } else {
      alert(result.message || "Something went wrong.");
    }
  } catch (err) {
    console.error("Error sending friend request:", err);
    alert("Failed to send request.");
  }
};



  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 py-16 px-6 md:px-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-10 mt-20 py-10">Add a Friend</h2>

      <div className="max-w-2xl mx-auto bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
        <label className="block text-sm font-medium text-purple-300 mb-2">
          Search by Name or Username
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="e.g. alice, bob123"
            className="w-full bg-black border border-gray-700 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleSearch}
            className="bg-purple-600 hover:bg-purple-700 p-3 rounded-md"
          >
            <Search className="text-white w-5 h-5" />
          </button>
        </div>

        {searchResults.length > 0 && (
        <div className="mt-6 space-y-4">
          {currentResults.map((user) => (
            <div
              key={user.user_id}
              className="flex justify-between items-center bg-gray-800 px-4 py-3 rounded-md"
            >
              <div>
                <p className="font-semibold text-white">{user.displayName}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => sendFriendRequest(user.user_id, senderId)}
                  className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded-md text-sm"
                >
                  <UserPlus size={16} />
                  Add
                </button>
              </div>
            </div>
          ))}
           {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md text-white font-medium ${
                  currentPage === 1
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                Previous
              </button>
              <span className="text-white">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md text-white font-medium ${
                  currentPage === totalPages
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
      </div>
    </div>
  );
}
