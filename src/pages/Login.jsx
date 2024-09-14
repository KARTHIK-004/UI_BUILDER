import React from "react";
import { SignIn } from "@clerk/clerk-react";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <SignIn />
    </div>
  );
}

export default Login;
