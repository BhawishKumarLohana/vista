"use client";

import { loginWithGoogle } from "@/firebase";

export default function GoogleSignInButton() {
  const handleSignIn = async () => {
    try {
      const user = await loginWithGoogle();
      console.log("Signed in user:", user);
      alert(`Welcome, ${user.displayName}`);
    } catch (error) {
      alert("Google Sign-In failed");
    }
  };

  return (
    <div style={containerStyle}>
      <button onClick={handleSignIn} style={buttonStyle}>
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google"
          style={{ height: "20px", marginRight: "10px" }}
        />
        Sign in with Google
      </button>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "30px",
};

const buttonStyle = {
  backgroundColor: "#ffffff",
  color: "#000000",
  fontWeight: "bold",
  border: "none",
  padding: "12px 20px",
  borderRadius: "6px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  transition: "background-color 0.2s ease-in-out",
};

