import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingForm = ({ booking, id }) => {

    const [formData, setFormData] = useState({
        guests: booking ? booking.guests : 0,
        dateFrom: booking ? booking.dateFrom : '',
        dateTo: booking ? booking.dateTo : '',
        pod: id
    });
    console.log(id)

    const [totalPrice, setTotalPrice] = useState(booking ? booking.totalPrice : 0);
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

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
        setIsEditing(false);
    
        fetch("/api/bookings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            guests: formData.guests,
            dateFrom: formData.dateFrom,
            dateTo: formData.dateTo,
            totalPrice: totalPrice
          })
        })
          .then(response => response.json())
          .then(data => {
            console.log("Success:", data);
            setBookingSuccess(true);
          })
          .catch(error => {
            console.error("Error:", error);
          });
      };
    

    return (
        <>
            <form onSubmit={handleSubmit}>
                {!bookingSuccess && (
                  <>
                    <label htmlFor="guests">Guests:</label>
                    <input type="text" id="guests" name="guests" value={formData.guests} onChange={handleChange} />
          
                    <label htmlFor="dateFrom">Date From:</label>
                    <input type="date" id="dateFrom" name="dateFrom" value={formData.dateFrom} onChange={handleChange} />
          
                    <label htmlFor="dateTo">Date To:</label>
                    <input type="date" id="dateTo" name="dateTo" value={formData.dateTo} onChange={handleChange} />
          
                    <p>Total Price: ${totalPrice.toFixed(2)}</p>
                  </>
                )}

                {!isEditing && !bookingSuccess && (
                  <>
                    <button type="submit">{booking ? 'Save' : 'Book Pod'}</button>
                    {booking && <button onClick={handleDelete}>Cancel</button>}
                    {booking && <button onClick={handleEdit}>Edit</button>}
                  </>
                )}
            </form>
            {bookingSuccess && <p>Your Pod has been booked. Please see guest services representative when you arrive.</p>}
        </>
    );
};

export default BookingForm;