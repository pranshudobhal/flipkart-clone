import { useProductFilters } from '../../components/context/products/productsContext';
import { ProductOperations, Products } from './components';

export const ProductListing = () => {
  const { sortBy, products, filterBySize, filterByBrand, filterByIdealFor } = useProductFilters();

  const getSortedProducts = (products, sortBy) => {
    if (sortBy && sortBy === 'HIGH_TO_LOW') {
      return [...products].sort((a, b) => b.price - a.price);
    }
    if (sortBy && sortBy === 'LOW_TO_HIGH') {
      return [...products].sort((a, b) => a.price - b.price);
    }

    return products;
  };

  const getFilteredProducts = (products, { filterBySize, filterByBrand, filterByIdealFor }) => {
    if (filterBySize.length !== 0) {
      products = products.filter((product) => {
        let isSizePresent = false;
        filterBySize.forEach((size) => {
          if (product.sizes.includes(size)) {
            isSizePresent = true;
          }
        });

        return isSizePresent;
      });
    }

    return products.filter((product) => (filterByBrand.length !== 0 ? filterByBrand.includes(product.brand) : true)).filter((product) => (filterByIdealFor.length !== 0 ? filterByIdealFor.includes(product.idealFor) : true));
  };

  const sortedProducts = getSortedProducts(products, sortBy);
  const filteredProducts = getFilteredProducts(sortedProducts, { filterBySize, filterByBrand, filterByIdealFor });

  return (
    <main className="flex mx-10 my-6 gap-4">
      <ProductOperations />
      <Products filteredProducts={filteredProducts} />
    </main>
  );
};
