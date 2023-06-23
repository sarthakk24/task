import Cards from "dashboard/components/home/cards";
import Graph from "dashboard/components/home/graph";
import Navbar from "dashboard/components/shared/navbar";

const SignIn = () => {
  return (
    <div className="h-screen flex p-10 justify-between bg-[#F5F5F5]">
      <Navbar />
      <div className="flex flex-col w-[75%] h-full">
        <div className="flex w-full justify-between h-[12%]">
          <Cards className="bg-[#DDEFE0]" />
          <Cards className="bg-[#F4ECDD]" />
          <Cards className="bg-[#EFDADA]" />
          <Cards className="bg-[#DEE0EF]" />
        </div>
        <Graph />
        <div className="flex w-full"></div>
      </div>
    </div>
  );
};

export default SignIn;
