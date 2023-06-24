import { productProps } from "dashboard/utils/interface";

const Top = ({ name, value }: productProps) => {
  return (
    <div className="flex flex-col gap-1 justify-between xl:flex-row">
      <span className="font-bold">{name}</span>
      <span className="font-light">{value}%</span>
    </div>
  );
};

export default Top;
