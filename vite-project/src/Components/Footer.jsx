import img5 from "../Img/img5.png";
import img6 from "../Img/img6.png";
import img7 from "../Img/img7.png";
import img8 from "../Img/img8.png";
import img9 from "../Img/img9.png";
import img10 from "../Img/img10.png";
import img11 from "../Img/img11.png";
import img12 from "../Img/img12.png";
import img13 from "../Img/img13.png";
import img14 from "../Img/img14.png";
import img15 from "../Img/img15.png";
import img16 from "../Img/img16.png";
import img17 from "../Img/img17.png";
import img18 from "../Img/img18.png";
import img19 from "../Img/img19.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#021736] text-white p-8">
      <div className="max-w-[1240px] mx-auto flex flex-wrap justify-between gap-10">
        <div>
          <h1 className="font-medium text-lg">Company</h1>
          <p className="mt-2">about us</p>
          <p className="mt-2">blog</p>
          <p className="mt-2">returns</p>
          <p className="mt-2">order status</p>
        </div>

        <div>
          <h1 className="font-medium text-lg">Info</h1>
          <p className="mt-2">How it works?</p>
          <p className="mt-2">our promises</p>
          <p className="mt-2">FAQ</p>
        </div>

        <div>
          <h1 className="font-medium text-lg">Contact us</h1>

          <div className="flex items-center gap-2 mt-2">
            <img src={img5} alt="" className="w-auto h-auto" />
            <p>123 Main Street, Anytown, USA</p>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <img src={img6} alt="" className="w-auto h-auto" />
            <p>+1 (555) 123-4567</p>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <img src={img7} alt="" className="w-auto h-auto" />
            <p>TechHeimSupport@gmail.com</p>
          </div>
        </div>

        <div className="max-w-[260px]">
          <h1 className="font-medium text-lg">Sign up for News and updates</h1>

          <div className="flex items-center mt-4 border border-gray-600 rounded px-4 py-2">
            <i className="fa-regular fa-user"></i>
            <input
              type="email"
              placeholder="E-mail Address"
              className="bg-transparent outline-none flex-grow ml-2"
            />
            <img src={img8} alt="" className="w-auto h-auto" />
          </div>

          <div className="flex gap-3 mt-4">
            <img src={img9} className="w-auto h-auto" />
            <img src={img10} className="w-auto h-auto" />
            <img src={img11} className="w-auto h-auto" />
            <img src={img12} className="w-auto h-auto" />
          </div>
        </div>

        <div className="flex flex-col justify-start gap-4">
          <img src={img13} className="w-auto h-auto" />
          <img
            src={img14}
            className="w-auto h-auto cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
      </div>
      <div className="ml-27 flex gap-4 mt-8">
        <img src={img15} className="w-auto h-auto" />
        <img src={img16} className="w-auto h-auto" />
        <img src={img18} className="w-auto h-auto" />
        <img src={img17} className="w-auto h-auto" />
      </div>
      <div className="max-w-[1260px] mx-auto flex flex-wrap items-center justify-between mt-10">
        <div className="flex items-center gap-3">
          <img src={img19} className="w-auto h-auto" />
          <p>2023 Tech Heim.</p>
        </div>

        <ul className="flex flex-wrap gap-8 text-[#CBCBCB] text-sm mt-4 md:mt-0">
          <li>cookie settings</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Imprint</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
