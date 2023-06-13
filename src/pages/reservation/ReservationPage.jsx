import React from 'react';
import '../reservation/Reservation.css'
import ReservationForm from '../../components/ReservationForm/ReservationForm';
import Abouti from '../../assets/about.jpg'

const ReservationPage = () => {
  return (<div className='ReservationContent'>
    <div className="reservation-image">
    <img src={Abouti} alt="About Us" />
  </div>
    <div className="reservationForm">
      <h1>Table Reservation</h1>
      <ReservationForm />
    </div>
    </div>
  );
};

export default ReservationPage;
