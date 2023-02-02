import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingForm = ({ onSubmit }) => {

    const [formData, setFormData] = useState({
        guests: 0,
        dateFrom: '',
        dateTo: '',
    });

    const [totalPrice, setTotalPrice] = useState(0);
    const [bookingSuccess, setBookingSuccess] = useState(false);

    useEffect(() => {
        const days = (new Date(formData.dateTo) - new Date(formData.dateFrom)) / (1000 * 60 * 60 * 24);
        setTotalPrice(days * 25);
    }, [formData.dateFrom, formData.dateTo]);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit({ ...formData, totalPrice });

        setBookingSuccess(true);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="guests">Guests:</label>
                <input type="text" id="guests" name="guests" value={formData.guests} onChange={handleChange} />
          
                <label htmlFor="dateFrom">Date From:</label>
                <input type="date" id="dateFrom" name="dateFrom" value={formData.dateFrom} onChange={handleChange} />
          
                <label htmlFor="dateTo">Date To:</label>
                <input type="date" id="dateTo" name="dateTo" value={formData.dateTo} onChange={handleChange} />
          
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
          
                <button type="submit">Book Pod</button>
            </form>
            {bookingSuccess && <p>Your Pod has been booked. Please see guest services representative when you arrive.</p>}
        </>
    );
};

export default BookingForm;