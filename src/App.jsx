import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookingPage from "./pages/Booking/BookingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import SignUpPage from './pages/SignUpPage/SignUpPage';

function App() {
  return (
    <Routes>
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;