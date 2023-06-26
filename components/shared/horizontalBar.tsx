import { BiBell } from "react-icons/bi";

const HorizontalBar = () => {
  return (
    <div className="flex text-3xl justify-between lg:w-full m-5 lg:m-0">
      <span className="hidden md:block font-bold">Dashboard</span>
      <div className="w-full md:w-fit flex justify-center items-center gap-5">
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
