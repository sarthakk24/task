import { scheduleProps } from "dashboard/utils/interface";
import ScheduleBox from "./scheduleBox";

const Schedule = ({ data }: { data: Array<scheduleProps> }) => {
  return (
    <div className="w-full lg:w-[45%] h-full bg-white rounded-[20px] p-5">
      <div className="flex justify-between">
        <span className="text-xl xl:text-2xl font-bold">Today's schedule</span>
        <button>{"See all >"}</button>
      </div>
      <div className="h-full flex flex-col justify-evenly">
        {data.map((el, i) => {
          return (
            <ScheduleBox
              task={el.task}
              location={el.location}
              time={el.time}
              item={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;
