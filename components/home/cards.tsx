import { cardProps } from "dashboard/utils/interface";

const Cards = ({ className, title, value, type }: cardProps) => {
  // switch (type) {
  //   case "revenue":

  return (
    <div
      className={`w-[22%] min-w-[250px] md:min-w-0 h-full rounded-[20px] flex flex-col justify-center px-8 ${className}`}
    >
      <div className="self-end ">logo</div>
      <p className=" text-xs">{title}</p>
      <p className=" text-2xl font-bold">{value}</p>
    </div>
  );
};

export default Cards;
