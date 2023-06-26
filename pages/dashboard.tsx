import Cards from "dashboard/components/home/cards";
import Graph from "dashboard/components/home/graph";
import Products from "dashboard/components/home/products";
import Schedule from "dashboard/components/home/schedule";
import HorizontalBar from "dashboard/components/shared/horizontalBar";
import VerticalBar from "dashboard/components/shared/verticalBar";
import axios from "axios";

const Dashboard = ({ resData }: any) => {
  const { data } = resData;

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
          <Products data={data.products} /> <Schedule data={data.schedule} />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const data = await axios.get(
      `https://n5d80tw7u4.execute-api.ap-south-1.amazonaws.com/dev/data`
    );
    const resData = data.data.data;
    return { props: { resData } };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
}

export default Dashboard;
