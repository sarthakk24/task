import { scheduleProps } from "dashboard/utils/interface";

const ScheduleBox = ({ task, time, location, item }: scheduleProps) => {
  return (
    <div
      key={task}
      className={`border-8 border-y-0 border-r-0 text-sm flex flex-col px-4  mt-5 lg:mt-0 ${
        item === 0 ? "border-[#9BDD7C]" : "border-[#6972C3]"
      }`}
    >
      <span className="font-medium">{task}</span>
      <span className="font-light">{time}</span>
      <span className="font-light">{location}</span>
    </div>
  );
};

export default ScheduleBox;
