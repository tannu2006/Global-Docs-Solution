import React from "react";
import Image from "next/image";

const PreTokenSale = () => {
  const [days, setDays] = React.useState("");
  const [hours, setHours] = React.useState("");
  const [minutes, setMinutes] = React.useState("");
  const [seconds, setSeconds] = React.useState("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      commingSoonTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const commingSoonTime = () => {
    let endTime = new Date("August 23, 2023 17:00:00 PDT");
    let endTimeParse = Date.parse(endTime) / 1000;
    let now = new Date();
    let nowParse = Date.parse(now) / 1000;
    let timeLeft = endTimeParse - nowParse;
    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - days * 86400) / 3600);
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    let seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };
  return (
    <>
      <div className="pre-token-sale-ends-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="pre-token-sale-ends-content">
                <h3>Pre Token Sale Ends</h3>

                <div
                  id="timer"
                  className="flex-wrap d-flex justify-content-center"
                >
                  <div
                    id="days"
                    className="align-items-center flex-column d-flex justify-content-center"
                  >
                    {days} <span className="days">Days</span>
                  </div>
                  <div
                    id="hours"
                    className="align-items-center flex-column d-flex justify-content-center"
                  >
                    {hours} <span className="hours">Hours</span>
                  </div>
                  <div
                    id="minutes"
                    className="align-items-center flex-column d-flex justify-content-center"
                  >
                    {minutes} <span className="minutes">Minutes</span>
                  </div>
                  <div
                    id="seconds"
                    className="align-items-center flex-column d-flex justify-content-center"
                  >
                    {seconds} <span className="seconds">Seconds</span>
                  </div>
                </div>

                <p>Pre sale total amount 1 ETH = $2,537.37</p>
                <div className="pre-token-sale-ends-with-progress">
                  <ul className="top-list d-flex justify-content-between align-items-center">
                    <li>$5m</li>
                    <li>$50m</li>
                  </ul>
                  <div className="progress-wrapper">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <ul className="bottom-list d-flex justify-content-between align-items-center">
                    <li>Softcap</li>
                    <li>Hardcap</li>
                  </ul>
                </div>

                <ul className="pre-token-sale-ends-btn">
                  <li>
                    <a href="#" className="buy-token-btn">
                      Buy Tokens
                    </a>
                  </li>
                  <li>Minimum Purchase: 10 ICO Token</li>
                </ul>

                <div className="pre-token-sale-ends-shape">
                  <Image
                    src="/images/crypto-startup/pre-token-sale-ends/shape.png"
                    alt="image"
                    width={80}
                    height={118}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="pre-token-sale-ends-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src="/images/crypto-startup/pre-token-sale-ends/pre-token-sale-ends.png"
                  alt="image"
                  width={709}
                  height={560}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreTokenSale;
