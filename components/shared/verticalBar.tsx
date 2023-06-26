import NavElement from "./navElement";
import { navEl } from "dashboard/utils/constants";

const VerticalBar = () => {
  return (
    <nav className="bg-black text-white w-full lg:w-[20%] lg:rounded-[30px] flex flex-col justify-between pl-5 xl:pl-10 py-10 gap-3 lg:gap-0">
      <div className="flex flex-col gap-10 text-lg">
        <span className="text-3xl xl:text-5xl font-bold">Board.</span>
        <div className="gap-5 flex flex-col flex-wrap">
          {navEl.map((el) => (
            <NavElement logo={el.logo} value={el.value} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <a>Help</a>
        <a>Contact Us</a>
      </div>
    </nav>
  );
};

export default VerticalBar;
