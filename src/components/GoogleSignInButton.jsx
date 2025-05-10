"use client";

import { loginWithGoogle } from "@/firebase";
import { createUserIfNotExists } from "@/lib/userService";

export default function GoogleSignInButton() {
  const handleSignIn = async () => {
    try {
      const googleUser = await loginWithGoogle();
      const savedUser = await createUserIfNotExists(googleUser);
      console.log("Signed in and stored user:", savedUser);
      alert(`Welcome, ${savedUser.displayName || savedUser.email}`);
    } catch (error) {
      console.error("Login error:", error);
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
  marginTop: "20px",
};

const buttonStyle = {
  backgroundColor: "#ffffff",
  color: "#000000",
  fontWeight: "bold",
  border: "none",
  borderRadius: "6px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  padding: "10px 16px",
  fontSize: "16px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
};
