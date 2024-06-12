import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";

import BookAppointment from "../Components/BookAppointment";
import Login from "../Components/Login";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      <div className="first-section">
      <Navbar />
      <Hero />
      </div>
      <Info />

      <BookAppointment />
      <Login />
      <Footer />
    </div>
  );
}

export default Home;
