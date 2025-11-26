import { useEffect, useState } from "react";
import axios from "axios";

const  ApiPage2 = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://691aa27e2d8d7855756f8c58.mockapi.io/products2")
      .then((res) => {  
        // Barcha mahsulotlarni bitta massivga yig'amiz
        const all = res.data.flatMap(cat => cat.products);
        // Faqat dastlabki 3 tasini olamiz
        setAllProducts(all.slice(10, 14));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-center justify-center gap-6 flex-wrap">
        {allProducts.map((item) => (
          <div
            key={item.id}
            className="w-[288px] h-[347px] p-4 rounded-lg shadow-md hover:shadow-lg duration-200"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <hp className="text-[16px]  mt-3">{item.name}</hp>
            <p className="text-lg font-bold mt-2">${item.price}</p>
            <p className="text-sm text-gray-500 mt-1">
              Rating: ⭐ {item.rating}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiPage2;