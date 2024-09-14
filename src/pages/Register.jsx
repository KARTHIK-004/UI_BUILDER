import { SignUp } from "@clerk/clerk-react";
import React from "react";

function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SignUp />
    </div>
  );
}

export default Register;
