import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { actSetTimeOut } from '../../redux/actions';

const Timer = () => {
  const OneSecond = 1000;
  const timerSeconds = 30;

  const [seconds, setSeconds] = useState(timerSeconds);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!seconds) {
      dispatch(actSetTimeOut(true));
      return;
    }
    const intervalId = setInterval(() => {
      setSeconds(seconds - 1);
    }, OneSecond);

    return () => clearInterval(intervalId);
  }, [seconds, dispatch]);

  return (
    <div id="timer">
      <span>{ seconds }</span>
    </div>
  );
};

export default Timer;
