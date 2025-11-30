import { useEffect, useState } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import axios from "axios";

const CardDetail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [currentProduct, setCurrentProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://6905b069ee3d0d14c13361c0.mockapi.io/product")
      .then((res) => {
        const allProducts = res.data;

        const current = allProducts.find((p) => String(p.id) === String(id));
        setCurrentProduct(current);

        const sameCategory = allProducts.filter(
          (p) =>
            p.category === categoryFromUrl && String(p.id) !== String(id)
        );
        setRelatedProducts(sameCategory);
      })
      .catch((err) => console.error("API xatosi:", err));
  }, [id, categoryFromUrl]);

  if (!currentProduct) {
    return <div className="p-6 text-center">Mahsulot yuklanmoqda...</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-10 border-b pb-6">
        <h1 className="text-2xl font-bold">{currentProduct.title}</h1>
        <p><strong>Kategoriya:</strong> {currentProduct.category}</p>
        {currentProduct.price && (
          <p><strong>Narxi:</strong> {currentProduct.price.toLocaleString()} UZS</p>
        )}
        {currentProduct.img && (
          <img
            src={currentProduct.img}
            alt={currentProduct.title}
            className="w-48 h-48 object-contain mt-4"
          />
        )}
      </div>

      <h2 className="text-xl font-semibold mb-4">
        O'xshash mahsulotlar ({relatedProducts.length})
      </h2>

      {relatedProducts.length === 0 ? (
        <p>Ushbu kategoriyada boshqa mahsulotlar topilmadi.</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {relatedProducts.map((item) => (
            <Link
              key={item.id}
              to={`/CardDetail/${item.id}?category=${encodeURIComponent(item.category)}`}
              className="w-[160px] border rounded p-3 text-center cursor-pointer hover:shadow-md duration-200"
            >
              {item.img && (
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-32 object-contain mx-auto"
                />
              )}
              <p className="text-sm mt-2 font-medium">{item.title}</p>
              {item.price && (
                <p className="text-lg font-bold mt-1">{item.price.toLocaleString()} UZS</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardDetail;
