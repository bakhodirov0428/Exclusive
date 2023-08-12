import { useEffect } from "react";

const Count = () => {
  useEffect(() => {
    let count: number = 0;

    const countUpButton = document.querySelector(
      "#countup"
    ) as HTMLButtonElement;
    const countDownButton = document.querySelector(
      "#countdown"
    ) as HTMLButtonElement;
    const paragraph = document.getElementById("p") as HTMLParagraphElement;

    countUpButton.onclick = function () {
      count++;
      paragraph.innerHTML = count.toString();
    };

    countDownButton.onclick = function () {
      count--;
      paragraph.innerHTML = count.toString();
    };
  }, []);

  return (
    <>
      <div className="flex items-center gap-4">
        <button
          id="countdown"
          className="font-sans font-medium text-xl text-black w-9 hover:bg-red-600 hover:text-white justify-center flex items-center border border-gray-600 rounded"
        >
          -
        </button>
        <p
          id="p"
          className="font-sans font-medium text-xl text-black flex w-9 justify-center items-center border border-gray-600 rounded"
        >
          0
        </p>
        <button
          id="countup"
          className="font-sans font-medium text-xl text-black flex w-9 hover:bg-red-600 hover:text-white justify-center items-center border border-gray-600 rounded"
        >
          +
        </button>
      </div>
    </>
  );
};
export default Count;
