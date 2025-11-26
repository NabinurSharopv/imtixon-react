import { useEffect, useState } from "react";
import axios from "axios";

const ApiPage = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://691aa27e2d8d7855756f8c58.mockapi.io/products2")
      .then((res) => {
        const all = res.data.flatMap(cat => cat.products);
        setAllProducts(all.slice(6, 10));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6">

      <div className="flex items-center  gap-9 justify-center flex-wrap">
        {allProducts.map((item) => (
          <div
            key={item.id}
            className="border p-4 max-w-[290px] rounded-lg shadow-xl border-0 hover:shadow-lg duration-200"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover rounded-lg"
            />
            <p className="text-l font-semibold mt-3">{item.name}</p>
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

export default ApiPage;