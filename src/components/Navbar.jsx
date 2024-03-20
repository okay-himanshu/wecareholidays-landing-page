import { NavLink } from "react-router-dom";
import { Button } from ".";

import { MdPhone } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => setToggle(!toggle);
  return (
    <nav className="flex items-center justify-between gap-24 px-10 py-4 text-sm  ">
      <div>
        <img
          src="https://wecareholidays.com/img/wecare_logo.svg"
          alt="logo"
          className="h-14"
        />
      </div>
      <div
        className={`absolute md:relative top-0 left-0 bg-white shadow-lg md:shadow-none rounded-b-lg md:rounded-none w-full md:top-0  md:w-auto z-40 py-3 md:py-0 ${
          toggle
            ? "-translate-y-52 transition-transform duration-150 md:translate-y-0  "
            : "-translate-y-0 transition-transform duration-150 md:translate-y-0 "
        }`}
      >
        <div
          className={`flex flex-col md:flex-row items-center gap-3 py-3 md:py-0 md:gap-7   `}
        >
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
            className={
              "bg-[#ff525d] text-white  px-4 py-2 rounded-sm text-[15px]"
            }
            handleClick={() => {}}
            icon={<MdPhone />}
          />
        </div>
      </div>

      <div
        className="flex items-center md:hidden z-50 cursor-pointer"
        onClick={handleToggle}
      >
        {toggle ? <CgMenuRight size={20} /> : <AiOutlineClose size={20} />}
      </div>
    </nav>
  );
}

export default Navbar;
