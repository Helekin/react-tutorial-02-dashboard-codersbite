import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./main.css";

import hello from "../../assets/hello.sgv";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello Hellekin</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>
        <div className="main__cards">
          <div className="card">
            <AccountCircleIcon className="text-lightblue" />
            <div className="card-inner">
              <p className="text-primary-p">Number of Suscribers</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>

          <div className="card">
            <AccountCircleIcon className="text-red" />
            <div className="card-inner">
              <p className="text-primary-p">Times of Watching</p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div>

          <div className="card">
            <AccountCircleIcon className="text-yellow" />
            <div className="card-inner">
              <p className="text-primary-p">Number of Videos</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div>

          <div className="card">
            <AccountCircleIcon className="text-green" />
            <div className="card-inner">
              <p className="text-primary-p">Number of Likes</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts-left">
            <div className="charts-left-title">
              <div>
                <h1>Daily reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <AccountCircleIcon />
            </div>
            <h1>Chart or Table</h1>
          </div>
          <div className="charts-right">
            <div className="charts-right-title">
              <h1>Stats Reports</h1>
              <p>Cupertino, California, USA</p>
            </div>
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
