"use client";
import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useState(null);
  const [description, setDescription] = useState("");
  const [tempDescription, setTempDescription] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [friends, setFriends] = useState([]);
  const [activityLog, setActivityLog] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!storedToken || !storedUser) {
      window.location.href = "/login";
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);

    const fetchUserInfo = async () => {
      try {
        const res = await fetch("/api/profile", {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        const data = await res.json();
        if (data.user_info) {
          setDescription(data.user_info);
          setTempDescription(data.user_info);
        }
      } catch (err) {
        console.error("Failed to load profile info:", err);
      } finally {
        setCheckingAuth(false);
      }
    };

    const fetchFriendRequests = async () => {
      try {
        const res = await fetch("/api/friend/request", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_id: parsedUser.user_id }),
        });
        const data = await res.json();
        setSearchResults(data);
      } catch (err) {
        console.error("Failed to fetch friend requests:", err);
      }
    };

    const fetchFriends = async () => {
      try {
        const res = await fetch("/api/friend", {
          method: "GET",
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        const data = await res.json();
        setFriends(data);
      } catch (err) {
        console.error("Failed to fetch friends:", err);
      }
    };

    const fetchActivity = async () => {
      try {
        const res = await fetch("/api/trackrecord", {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        const data = await res.json();
        setActivityLog(data);
      } catch (err) {
        console.error("Failed to fetch activity log:", err);
      }
    };

    fetchUserInfo();
    fetchFriendRequests();
    fetchFriends();
    fetchActivity();
  }, []);

  const acceptFriendRequest = async (request_id) => {
    try {
      const token = localStorage.getItem("token");
      await fetch("/api/friend/action", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ request_id, action: "accept" }),
      });
      setSearchResults(prev => prev.filter(r => r.request_id !== request_id));
    } catch (err) {
      console.error("Accept has failed:", err);
    }
  };

  const rejectFriendRequest = async (request_id) => {
    try {
      const token = localStorage.getItem("token");
      await fetch("/api/friend/action", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ request_id, action: "reject" }),
      });
      setSearchResults(prev => prev.filter(r => r.request_id !== request_id));
    } catch (err) {
      console.error("Reject failed:", err);
    }
  };

  const removeFriend = async (userIdToRemove) => {
    try {
      await fetch("/api/friend/action", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ userIdToRemove }),
      });
      setFriends(prev => prev.filter(f => f.user_id !== userIdToRemove));
    } catch (err) {
      console.error("Remove failed:", err);
    }
  };

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
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-start">
          <img src="/avtar.jpg" alt="Profile Avatar" className="w-32 h-32 rounded-full border-4 border-purple-500 object-cover shadow-lg" />
          <div className="text-center md:text-left md:ml-8 space-y-2">
            <h1 className="text-3xl font-bold text-purple-400">{user?.displayName || "User"}</h1>
            <p className="text-gray-300">{description}</p>
            <button onClick={() => setIsEditing(true)} className="bg-purple-700 hover:bg-purple-600 transition px-4 py-2 rounded-md text-white font-semibold">
              Edit Profile
            </button>
          </div>
        </div>

        {isEditing && (
          <div className="mt-6 bg-gray-800/50 border border-purple-600 rounded-lg p-6 backdrop-blur-md">
            <h3 className="text-lg font-semibold text-purple-300 mb-4">Edit Profile</h3>
            <div className="space-y-4">
              <textarea
                value={tempDescription}
                onChange={(e) => setTempDescription(e.target.value)}
                rows={3}
                className="w-full p-2 rounded bg-black text-white border border-gray-600 focus:ring-2 focus:ring-purple-500"
                placeholder="Self description"
              />
              <div className="flex gap-4">
                <button onClick={async () => {
                  setDescription(tempDescription);
                  setIsEditing(false);
                  const token = localStorage.getItem("token");
                  await fetch("/api/profile", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ user_info: tempDescription }),
                  });
                }} className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded text-white font-medium">
                  Save
                </button>
                <button onClick={() => {
                  setTempDescription(description);
                  setIsEditing(false);
                }} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-white font-medium">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <hr className="my-10 border-gray-700" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/30 border border-purple-700 p-6 rounded-xl backdrop-blur-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-purple-300">Your Friends</h2>
              <button onClick={() => window.location.href = "/addfriend"} className="px-4 py-1 bg-green-600 hover:bg-green-500 rounded-md text-white font-medium text-sm">
                + Add Friend
              </button>
            </div>
            <ul className="space-y-3">
              {friends.map((friend) => (
                <li key={friend.user_id} className="flex justify-between items-center bg-gray-800/40 p-3 rounded-md border border-gray-700">
                  <span className="text-white">{friend.displayName || friend.email}</span>
                  <div className="flex gap-2">
                    <button className="text-sm px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded" onClick={() => window.location.href = `/profile/${friend.user_id}`}>View</button>
                    <button className="text-sm px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded" onClick={() => removeFriend(friend.user_id)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-black/30 border border-purple-700 p-6 rounded-xl backdrop-blur-lg">
            <h2 className="text-xl font-bold text-purple-300 mb-4">Friend Requests</h2>
            {searchResults.length === 0 ? (
              <p className="text-gray-400">No pending requests.</p>
            ) : (
              <ul className="space-y-4">
                {searchResults.map((req) => (
                  <li key={req.request_id} className="flex items-center justify-between bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <div>
                      <p className="text-white font-semibold">{req.sender.displayName || "Unnamed"}</p>
                      <p className="text-gray-400 text-sm">@{req.sender.email}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-1.5 text-sm bg-green-600 hover:bg-green-500 text-white rounded-md" onClick={() => acceptFriendRequest(req.request_id)}>Accept</button>
                      <button className="px-4 py-1.5 text-sm bg-red-600 hover:bg-red-500 text-white rounded-md" onClick={() => rejectFriendRequest(req.request_id)}>Reject</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/**Activity Log*/}

          <div className="bg-black/30 border border-purple-700 p-6 rounded-xl backdrop-blur-lg">
            <h2 className="text-xl font-bold text-purple-300 mb-4">Activity Log</h2>
            <div className="max-h-72 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-gray-800">
              <ul className="space-y-3">
                {activityLog.length === 0 ? (
                  <li className="text-gray-400">No recent activity.</li>
                ) : (
                  activityLog.map((log) => (
                    <li
                      key={log.track_record_id}
                      className="bg-gray-800/40 p-3 rounded-md border border-gray-700"
                    >
                      {log.action.toUpperCase()} {log.amount} of {log.coin.symbol} on{" "}
                      {new Date(log.datetime).toLocaleString()}
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
