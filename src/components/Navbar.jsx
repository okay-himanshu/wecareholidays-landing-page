import { NavLink } from "react-router-dom";
import { Button } from ".";

function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-24 px-10 py-4 text-lg bg-slate-300 ">
      <div>
        <img
          src="https://wecareholidays.com/img/wecare_logo.svg"
          alt="logo"
          className="h-14"
        />
      </div>
      <div className="flex items-center gap-7 ">
        <NavLink className={"hover:text-[#ff525d] duration-150"}>
          Destination
        </NavLink>
        <NavLink className={"hover:text-[#ff525d] duration-150"}>
          Testimonials
        </NavLink>

        <NavLink className={"hover:text-[#ff525d] duration-150"}>
          Contact
        </NavLink>
        <Button
          text={"+91 1234567890"}
          className={"bg-[#ff525d] text-white  px-4 py-0.5 text-[15px]"}
          handleClick={() => {}}
        />
      </div>
    </nav>
  );
}

export default Navbar;
