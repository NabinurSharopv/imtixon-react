import { Link } from "react-router-dom";
import { useState } from "react";
import img0 from "../Img/img27.png";
import img1 from "../Img/img1.png";
import img2 from "../Img/img2.png";
import img3 from "../Img/img3.png";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/Pej2" },
    { name: "Blog", path: "/Pej3" },
    { name: "FAQ", path: "/Pej4" },
    { name: "ContactUs", path: "/Pej5" },
  ];
  return (
    <>
      <div className="p-3 flex items-center justify-between md:justify-around">
        <Link to="/">
          <img src={img0} alt="Logo" className="w-[70px]" />
        </Link>

        <ul className="hidden md:flex items-center gap-16">
          {navLinks.map((item, i) => (
            <li key={i} className="relative w-fit font-light text-lg group">
              <Link to={item.path} className="cursor-pointer">
                {item.name}
              </Link>

              <span className="absolute bottom-0 left-0 h-[1.4px] bg-black w-0 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <img src={img1} className="w-6" />
          <img src={img2} className="w-6" />
          <img src={img3} className="w-6" />
        </div>

        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[3px] bg-black block"></span>
          <span className="w-6 h-[3px] bg-black block"></span>
          <span className="w-6 h-[3px] bg-black block"></span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">
          {navLinks.map((item, i) => (
            <div
              key={i}
              className="border-b pb-2 text-lg font-normal"
              onClick={() => setOpen(false)}
            >
              <Link to={item.path}>{item.name}</Link>
            </div>
          ))}
          <div className="flex gap-4 pt-3">
            <img src={img1} className="w-6" />
            <img src={img2} className="w-6" />
            <img src={img3} className="w-6" />
          </div>
        </div>
      )}

      <div className="h-px opacity-100 border-b bg-[#0C68F44D]"></div>
    </>
  );
};

export default Nav;
