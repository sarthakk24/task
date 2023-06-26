import Connect from "dashboard/components/auth/connect";
import InputModule from "dashboard/components/auth/inputModule";

const Auth = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 bg-black justify-center items-center text-white p-0 md:p-5 flex text-4xl lg:text-7xl font-bold">
        Board.
      </div>
      <div className="w-full md:w-3/5 justify-center items-center h-full flex">
        <div className="w-4/5 lg:w-[45%] justify-center flex flex-col gap-y-6">
          <div>
            <p className="text-4xl font-bold">Sign In</p>
            <p className="text-base">Sign in to your account</p>
          </div>
          <div className="flex justify-between flex-col sm:flex-row gap-2 md:gap-0">
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
