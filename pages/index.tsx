import React from "react";
import CountdownTimer from "./home";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
export default function App() {
  const dateNow: dayjs.Dayjs = dayjs();
  let dateNowFormat: string | number = dayjs(dateNow).format("DD");
  const [dateTimeAfterDays, setDateTimeAfterDays] = useState<number>();
  const [dayOfMonth, setDayOfMonth] = useState<dayjs.Dayjs>(
    dayjs(
      new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      )
    ).date(15)
  );

  useEffect(() => {
    dateNowFormat > "15" &&
      setDayOfMonth(
        dayjs(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            new Date().getDate()
          )
        ).date(15)
      );
  }, [dateNowFormat]);

  useEffect(() => {
    const nowDate = dayjs(dateNow);
    const lastMonth = dayjs(dayOfMonth);
    let date = lastMonth.diff(nowDate);

    const DAYS_IN_MS = date; //ms

    const NOW_IN_MS = new Date().getTime();

    setDateTimeAfterDays(NOW_IN_MS + DAYS_IN_MS);
  }, [dateNow, dayOfMonth]);

  // console.log("date", date / (24 * 60 * 60 * 1000));

  return (
    <div className=" home-page">
      <div className="title text-center">
        <h1 className="uppercase text-neutral-50">
          {" "}
          <span>Thanh son</span>
        </h1>
      </div>
      <div className="text-center">
        <div className="salary salary_title ">salary welcome in</div>
      </div>
      <CountdownTimer targetDate={dateTimeAfterDays} />
    </div>
  );
}
