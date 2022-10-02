import React from "react";
import DateTimeDisplay from "../dateTimeDisplay";
import { useCountdown } from "../hook/useCountDown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <div className="show-counter">
      {/* <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay
          value={days ? days : "00"}
          type={"Days"}
          isDanger={days <= 3}
        />
        <p>:</p>
        <DateTimeDisplay
          value={hours ? hours : "00"}
          type={"Hours"}
          isDanger={false}
        />
        <p>:</p>
        <DateTimeDisplay
          value={minutes ? minutes : "00"}
          type={"Mins"}
          isDanger={false}
        />
        <p>:</p>
        <DateTimeDisplay
          value={seconds ? seconds : "00"}
          type={"Seconds"}
          isDanger={false}
        />
      </a> */}
    </div>
  );
};

const CountdownTimer = ({ targetDate }: any) => {
  //   const [days, hours, minutes, seconds] = useCountdown(targetDate);

  //   if (days + hours + minutes + seconds <= 0) {
  //     return <ExpiredNotice />;
  //   } else {
  return (
    <ShowCounter
    //   days={days}
    //   hours={hours}
    //   minutes={minutes}
    //   seconds={seconds}
    />
  );
};
// };

export default CountdownTimer;
