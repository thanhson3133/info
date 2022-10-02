import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className=" home-page">
      <div className="title text-center">
        <h1 className="uppercase text-neutral-50">
          {" "}
          <span>Thanh son</span>
        </h1>
      </div>
      <div className="text-center">
        <div className="salary salary_title uppercase">salary welcome in</div>
      </div>
      {/* <CountdownTimer targetDate={dateTimeAfterDays} /> */}
    </div>
  );
};

export default Home;
