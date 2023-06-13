import React, { useState } from 'react';

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', {
      name,
      email,
      date,
      time,
      guests,
    });
    // Reset form fields
    setName('');
    setEmail('');
    setDate('');
    setTime('');
    setGuests('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReservationForm;
