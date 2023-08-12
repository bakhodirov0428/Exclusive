import { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    let interval: NodeJS.Timer;

    function displayTime() {
      let dateTime = new Date();
      let day = dateTime.getDate();
      let hrour = dateTime.getHours();
      let min = dateTime.getMinutes();
      let secunt = dateTime.getSeconds();

      document.getElementById("day")!.innerHTML = padzero(day);
      document.getElementById("hour")!.innerHTML = padzero(hrour);
      document.getElementById("min")!.innerHTML = padzero(min);
      document.getElementById("secund")!.innerHTML = padzero(secunt);
    }

    function padzero(num: number) {
      return num < 10 ? "0" + num : num.toString();
    }

    setInterval(displayTime, 1_000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="flex items-center gap-4">
        <div className="flex flex-col w-[62px] h-[62px] justify-center rounded-full items-center bg-white gap-1 ">
          <span className="font-sans font-bold text-base text-black" id="day">
            00
          </span>
          <p className="font-sans font-normal text-xs text-black">Days</p>
        </div>
        <div className="flex flex-col w-[62px] h-[62px] justify-center rounded-full items-center bg-white">
          <span className="font-sans font-bold text-base text-black" id="hour">
            00
          </span>
          <p className="font-sans font-normal text-xs text-black">Hours</p>
        </div>
        <div className="flex flex-col w-[62px] h-[62px] justify-center rounded-full items-center bg-white gap-1">
          <span className="font-sans font-bold text-base text-black" id="min">
            00
          </span>
          <p className="font-sans font-normal text-xs text-black">Minutes</p>
        </div>
        <div className="flex flex-col w-[62px] h-[62px] justify-center rounded-full items-center bg-white gap-1">
          <span
            className="font-sans font-bold text-base text-black"
            id="secund"
          >
            00
          </span>
          <p className="font-sans font-normal text-xs text-black">Seconds</p>
        </div>
      </div>
    </>
  );
};
export default Timer;
