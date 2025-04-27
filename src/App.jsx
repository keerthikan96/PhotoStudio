import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";

import "./index.css";
import ChatWidget from "./components/chatwidget";
import GoToTopButton from "./components/GotoTop";
import HomePage from "./components/pages/homePage";
import PricingPage from "./components/pages/pricingPage";
import { Routes, Route, useLocation } from "react-router-dom";
import ContactUs from "./components/pages/contactUS";
import BookingPage from "./components/pages/bookingPage";
import PortfolioPage from "./components/pages/portfolioPage";
import FaqPage from "./components/pages/faqPage";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/transitions/PageTransition";
import WeddingVows from "./components/pages/WeddingVows";

// Create a wrapper component to handle AnimatePresence since it needs useLocation
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          } 
        />
        <Route 
          path="/pricing" 
          element={
            <PageTransition>
              <PricingPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/contactus" 
          element={
            <PageTransition>
              <ContactUs />
            </PageTransition>
          } 
        />
        <Route 
          path="/booking" 
          element={
            <PageTransition>
              <BookingPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/portfolio" 
          element={
            <PageTransition>
              <PortfolioPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/faq" 
          element={
            <PageTransition>
              <FaqPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/portfolio/wedding-vows" 
          element={
            <PageTransition>
              <WeddingVows />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-[#f0f2f4] text-black overflow-x-hidden flex flex-col`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main className="pt-14 sm:pt-16 md:pt-20 lg:pt-24 flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
        <ChatWidget />
        <GoToTopButton />
      </div>
    </>
  );
}

export default App;
