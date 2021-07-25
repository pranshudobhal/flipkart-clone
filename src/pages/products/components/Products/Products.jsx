import { ProductCard } from './ProductCard';

export const Products = ({ filteredProducts }) => {
  return filteredProducts.length !== 0 ? (
    <section className="grid grid-cols-3 gap-6 w-10/12">
      {filteredProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </section>
  ) : (
    <div className="grid place-items-center w-full text-2xl">No products with this filter. Please try again!</div>
  );
};
