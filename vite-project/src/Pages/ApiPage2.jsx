import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://6905b069ee3d0d14c13361c0.mockapi.io/product")
      .then((res) => {
        setAllProducts(res.data.slice(8, 12  )); 
      })
      .catch((err) => console.error("API xatosi:", err));
  }, []);

  if (!allProducts || allProducts.length === 0) {
    return <div className="p-6 text-center">Mahsulotlar yuklanmoqda...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex flex-wrap gap-6 justify-center">
        {allProducts.map((item) => (
          <Link 
            key={item.id}
            to={`/CardDetail/${item.id}?category=${encodeURIComponent(item.category)}`}
            className="block w-[288px] h-[347px] gap-4 opacity-100 rounded-[8px] p-4 bg-white shadow hover:shadow-lg transition cursor-pointer"
          >
            {item.img && (
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 object-cover rounded"
              />
            )}
            <p className="font-semibold mt-2 text-center text-sm">{item.title}</p>
            {item.price && (
              <p className="text-center text-sm text-gray-500">{item.price.toLocaleString()} UZS</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
