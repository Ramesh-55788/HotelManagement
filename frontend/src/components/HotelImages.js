import React from "react";

const HotelImages = () => {
  return (
    <section className="n-card-container">
      {[
        { id: 1, src: "/images/h1.jpg", alt: "Hotel Image 1" },
        { id: 2, src: "/images/h2.jpg", alt: "Hotel Image 2" }
      ].map((image) => (
        <div className="n-card" key={image.id}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </section>
  );
};

export default HotelImages;
