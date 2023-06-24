import { navProps } from "dashboard/utils/interface";

const NavElement = ({ value, logo }: navProps) => {
  return <li className="list-none hover:font-extrabold">{value}</li>;
};

export default NavElement;
