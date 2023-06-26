import { navProps } from "dashboard/utils/interface";

const NavElement = ({ value, logo, type }: navProps) => {
  return (
    <li className="list-none hover:font-extrabold flex gap-5">
      <img src={`/${type}.svg`} />
      {value}
    </li>
  );
};

export default NavElement;
