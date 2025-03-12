import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import BookingForm from "./components/BookingForm";
import HotelImages from "./components/HotelImages";
import './styles.css';


const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Rooms />
      <HotelImages />
      <BookingForm />
    </>
  );
};

export default App;
