import Cards from "dashboard/components/home/cards";
import Graph from "dashboard/components/home/graph";
import Products from "dashboard/components/home/products";
import Schedule from "dashboard/components/home/schedule";
import HorizontalBar from "dashboard/components/shared/horizontalBar";
import VerticalBar from "dashboard/components/shared/verticalBar";

const SignIn = () => {
  return (
    <div className="h-screen flex p-10 justify-between">
      <VerticalBar />
      <div className="flex flex-col w-3/4 h-full justify-around">
        <HorizontalBar />
        <div className="flex w-full justify-between h-[12%]">
          <Cards className="bg-[#DDEFE0]" />
          <Cards className="bg-[#F4ECDD]" />
          <Cards className="bg-[#EFDADA]" />
          <Cards className="bg-[#DEE0EF]" />
        </div>
        <Graph />
        <div className="flex w-full h-1/4 justify-between">
          <Products /> <Schedule />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
