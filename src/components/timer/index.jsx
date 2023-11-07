import React, { useState, useEffect } from "react";

const Countdown = () => {
  const endDateTime = "2023-11-01T00:00:00";

  const calculateTimeLeft = () => {
    const now = new Date();
    const endDate = new Date(endDateTime);
    const difference = endDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [countdown, setCountdown] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div >
      
      <div className="flex">
        <div>
        <h2>Days</h2>
        <div className="flex text-[2rem] ">
        {countdown.days}
        <div className="w-[3.125rem]  items-center text-center text-[#E07575]">:</div>
        </div>
       
        </div>
        <div>
        <h2>Hours</h2>
        <div className="flex text-[2rem]">
        {countdown.hours}
        <div className="w-[3.125rem] text-center text-[#E07575]">:</div>
        </div>
        </div>
        <div>
            <h2>Minutes</h2>
            <div className="flex text-[2rem]">
        {countdown.minutes}
        <div className="w-[3.125rem] text-center text-[#E07575]">:</div>
        </div>
        </div>
        <div>
            <h2>seconds</h2>
            <div className="text-[2rem]">{countdown.seconds}</div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Countdown;
