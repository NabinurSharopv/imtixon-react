import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // ✅ TO'G'RI URL — e'tibor bering: "671", emas "691"
    axios
      .get("https://691aa27e2d8d7855756f8c58.mockapi.io/products2")
      .then((res) => {
        const all = res.data.flatMap(cat => cat.products || []); // xavfsizlik uchun
        setAllProducts(all.slice(0, 6)); // 8 ta mahsulot
      })
      .catch((err) => {
        console.error("Xatolik:", err);
        // Xato haqida foydalanuvchiga ko'rsatish ham foydali
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-5 text-center">Products</h1>

      {allProducts.length === 0 ? (
        <p className="text-center text-gray-500">Mahsulotlar yuklanmoqda yoki topilmadi...</p>
      ) : (
        <div className="flex items-center gap-6 justify-center flex-wrap">
          {allProducts.map((item) => (
            <Link
              to="/Home/CardDetail"
              className="block no-underline"
            >
              <div className="w-[184px] h-[196px] opacity-100 gap-2.5 px-[18px] py-2 rounded-lg shadow-md hover:shadow-lg duration-200 cursor-pointer">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[148px] object-cover rounded-lg"
                />
                <p className="text-[15px] font-semibold mt-3 text-center">
                  {item.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;