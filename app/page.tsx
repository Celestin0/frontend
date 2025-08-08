'use client';

import ProductCard, { Product } from "@/components/ProductCard";

const ProductsPage = () => {
  const products: Product[] = [
    {
      id: '1',
      name: "Premium Comfort T-Shirt",
      price: 29.99,
      image: "https://nepoba.com/images/products_images/1737825724390-black%20jacket.jpg",
      variants: ["Small", "Medium", "Large", "XL"],
      inStock: true
    },
    {
      id: '2',
      name: "Limited Edition Sneakers",
      price: 129.99,
      image: "https://nepoba.com/images/products_images/images.jpeg",
      variants: ["US 8", "US 9", "US 10", "US 11"],
      inStock: false
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;