import Connect from "dashboard/components/auth/connect";
import InputModule from "dashboard/components/auth/inputModule";

const Auth = () => {
  return (
    <div className="h-screen flex">
      <div className="w-2/5 bg-black justify-center items-center text-white h-full flex text-7xl font-bold">
        Board.
      </div>
      <div className="w-3/5 justify-center items-center h-full flex">
        <div className="w-[45%] h-full justify-center flex flex-col gap-y-6">
          <div>
            <p className="text-4xl font-bold">Sign In</p>
            <p className="text-base">Sign in to your account</p>
          </div>
          <div className="flex justify-between">
            <Connect logo="google" />
            <Connect logo="apple" />
          </div>
          <InputModule />
        </div>
      </div>
    </div>
  );
};

export default Auth;
