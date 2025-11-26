// HomePage.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://691aa27e2d8d7855756f8c58.mockapi.io/products2")
      .then((res) => {
        // Barcha mahsulotlarni tekis massivga aylantirish
        const flatProducts = res.data.flatMap(cat => 
          (cat.products || []).map(p => ({ ...p, category: cat.category }))
        );
        setAllProducts(flatProducts.slice(0, 6));
      })
      .catch((err) => {
        console.error("API xatosi:", err);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-5 text-center">Mahsulotlar</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {allProducts.map((item) => (
          <Link
            key={item.id}
            to={`/CardDetail/${item.id}`}
            className="block w-[180px] border rounded-lg p-3 shadow hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded"
            />
            <p className="font-semibold mt-2 text-center text-sm">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;