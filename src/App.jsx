import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Component from "./pages/Component";
import { Login } from "@mui/icons-material";
import { Toaster } from "react-hot-toast";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={<Register redirectUrl="/dashboard" />}
          />
          <Route path="/login" element={<Login redirectUrl="/dashboard" />} />

          {/* Protected Route - Requires Sign In */}
          <Route
            path="/dashboard"
            element={
              <>
                <SignedIn>
                  <Dashboard />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route path="/component" element={<Component />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
