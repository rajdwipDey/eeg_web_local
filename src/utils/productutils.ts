import { PRODUCTS } from "../dummyData/productDetails";
import { Product, RelatedProduct } from "../types/product";


export function getProductById(id: number | string): Product | undefined {
  return PRODUCTS[Number(id)];
}

export function getRelatedProducts(productId: number | string): RelatedProduct[] {
  const product = getProductById(productId);
  if (!product?.relatedProducts) return [];

  return product.relatedProducts
    .map((id) => getProductById(id))
    .filter((related): related is Product => related !== undefined)
    .map((related) => ({
      id: related.id,
      name: related.name,
      category: related.category || '',
      categoryLabel: related.categoryLabel || '',
      shortDescription: related.shortDescription || related.description || '',
      price: related.price,
      image: related.images?.[0] || related.image || '',
      inStock: related.inStock,
      stockLevel: related.stockLevel,
    }));
}


export function getAllProductIds(): { id: string }[] {
  return Object.keys(PRODUCTS).map((id) => ({ id }));
}

export function getAllProducts(): Product[] {
  return Object.values(PRODUCTS);
}
