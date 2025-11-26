import img27 from "../Img/img35.png"; // Sizning rasmingiz (3 ta smart watch)
import React from 'react';

const SmartWatch = () => {
  return (
    <div className="w-full flex justify-center">
      {/* Asosiy konteyner — 1224x420px */}
      <div
        className="relative w-full max-w-[1224px] h-[420px] rounded-xl overflow-hidden shadow-lg"
        style={{ maxWidth: '1224px', height: '420px' }}
      >
        {/* Gradient fon — chap tomonda qora-kichik ko'k */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-gray-800"></div>

        {/* O'ng tomonda ochiq orange aylana */}
        <div
          className="absolute right-30 top-50 w-[600px] h-[600px] bg-orange-500 rounded-full opacity-90"
          style={{ transform: 'translateY(-50%) translateX(50%)' }}
        ></div>

        {/* Matn va rasm — z-index 10 */}
        <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-8 md:py-10">
          {/* Chap tomondagi matn */}
          <div className="text-white space-y-4 max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold">SMART WATCH</h1>
            <p className="text-lg opacity-90">Various designs and brands</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md transition w-fit mt-4">
              view
            </button>
          </div>

          {/* O'ng tomondagi rasmlar */}
          <div className="flex-shrink-0 relative">
            <img
              src={img27}
              alt="Smart Watches"
              className="w-auto mr-39 h-[280px] object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartWatch;