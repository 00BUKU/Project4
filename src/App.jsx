import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import BookingDetail from "./pages/BookingDetail/BookingDetail";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import userService from "./utils/userService";
import PodsPage from "./pages/PodsPage/PodsPage";
import PodDetailPage from "./pages/PodsPage/PodsDetail";
import UserDashboard from "./pages/userDashboard/userDashboard";
import Nav from "./components/Header/Nav";

function App() {
  const [user, setUser] = useState(null);

  function handleSignUpOrLogin() {
    setUser(userService.getUser());
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/pod/:id" element={<PodDetailPage />} />
        <Route path="/dashboard/:id" element={<UserDashboard />} />
        <Route path="/pods" element={<PodsPage />} />
        <Route path="/bookingdetail/:id" element={<BookingDetail />} />
        <Route
          path="/signup"
          element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
      </Routes>
    </>
  );
}

export default App;
