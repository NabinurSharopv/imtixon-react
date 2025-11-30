import img20 from "../Img/img20.png";
import img21 from "../Img/img21.png";
import img22 from "../Img/img22.png";
import img23 from "../Img/img23.png";
import img24 from "../Img/img24.png";

const Page2 = () => {
  return (
    <div className="max-w-[1224px] flex  items-center justify-center gap-7  p-9 opacity-100 rounded-lg bg-[#063A88] m-auto flex-wrap">
      <div className="w-[184px] rounded gap-3 p-2; bg-[#FFFFFF]">
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
          <div className="relative">
            <img
              src={img20}
              alt="Mahsulot"
              className="w-full h-40 object-cover"
            />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -50%
            </span>
          </div>

          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
              Logitech G502 Gaming Mouse
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 line-through text-sm">$38.00</span>
              <span className="text-green-600 font-bold text-lg">$19.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[184px]  rounded gap-3  bg-[#FFFFFF]">
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
          <div className="relative">
            <img
              src={img21}
              alt="Mahsulot"
              className="w-full h-40 object-cover"
            />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -30%
            </span>
          </div>

          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
              NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant
              Design
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 line-through text-sm">$49.00</span>
              <span className="text-green-600 font-bold text-lg">$34.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[184px]  rounded gap-3 p-2; bg-[#FFFFFF]">
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
          <div className="relative">
            <img
              src={img22}
              alt="Mahsulot"
              className="w-full h-40 p-3 object-cover"
            />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -20%
            </span>
          </div>

          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
              Apple Watch Series 7 (GPS, 41MM)
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 line-through text-sm">
                $280.00
              </span>
              <span className="text-green-600 font-bold text-lg">$231.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[184px]  rounded gap-3 p-2; bg-[#FFFFFF]">
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
          <div className="relative">
            <img
              src={img23}
              alt="Mahsulot"
              className="w-full h-40 p-3 object-cover"
            />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -25%
            </span>
          </div>

          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
              Apple 2022 MacBook Air M2 Chip (8GB RAM, 256GB SSD)
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 line-through text-sm">
                $950.22
              </span>
              <span className="text-green-600 font-bold text-lg">$712.66</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[184px] rounded gap-3 p-2; bg-[#FFFFFF]">
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
          <div className="relative">
            <img
              src={img24}
              alt="Mahsulot"
              className="w-full h-40 p-3 object-cover"
            />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -17%
            </span>
          </div>

          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
              samsung Titan smart watch
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 line-through text-sm">
                $120.00
              </span>
              <span className="text-green-600 font-bold text-lg">$99.60</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
