import React from "react";
import BookingHeader from "./components/BookingHeader";
import BookingMain from "./components/BookingMain";
import Footer from "./components/Footer";

function Book() {
  return (
    <div className="App bg-dark">
      <BookingHeader/>
      <BookingMain/>
      <Footer/>
    </div>
  );
}

export default Book;