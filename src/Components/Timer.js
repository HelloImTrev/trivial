import React, { useEffect, useRef, useState } from "react";

export const Timer = ({setTimeExpired}) => {
  const [seconds, setSeconds] = useState(15);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((time) => time - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds <= 0) {
      clearInterval(intervalRef.current);
      setTimeExpired(true);
    }
  }, [seconds]);

  return (
    <div className="timer">
      <p>Time left: {seconds}</p>
    </div>
  );
};
