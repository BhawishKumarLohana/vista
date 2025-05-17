"use client";
import { useState, useEffect } from "react";
export default function ProfilePage() {
  const friends = ["Alice", "Bhawish", "Devansh"];
  const [isEditing, setIsEditing] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [username, setUsername] = useState("Bhawish");
  const [description, setDescription] = useState("");

  const [tempUsername, setTempUsername] = useState("");
  const [tempDescription, setTempDescription] = useState("");

  //freindrequestSHow
  const [searchResults,setSearchResults] = useState("");
  
 

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!storedToken || !storedUser) {
      window.location.href = "/login";
      return;
    }
    

    const user = JSON.parse(storedUser);
    setUsername(user.displayName);
    setTempUsername(user);
    setDescription("Web3 enthusiast and builder");
    setTempDescription("Web3 enthusiast and builder");

    fetch("/api/portfolio", {
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
    })
      .then((res) => res.json())
      .finally(() => setCheckingAuth(false));


      // friend requst show
      fetch("/api/getFriendReq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: user.user_id })      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Friend Requests:", data);
          setSearchResults(data);
             })
        .catch((err) => {
          console.error("Failed to fetch friend requests:", err);
        });
  }, []);






  if (checkingAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
        <p className="text-white text-lg">Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white px-6 py-10 flex justify-center">
      <div className="w-full mt-20 max-w-5xl bg-gradient-to-br from-gray-800 via-black to-gray-900 border border-gray-700 rounded-2xl shadow-lg p-8 backdrop-blur-md">

        {/* Profile Header */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-start">
          <img
            src="/avtar.jpg"
            alt="Profile Avatar"
            className="w-32 h-32 rounded-full border-4 border-purple-500 object-cover shadow-lg"
          />

          <div className="text-center md:text-left md:ml-8 space-y-2">
            <h1 className="text-3xl font-bold text-purple-400">{username}</h1>
            <p className="text-gray-300">{description}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-purple-700 hover:bg-purple-600 transition px-4 py-2 rounded-md text-white font-semibold"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Edit Form */}
        {isEditing && (
          <div className="mt-6 bg-gray-800/50 border border-purple-600 rounded-lg p-6 backdrop-blur-md">
            <h3 className="text-lg font-semibold text-purple-300 mb-4">Edit Profile</h3>

            <div className="space-y-4">
              <input
                type="text"
                value={tempUsername}
                onChange={(e) => setTempUsername(e.target.value)}
                className="w-full p-2 rounded bg-black text-white border border-gray-600 focus:ring-2 focus:ring-purple-500"
                placeholder="Username"
              />

              <textarea
                value={tempDescription}
                onChange={(e) => setTempDescription(e.target.value)}
                rows={3}
                className="w-full p-2 rounded bg-black text-white border border-gray-600 focus:ring-2 focus:ring-purple-500"
                placeholder="Self description"
              />

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setUsername(tempUsername);
                    setDescription(tempDescription);
                    setIsEditing(false);
                    // Optionally send to API here
                  }}
                  className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded text-white font-medium"
                >
                  Save
                </button>

                <button
                  onClick={() => {
                    setTempUsername(username);
                    setTempDescription(description);
                    setIsEditing(false);
                  }}
                  className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-white font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Divider */}
        <hr className="my-10 border-gray-700" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Friends Section */}
          <div className="bg-black/30 border border-purple-700 p-6 rounded-xl backdrop-blur-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-purple-300">Your Friends</h2>
              <button onClick={() => window.location.href = "/addfriend"} className="px-4 py-1 bg-green-600 hover:bg-green-500 rounded-md text-white font-medium text-sm">
                + Add Friend
              </button>
            </div>
            <ul className="space-y-3">
              {friends.map((friend, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-800/40 p-3 rounded-md border border-gray-700"
                >
                  <span className="text-white">{friend}</span>
                  <button className="text-sm px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Friend Request Section */}
          <div className="mt-10 bg-black/30 border border-purple-700 p-6 rounded-xl backdrop-blur-lg">
              <h2 className="text-xl font-bold text-purple-300 mb-4">Friend Requests</h2>

              {searchResults.length === 0 ? (
                <p className="text-gray-400">No pending requests.</p>
              ) : (
                <ul className="space-y-4">
                  {searchResults.map((req) => (
                    <li
                      key={req.request_id}
                      className="flex items-center justify-between bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                    >
                      <div>
                        <p className="text-white font-semibold">{req.sender.displayName || "Unnamed"}</p>
                        <p className="text-gray-400 text-sm">@{req.sender.username}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          className="px-4 py-1.5 text-sm bg-green-600 hover:bg-green-500 text-white rounded-md"
                          onClick={() => acceptFriendRequest(req.request_id)}
                        >
                          Accept
                        </button>
                        <button
                          className="px-4 py-1.5 text-sm bg-red-600 hover:bg-red-500 text-white rounded-md"
                          onClick={() => rejectFriendRequest(req.request_id)}
                        >
                          Reject
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            

          {/* Activity Log */}
          <div className="bg-black/30 border border-purple-700 p-6 rounded-xl backdrop-blur-lg">
            <h2 className="text-xl font-bold text-purple-300 mb-4">Activity Log</h2>
            <ul className="space-y-3">
              <li className="bg-gray-800/40 p-3 rounded-md border border-gray-700">
                📈 Created BTC alert at $40,000
              </li>
              <li className="bg-gray-800/40 p-3 rounded-md border border-gray-700">
                🔔 Updated ETH threshold
              </li>
              <li className="bg-gray-800/40 p-3 rounded-md border border-gray-700">
                🧾 Viewed market overview
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

