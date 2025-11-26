// CardDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CardDetail = () => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://691aa27e2d8d7855756f8c58.mockapi.io/products2")
      .then((res) => {
        // 🔥 Har bir mahsulotga kategoriyani qo'shamiz
        const allFlat = [];
        res.data.forEach(categoryObj => {
          const category = categoryObj.category;
          (categoryObj.products || []).forEach(product => {
            allFlat.push({
              ...product,
              category // ✅ mahsulotga kategoriyani qo'shamiz
            });
          });
        });

        // Joriy mahsulotni topamiz
        const current = allFlat.find(p => p.id === id);
        setCurrentProduct(current);

        if (current) {
          // Bir xil kategoriyadagi boshqa mahsulotlarni olish (10 tagacha)
          const sameCategory = allFlat
            .filter(p => p.category === current.category && p.id !== id)
            .slice(0, 10);
          setRelatedProducts(sameCategory);
        }
      })
      .catch(err => {
        console.error("Xatolik:", err);
      });
  }, [id]);

  if (!currentProduct) {
    return <div className="p-6">Mahsulot yuklanmoqda...</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Joriy mahsulot */}
      <div className="mb-10 border-b pb-6">
        <h1 className="text-2xl font-bold">Tanlangan mahsulot: {currentProduct.name}</h1>
        <p><strong>Kategoriya:</strong> {currentProduct.category}</p>
        <p><strong>Brend:</strong> {currentProduct.brand}</p>
        <p><strong>Narxi:</strong> ${currentProduct.price}</p>
        <img
          src={currentProduct.image}
          alt={currentProduct.name}
          className="w-48 h-48 object-contain mt-4"
        />
      </div>

      {/* O'xshash mahsulotlar */}
      <h2 className="text-xl font-semibold mb-4">O'xshash mahsulotlar ({relatedProducts.length})</h2>
      {relatedProducts.length === 0 ? (
        <p>Ushbu kategoriyada boshqa mahsulotlar topilmadi.</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {relatedProducts.map((item) => (
            <div key={item.id} className="w-[160px] border rounded p-3 text-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-contain mx-auto"
              />
              <p className="text-sm mt-2 font-medium">{item.name}</p>
              <p className="text-lg font-bold mt-1">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardDetail;