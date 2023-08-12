import { useEffect } from "react";

const Time = () => {
  useEffect(() => {
    // if (typeof window === "undefined") return;
    // let interval: NodeJS.Timer;

    // function displayTime() {
    //   let dateTime = new Date();
    //   let date = dateTime.getDate();
    //   let hrs = dateTime.getHours();
    //   let mins = dateTime.getMinutes();
    //   let sec = dateTime.getSeconds();

    //   document.getElementById("date")!.innerHTML = padzero(date);
    //   document.getElementById("hrs")!.innerHTML = padzero(hrs);
    //   document.getElementById("mins")!.innerHTML = padzero(mins);
    //   document.getElementById("sec")!.innerHTML = padzero(sec);
    // }

    // function padzero(num: number) {
    //   return num < 10 ? "0" + num : num.toString();
    // }

    // setInterval(displayTime, 1_000);
    // return () => {
    //   clearInterval(interval);
    // };
    const seconds = document.querySelector<HTMLDivElement>(".seconds .number"),
      minutes = document.querySelector<HTMLDivElement>(".minutes .number"),
      hours = document.querySelector<HTMLDivElement>(".hours .number"),
      days = document.querySelector<HTMLDivElement>(".days .number");

    let secValue: number = 11,
      minValue: number = 2,
      hourValue: number = 2,
      dayValue: number = 9;

    const timeFunction = setInterval(() => {
      secValue--;

      if (secValue === 0) {
        minValue--;
        secValue = 60;
      }
      if (minValue === 0) {
        hourValue--;
        minValue = 60;
      }
      if (hourValue === 0) {
        dayValue--;
        hourValue = 24;
      }

      if (dayValue === 0) {
        clearInterval(timeFunction);
      }
      seconds!.textContent =
        secValue < 10 ? `0${secValue}` : secValue.toString();
      minutes!.textContent =
        minValue < 10 ? `0${minValue}` : minValue.toString();
      hours!.textContent =
        hourValue < 10 ? `0${hourValue}` : hourValue.toString();
      days!.textContent = dayValue < 10 ? `0${dayValue}` : dayValue.toString();
    }, 1000); // 1000ms = 1s
  }, []);

  return (
    <>
      <div className="flex items-center gap-9">
        {/* <div className="flex flex-col gap-1">
          <span className="font-sans font-bold text-3xl text-black" id="date">
            00
          </span>
        </div>
        <span className="font-extrabold text-red-600">:</span>
        <div className="flex flex-col">
          <span className="font-sans font-bold text-3xl text-black" id="hrs">
            00
          </span>
        </div>
        <span className="font-extrabold text-red-600">:</span>
        <div className="flex flex-col gap-1">
          <span className="font-sans font-bold text-3xl text-black" id="mins">
            00
          </span>
        </div>
        <span className="font-extrabold text-red-600">:</span>
        <div className="flex flex-col gap-1">
          <span className="font-sans font-bold text-3xl text-black" id="sec">
            00
          </span>
        </div> */}
        <div className="time days">
          <span className="number font-sans font-bold text-3xl text-black"></span>
          {/* <span className="text">days</span> */}
        </div>
        <div className="time hours">
          <span className="number font-sans font-bold text-3xl text-black"></span>
          {/* <span className="text">hours</span> */}
        </div>
        <div className="time minutes">
          <span className="number font-sans font-bold text-3xl text-black"></span>
          {/* <span className="text">minutes</span> */}
        </div>
        <div className="time seconds">
          <span className="number font-sans font-bold text-3xl text-black"></span>
          {/* <span className="text">seconds</span> */}
        </div>
      </div>
    </>
  );
};
export default Time;
