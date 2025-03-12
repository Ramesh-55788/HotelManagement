import React, { useState } from "react";
import axios from "axios";
import "./booking.css"; // Import the CSS file

const SuccessModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="modal">
            <div className="modal-content">
                <h3>
                    <span role="img" aria-label="celebration">🎉</span> Booking Confirmed!
                </h3>
                <p>Your room has been successfully booked.</p>
                <button onClick={onClose} className="close-btn">OK</button>
            </div>
        </div>
    );
};

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        room: "luxury_double",
        checkin: "",
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post("http://localhost:5000/api/bookings", formData);
            setIsModalOpen(true);
            setFormData({ name: "", contact: "", room: "luxury_double", checkin: "" });
        } catch (error) {
            alert("Booking Failed!");
        }
        setLoading(false);
    };

    return (
        <div id="booking" className="booking-container">
            <h1>Book Your Room</h1>
            <form onSubmit={handleSubmit} className="booking-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="contact"
                    placeholder="Enter Contact Number"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                />
                <select name="room" value={formData.room} onChange={handleChange}>
                    <option value="luxury_double">Luxury Double Room</option>
                    <option value="deluxe_single">Deluxe Single Room</option>
                    <option value="luxury_single">Luxury Single Room</option>
                    <option value="deluxe_double">Deluxe Double Room</option>
                </select>
                <input
                    type="date"
                    name="checkin"
                    value={formData.checkin}
                    onChange={handleChange}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Booking..." : "Book Now"}
                </button>
            </form>

            <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default BookingForm;
