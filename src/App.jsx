import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import BookingPage from "./pages/Booking/BookingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from './pages/SignUpPage/SignUpPage';
import userService from "./utils/userService";
import PodsPage from "./pages/PodsPage/PodsPage";
import PodDetailPage from "./pages/PodsPage/PodsDetail";


function App() {

  const [user, setUser] = useState(null);

  function handleSignUpOrLogin(){
    setUser(userService.getUser())
  }

  return (
    <Routes>
            <Route path="/pod/:id" element={<PodDetailPage />} />

      <Route path="/pods" element={<PodsPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/signup" element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
    </Routes>
  );
}

export default App;