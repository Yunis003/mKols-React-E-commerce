import React from 'react'
import './marketing.css'
import jbl from './jbr.svg'
import { useEffect, useState } from 'react';
export default function Marketing() {
  const [countdownTime, setCountdownTime] = useState({
    remainingDays: '00',
    remainingHours: '00',
    remainingMinutes: '00',
    remainingSeconds: '00',
});

useEffect(() => {
    const targetDate = new Date("Dec 30, 2024 19:23:00").getTime();
    const timerInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const timeGap = targetDate - currentTime;

        if (timeGap < 0) {
            clearInterval(timerInterval);
            setCountdownTime({
                remainingDays: '00',
                remainingHours: '00',
                remainingMinutes: '00',
                remainingSeconds: '00',
            });
        } else {
            const remainingDays = Math.floor(timeGap / (1000 * 60 * 60 * 24));
            const remainingHours = Math.floor((timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const remainingMinutes = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60));
            const remainingSeconds = Math.floor((timeGap % (1000 * 60)) / 1000);

            setCountdownTime({
                remainingDays: remainingDays < 10 ? '0' + remainingDays : remainingDays.toString(),
                remainingHours: remainingHours < 10 ? '0' + remainingHours : remainingHours.toString(),
                remainingMinutes: remainingMinutes < 10 ? '0' + remainingMinutes : remainingMinutes.toString(),
                remainingSeconds: remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds.toString(),
            });
        }
    }, 1000);

    return () => clearInterval(timerInterval);
}, []);


  return (
    <div className='marketing'>
      <div className="leftSection">
        <p className='categoris'>Categories</p>
        <div className="innerTime">
          <h1>Enhance Your Music Experience</h1>
          <div className="timer2">
              <p>{countdownTime.remainingDays} <span>Days</span></p>
              <p>{countdownTime.remainingHours} <span>Hours</span></p>
              <p>{countdownTime.remainingMinutes} <span>Minutes</span></p>
              <p>{countdownTime.remainingSeconds} <span>Seconds</span></p>
          </div>
        </div>
        <p className='offer'>Claim Your Offer!</p>
      </div>
      <div className="rightSection">
          <img src={jbl} alt="jbr-img" className='jbl' />
      </div>
    </div>
  )
}
