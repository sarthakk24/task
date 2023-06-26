import InputField from "./inputField";

const InputModule = () => {
  return (
    <div className="w-full ">
      <div className=" w-full rounded-[20px] bg-white flex justify-center items-center flex-col gap-4 p-5 sm:p-10">
        <InputField type="email" />
        <InputField type="password" />
        <button className="self-start text-[#346BD4]">Forgot Password ?</button>
        <a
          href="/dashboard"
          className="text-center bg-black text-white font-bold py-2 w-full rounded-[10px]"
        >
          Sign In
        </a>
      </div>

      <div className="text-center pt-5">
        Don't have an account? <a className="text-[#346BD4]">Register here</a>
      </div>
    </div>
  );
};

export default InputModule;
