import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";

import "./index.css";
import { Contact } from "./components/sections/Contact";
import ChatWidget from "./components/chatwidget";
import Portfolio from "./components/sections/Protfolio";
import GoToTopButton from "./components/GotoTop";
import TestimonialSwipe from "./components/sections/Testimonials";
import HomePage from "./components/pages/homePage";
import PricingPage from "./components/pages/pricingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./components/pages/contactUS";
import BookingPage from "./components/pages/bookingPage";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-white text-black`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <ChatWidget />
        <GoToTopButton />
      </div>
    </>
  );
}

export default App;
