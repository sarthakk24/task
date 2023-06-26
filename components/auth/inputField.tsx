import { inputProps } from "dashboard/utils/interface";

const InputField = ({ type }: inputProps) => {
  return (
    <div className="w-full flex flex-col gap-1 justify-center ">
      <label>{type === "email" ? "Email address" : "Password"}</label>
      <input
        type={type}
        className="bg-[#F5F5F5] w-full px-5 py-2 rounded-[10px]"
        placeholder={type}
      />
    </div>
  );
};

export default InputField;
