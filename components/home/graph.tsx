import { graphProps } from "dashboard/utils/interface";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const Graph = ({ className, metrics, tenure, customers }: graphProps) => {
  return (
    <div
      className={`h-1/2 lg:h-[35%] bg-white rounded-[20px] flex flex-col justify-between items-center ${className} p-2 sm:p-8 sm:m-5 lg:m-0 gap-5 md:gap-0`}
    >
      <div className="flex w-full justify-between flex-col sm:flex-row:">
        <div className="flex flex-col">
          <span className="text-xl xl:text-xl font-bold">Activities</span>
          <span className="text-xl xl:text-lg font-light">{tenure}</span>
        </div>
        <div className="flex gap-5 items-center">
          <span>{customers[0]}</span>
          <span>{customers[1]}</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="65%">
        <LineChart data={metrics}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
