import { notFound } from 'next/navigation';
import Breadcrumb from '@/src/components/product-detail/Breadcrumb';
import ProductGallery from '@/src/components/product-detail/ProductGallery';
import ProductInfo from '@/src/components/product-detail/ProductInfo';
import ProductTabs from '@/src/components/product-detail/ProductTabs';
import RelatedProducts from '@/src/components/product-detail/RelatedProducts';
import { getAllProductIds, getProductById, getRelatedProducts } from '@/src/utils/productutils';
import PageHeader from '@/src/components/common/PageHeader';
import { products } from '@/src/dummyData/productData';

export async function generateStaticParams() {
  return getAllProductIds();
}

export async function generateMetadata({ params }:any) {
  const product = getProductById(parseInt(params.id));

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name}`,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [product?.images[0]],
    },
  };
}

export default function ProductDetailPage({ params }: any) {
  console.log(params.id, "params.id");

  const productId = parseInt(params.id);
  const product = getProductById(1);

  console.log(product, "product");


  if (!product) {
    notFound();
  }


  return (
    <>
      <PageHeader
        title="Product Details"
        backgroundImage="/img/ab1.jpg"
        scrollTargetId="#next-section"
      />

      <section className="py-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <Breadcrumb product={product} />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ProductGallery
              images={product.images ?? []}
              productName={product.name}
              badge={product.badge}
            />
            <ProductInfo product={product} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800/30">
        <div className="container mx-auto px-4">
          <ProductTabs product={product} />
        </div>
      </section>

      <RelatedProducts products={products} />
    </>
  );
}


