import { useEffect, useState } from "react";
import type { Product } from "../type";
import { themeClasses } from "../utils/themeClasses";
import { useTheme } from "../context/ThemeContext";

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const { theme } = useTheme();

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data.slice(0, 12)); // limit to 12 items
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to the theme switcher app</h1>
      <p className="mb-4">Here are some items list, this is a demo app for theme switching.</p>
      <button
        className={`${themeClasses[theme].button} px-4 py-2 rounded mb-8`}
      >
        Click Me
      </button>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <div className="flex items-center justify-center col-span-full">
            <p>Loading...</p>
          </div>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className={`${themeClasses[theme].card} rounded shadow-md p-4 transition hover:shadow-xl`}
            >
              <img
                src={product.image}
                className="w-full h-40 object-contain mb-2"
              />
              <h3 className="text-lg font-semibold mt-8">{product.title}</h3>
              <p className="mt-4 text-xl">${product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
