import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

import { connectProps } from "dashboard/utils/interface";

const Connect = ({ logo }: connectProps) => {
  return (
    <div className="w-full sm:w-[48%] bg-white rounded-[10px] p-3 flex text-base justify-center items-center gap-2 font-light leading-loose text-[#858585] hover:font-semibold">
      {logo === "apple" ? <BsApple /> : <FcGoogle />} Sign in with {logo}
    </div>
  );
};

export default Connect;
