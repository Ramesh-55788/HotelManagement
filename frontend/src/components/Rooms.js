import React from "react";

const Rooms = () => {
  return (
    <section id="rooms" className="room-section">
      <h2>Our Rooms</h2>
      <div className="room-cards">
        {[
          {
            id: 1,
            name: "Luxury Double Room",
            price: "₹4000",
            img: "/images/room2.jpg",
            description: "Room with a double bed, AC, and breakfast. Perfect for couples."
          },
          {
            id: 2,
            name: "Deluxe Double Room",
            price: "₹3000",
            img: "/images/room3.jpg",
            description: "Comfortable room with a double bed, free breakfast."
          },
          {
            id: 3,
            name: "Luxury Single Room",
            price: "₹2500",
            img: "/images/room5.jpg",
            description: "Ideal for solo travelers, AC room with breakfast."
          },
          {
            id: 4,
            name: "Deluxe Single Room",
            price: "₹2000",
            img: "/images/room4.jpg",
            description: "A cozy AC room with modern comforts and free breakfast."
          }
        ].map((room) => (
          <div className="room-card" key={room.id}>
            <img src={room.img} alt={room.name} className="room-image" />
            <h3>{room.name}</h3>
            <p>{room.description}</p> {/* Adding the description here */}
            <p className="price">{room.price} / night</p>
            <a href="#booking" className="btn-secondary">Book Now</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
