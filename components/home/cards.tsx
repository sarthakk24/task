import { cardProps } from "dashboard/utils/interface";

const Cards = ({ className }: cardProps) => {
  return (
    <div className={`w-[22%] h-full rounded-[20px] ${className}`}>card</div>
  );
};

export default Cards;
