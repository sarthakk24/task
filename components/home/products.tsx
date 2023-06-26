import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Top from "./top";
import { productProps } from "dashboard/utils/interface";

const COLORS = ["#98D89E", "#F6DC7D", "#EE8484"];

const Products = ({ data }: { data: Array<any> }) => {
  return (
    <div className="lg:w-[45%] h-full bg-white rounded-[20px] flex flex-col p-8 my-2 sm:m-5 lg:m-0">
      <div className="flex justify-between">
        <span className="text-xl xl:text-xl font-bold">Top Products</span>
        <span className="font-light">May - June </span>
      </div>
      <div className="w-full h-4/5 flex flex-col lg:flex-row justify-center items-center">
        <ResponsiveContainer width="50%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" fill="#8884d8" dataKey="value">
              {data.map((entry: any, index: any) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-1 justify-evenly lg:justify-center items-center w-[80%] lg:w-[50%] text-md">
          {data.map((el: any) => {
            return <Top name={el.name} value={el.value} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
