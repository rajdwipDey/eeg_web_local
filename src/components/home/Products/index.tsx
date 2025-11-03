import ProductCard from "./ProductCard";
import { products } from "./productsData";
import Link from "next/link";

const ProductsSection = () => {
  return (
    <section className="py-20 bg-[#F8F8F8] dark:bg-gray-950">
      <div className="container mx-auto">
        <h1 className="mb-6">
          <span className="text-[#102030] dark:text-[#42b3e5] text-sm font-medium uppercase block mb-4">
            PRODUCTS
          </span>
          <span className="text-4xl inline-block font-light text-[#005d90] dark:text-white">
            Products <b className="font-semibold">We Offer</b>
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          <div className="col-span-full text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-gradient-to-r from-[#6fb43f] to-[#6fb43f] text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group"
            >
              View All Products
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
              Explore our complete range of security solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
