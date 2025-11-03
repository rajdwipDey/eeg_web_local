import Image from "next/image";
import Link from "next/link";
import StarRating from "./StarRating";
import { Product } from "./productsData";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={240}
          className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4">
          <span
            className={`${product.labelColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
          >
            {product.label}
          </span>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-[#102030] dark:text-white group-hover:text-[#42b3e5] transition-colors duration-300">
            {product.name}
          </h3>
          <StarRating rating={product.rating} />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-2xl font-bold text-[#005d90] dark:text-white">
              {product.price}
            </span>
            {product.oldPrice && (
              <div className="text-xs text-gray-500 line-through">
                {product.oldPrice}
              </div>
            )}
          </div>
          <Link
            href={product.detailLink}
            className="inline-block px-4 py-2 bg-[#6fb43f] text-white rounded-lg hover:bg-[#42b3e5] transition-colors duration-300 text-sm font-medium"
          >
            View Details
          </Link>
        </div>

        <div className="flex items-center gap-2 pt-2 border-t border-gray-100 dark:border-gray-700">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-xs text-green-600 dark:text-green-400 font-medium">
            {product.stock}
          </span>
          <span className="text-xs text-gray-500">• {product.extra}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
