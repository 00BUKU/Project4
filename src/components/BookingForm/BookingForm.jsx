import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {

    const [formData, setFormData] = useState({
        guests: 0,
        dateFrom: '',
        dateTo: '',
        totalPrice: 0
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('/api/bookings', formData)
        .then(res => {
            console.log(res.data);

            setFormData({
                guests: 0,
                dateFrom: '',
                dateTo: '',
                totalPrice: 0
            });
        })
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="guests">Guests:</label>
          <input type="text" id="guests" name="guests" value={formData.guests} onChange={handleChange} />
    
          <label htmlFor="dateFrom">Date From:</label>
          <input type="date" id="dateFrom" name="dateFrom" value={formData.dateFrom} onChange={handleChange} />
    
          <label htmlFor="dateTo">Date To:</label>
          <input type="date" id="dateTo" name="dateTo" value={formData.dateTo} onChange={handleChange} />
    
          <label htmlFor="totalPrice">Total Price:</label>
          <input type="text" id="totalPrice" name="totalPrice" value={formData.totalPrice} onChange={handleChange} />
    
          <button type="submit">Book Pod</button>
        </form>
      );
    };
    
    export default BookingForm;
