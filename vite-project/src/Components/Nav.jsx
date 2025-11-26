import { Link } from "react-router-dom";
import img0 from "../Img/img27.png";
import img1 from "../Img/img1.png";
import img2 from "../Img/img2.png";
import img3 from "../Img/img3.png";

const Nav = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/Pej2" },
    { name: "Blog", path: "/Pej3" },
    { name: "FAQ", path: "/Pej4" },
    { name: "ContactUs", path: "/Pej5" },
  ];

  return (
    <>
      <div className="p-3 gap-19 flex items-center justify-around flex-wrap">
        {/* Logo */}
        <img src={img0} alt="Logo" />
        {/* Menü */}
        <ul className="flex items-center justify-center gap-20 flex-wrap">
          {navLinks.map((item, i) => (
            <li key={i} className="relative w-fit font-light text-lg group">
              <Link to={item.path} className="cursor-pointer">
                {item.name}
              </Link>

              {/* Hover chiziq */}
              <span
                className="absolute bottom-0 left-0 h-[1.4px] bg-black w-0 group-hover:w-full transition-all duration-300"
              ></span>
            </li>
          ))}
        </ul>
        {/* Icons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
      <div className="h-px opacity-100 border-b bg-[#0C68F44D]"></div>
    </>
  );
};

export default Nav;
