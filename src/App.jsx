import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { Login } from "@mui/icons-material";

function App() {
  return (
    <>
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
