import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import BookingPage from "./pages/Booking/BookingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import SignUpPage from './pages/SignUpPage/SignUpPage';
import userService from "./utils/userService";

function App() {

  const [user, setUser] = useState(null);

  function handleSignUpOrLogin(){
    setUser(userService.getUser())
  }

  return (
    <Routes>
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/signup" element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
    </Routes>
  );
}

export default App;