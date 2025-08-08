import { useState } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  variants: string[];
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedVariant, setSelectedVariant] = useState<string>(product.variants[0]);

  return (
    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
      {/* Product Image */}
      <div className="relative pb-[100%] overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="absolute h-full w-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {!product.inStock && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
            Sold Out
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        <div className="justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 truncate pr-2">{product.name}</h3>
          <p className="text-xl font-bold text-indigo-600 whitespace-nowrap">${product.price.toFixed(2)}</p>
        </div>
        
        {/* Variant Selection */}
        {product.variants.length > 1 && (
          <div className="mb-4 mt-3">
            <select
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(e.target.value)}
              className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm font-medium"
            >
              {product.variants.map((variant) => (
                <option key={variant} value={variant}>
                  {variant}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Add to Cart Button */}
        {product.inStock ? (
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Add to Cart
          </button>
        ) : (
          <button 
            className="w-full bg-gray-300 text-gray-600 py-3 px-4 rounded-lg cursor-not-allowed font-medium"
            disabled
          >
            Not Available
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;