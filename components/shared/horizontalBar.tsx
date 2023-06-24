import { BiBell } from "react-icons/bi";

const HorizontalBar = () => {
  return (
    <div className="flex text-3xl justify-between w-full">
      <span className="font-bold">Dashboard</span>
      <div className="flex justify-center items-center gap-5">
        <input
          type="text"
          className="rounded-[10px] w-full text-sm px-5 h-full"
          placeholder={`Search....`}
        ></input>
        <BiBell />
      </div>
    </div>
  );
};

export default HorizontalBar;
