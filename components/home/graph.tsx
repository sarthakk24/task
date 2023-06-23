import { graphProps } from "dashboard/utils/interface";

const Graph = ({ className }: graphProps) => {
  return (
    <div className={`h-[35%] bg-white rounded-[20px] ${className}`}>graph</div>
  );
};

export default Graph;
