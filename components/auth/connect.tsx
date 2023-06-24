import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

import { connectProps } from "dashboard/utils/interface";

const Connect = ({ logo }: connectProps) => {
  return (
    <div className="w-[45%] bg-white rounded-[10px] p-3 flex text-lg justify-center items-center gap-2">
      {logo === "apple" ? <BsApple /> : <FcGoogle />} Sign in with {logo}
    </div>
  );
};

export default Connect;
