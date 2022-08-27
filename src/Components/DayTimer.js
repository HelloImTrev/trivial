import React, { useEffect, useState } from "react";

export const DayTimer = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    setTimeLeft(formatTimer());
  }, []);

  const formatTimer = () => {
    const day = new Date();
    let hours = 23 - day.getHours();
    let mins = 59 - day.getMinutes();
    let secs = 59 - day.getSeconds();
    //hours === 0 && mins === 0 && secs === 0 ||
    // if( diff >= 1) {
    //   window.location.reload();
    // }

    if ((hours + "").length === 1) {
      hours = "0" + hours;
    }
    
    if ((mins + "").length === 1) {
      mins = "0" + mins;
    }

    if ((secs + "").length === 1) {
      secs = "0" + secs;
    }

    return `${hours}:${mins}:${secs}`;
  };

  setInterval(() => {
    setTimeLeft(formatTimer());
  }, 1000);

  return <p>{timeLeft}</p>;
};
