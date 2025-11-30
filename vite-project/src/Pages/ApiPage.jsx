import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ApiPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://6905b069ee3d0d14c13361c0.mockapi.io/product")
      .then((res) => {
        setAllProducts(res.data.slice(6, 10));
        setLoading(false);
      })
      .catch((err) => {
        console.error("API xatosi:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-center text-lg">Mahsulotlar yuklanmoqda...</div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Mahsulotlar</h1>
      <div className="flex items-center gap-6 justify-center flex-wrap">
        {allProducts.map((item) => (
          <Link
            key={item.id}
            to={`/CardDetail/${item.id}?category=${encodeURIComponent(
              item.category
            )}`}
            className="block w-[288px] h-[347px] gap-4 opacity-100 rounded-[8px]  p-4 bg-white shadow hover:shadow-lg transition cursor-pointer"
          >
            {item.img && (
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover rounded"
              />
            )}
            <p className="text-sm font-semibold mt-2 text-center">
              {item.title}
            </p>
            {item.price && (
              <p className="text-sm text-center text-gray-500">
                {item.price.toLocaleString()} UZS
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ApiPage;
