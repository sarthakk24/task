import Cards from "dashboard/components/home/cards";
import Graph from "dashboard/components/home/graph";
import Products from "dashboard/components/home/products";
import Schedule from "dashboard/components/home/schedule";
import HorizontalBar from "dashboard/components/shared/horizontalBar";
import VerticalBar from "dashboard/components/shared/verticalBar";

const data = {
  revenue: "2,129,430",
  transaction: "1,520",
  likes: "9,721",
  users: "892",
  tenure: "May - June 2021",
  products: [
    { name: "Basic Tees", value: 55 },
    { name: "Custom Short pants", value: 31 },
    { name: "Super Hoodies", value: 14 },
  ],
  schedule: [
    {
      task: "Meeting with suppliers from Kuta Bali",
      time: "14.00-15.00",
      location: "Sunset Road, Kuta, Bali ",
    },
    {
      task: "Check operation at Giga Factory 1",
      time: "18.00-20.00",
      location: "Central Jakarta ",
    },
  ],
  customers: ["Guests", "Users"],
  metrics: [
    {
      name: "",
      uv: 200,
      pv: 100,
    },
    {
      name: "Week 1",
      uv: 390,
      pv: 520,
    },
    {
      name: "Week 2",
      uv: 220,
      pv: 150,
    },
    {
      name: "Week 3",
      uv: 300,
      pv: 450,
    },
    {
      name: "Week E",
      uv: 210,
      pv: 190,
    },
    {
      name: "",
      uv: 450,
      pv: 300,
    },
  ],
};

const Dashboard = () => {
  return (
    <div className=" lg:h-screen flex lg:p-10 flex-col lg:flex-row justify-between">
      <VerticalBar />
      <div className="flex flex-col w-full lg:w-3/4 h-full justify-evenly p-2 sm:p-5 lg:p-0 ">
        <HorizontalBar />
        <div className="flex lg:w-full justify-evenly md:justify-between md:h-[12%] flex-wrap m-5 lg:m-0">
          <Cards
            className="bg-[#DDEFE0]"
            value={`$${data.revenue}`}
            title="Total Revenues"
            type="revenue"
          />
          <Cards
            className="bg-[#F4ECDD]"
            value={data.transaction}
            title="Total Transactions"
            type="transaction"
          />
          <Cards
            className="bg-[#EFDADA]"
            value={data.likes}
            title="Total Likes"
            type="likes"
          />
          <Cards
            className="bg-[#DEE0EF]"
            value={data.users}
            title="Total Users"
            type="users"
          />
        </div>
        <Graph
          metrics={data.metrics}
          tenure={data.tenure}
          customers={data.customers}
        />
        <div className="flex w-full h-3/5 lg:h-1/4 justify-between flex-col lg:flex-row">
          <Products data={data.products} /> <Schedule />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
