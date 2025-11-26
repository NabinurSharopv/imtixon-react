// src/components/PromoBanners.jsx
import img25 from "../Img/img25.png"
import img26 from "../Img/img26.png"

const PromoBanners = () => {
  return (
 <div className="flex flex-col lg:flex-row justify-center items-center  lg:gap-21 p-4">
  
  <div className="bg-gradient-to-r max-w-[768px] from-blue-500 to-teal-400 rounded-xl p-9  w-full lg:w-auto flex flex-col lg:flex-row items-center gap-6 shadow-lg relative overflow-hidden">
    
    {/* Dekorativ elementlar */}
    <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-20 rounded-full -translate-y-6 translate-x-6"></div>
    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-20 rounded-full translate-y-4 -translate-x-4"></div>
    <div className="absolute bottom-0 right-0 w-8 h-8 bg-white opacity-20 rounded-full translate-y-2 translate-x-2"></div>

    <div>
      <h2 className="text-2xl font-bold">iPhone 15 Series</h2>
      <img src={img25} alt="iPhone 15" className="w-full max-w-[300px] rounded-lg" />
    </div>

    <div className="flex flex-col justify-between text-white space-y-4">
      <div className="flex gap-2">
        {Array(4).fill().map((_, i) => (
          <div key={i} className="bg-white text-blue-900 text-xs font-bold px-2 py-1 rounded">
            8 Days
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold">It feels good to be the first</h3>
        <p className="text-sm opacity-90 max-w-[300px]">
          Get ready for the future of smartphones. Experience innovation like never before.
        </p>
      </div>

      <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg self-start transition">
        Register Now
      </button>
    </div>
  </div>

  <div className="bg-gradient-to-r max-w-[444px] h-82 from-yellow-500 to-orange-400 rounded-xl p-6 
                  w-full lg:w-auto flex flex-col lg:flex-row items-center gap-6 shadow-lg relative overflow-hidden">
    
    <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-20 rounded-full -translate-x-8 -translate-y-8"></div>
    <div className="absolute bottom-0 right-0 w-12 h-12 bg-white opacity-20 rounded-full translate-x-2 translate-y-2"></div>

    <img src={img26} alt="PS5" className="max-w-[300px] rounded-lg" />

    <div className="flex flex-col text-white space-y-4">
      <h2 className="text-2xl font-bold">Play Station 5</h2>
      <h3 className="text-xl font-semibold">Digital Edition + 2TB</h3>

      <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg self-start transition">
        Buy Now
      </button>
    </div>
  </div>

</div>

  );
};

export default PromoBanners;