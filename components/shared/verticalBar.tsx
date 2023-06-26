import { useState } from "react";
import NavElement from "./navElement";
import { navEl } from "dashboard/utils/constants";
import { AiOutlineDown } from "react-icons/ai";

const VerticalBar = () => {
  const [active, setActive] = useState(true);

  const changeHandler = () => {
    setActive(!active);
  };

  return (
    <nav className="bg-black text-white w-full lg:w-[20%] lg:rounded-[30px] flex flex-col justify-between pl-5 xl:pl-10 py-10 gap-3 lg:gap-0">
      <div className="flex flex-col gap-10 text-lg">
        <span className="text-3xl xl:text-5xl font-bold flex justify-between pr-5">
          Board.
          <div className="lg:hidden text-3xl" onClick={changeHandler}>
            <AiOutlineDown />
          </div>
        </span>
        <div
          className={`gap-5 lg:flex flex-col flex-wrap ${
            active ? "flex" : "hidden"
          }`}
        >
          {navEl.map((el) => (
            <NavElement logo={el.logo} value={el.value} />
          ))}
        </div>
      </div>
      <div className={`lg:flex flex-col gap-3 ${active ? "flex" : "hidden"}`}>
        <a>Help</a>
        <a>Contact Us</a>
      </div>
    </nav>
  );
};

export default VerticalBar;
