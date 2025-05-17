"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ProfileById() {
  const { id } = useParams();
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProfile = async () => {
      try {
        const res = await fetch(`/api/friend/${id}`);
        if (!res.ok) throw new Error("Failed to fetch user profile");
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error("Error fetching user profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading profile...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Profile not found.
      </div>
    );
  }

  return (
   <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white px-6 pt-32 pb-10 flex justify-center">

      <div className="w-full max-w-4xl bg-gray-900 border border-purple-700 p-8 rounded-xl">
        <button
          onClick={() => router.push("/profile")}
          className="mb-6 text-sm px-4 py-2 rounded bg-purple-700 hover:bg-purple-600 text-white font-medium"
        >
          ← Back to My Profile
        </button>

        <h1 className="text-3xl font-bold text-purple-400 mb-4">
          {profile.user.displayName || profile.user.email}
        </h1>
        <p className="text-gray-300 mb-8">
          {profile.user.user_info || "No bio provided."}
        </p>

        <h2 className="text-2xl text-purple-300 mb-3">Friends</h2>
        <ul className="mb-6 space-y-2">
          {profile.friends.length === 0 ? (
            <li className="text-gray-500">No friends yet.</li>
          ) : (
            profile.friends.map((friend) => (
              <li
                key={friend.user_id}
                className="border border-gray-600 p-2 rounded-md"
              >
                {friend.displayName || friend.email}
              </li>
            ))
          )}
        </ul>

        <h2 className="text-2xl text-purple-300 mb-3">Activity Log</h2>
        <ul className="space-y-2">
          {profile.activity.length === 0 ? (
            <li className="text-gray-500">No activity yet.</li>
          ) : (
            profile.activity.map((log, i) => (
              <li
                key={i}
                className="bg-gray-800 p-2 rounded-md border border-gray-700"
              >
                🧾 {log.action.toUpperCase()} {log.amount} {log.coin} on{" "}
                {new Date(log.datetime).toLocaleString()}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

