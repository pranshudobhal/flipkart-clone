import { useProductFilters } from '../../../../components/context/products/productsContext';

export const ProductOperations = () => {
  const { sortBy, filterBySize, filterByBrand, filterByIdealFor, productsDispatch } = useProductFilters();

  const sizeArray = ['S', 'M', 'L', 'XL'];
  const idealForArray = ['MEN', 'WOMEN'];
  const brandArray = ['ADIDAS', 'VAN HEUSEN', 'METRONAUT', 'PETER ENGLAND', 'PUMA', 'ALAN JONES'];

  return (
    <section className="border-2 border-gray-200 border-opacity-75 rounded sticky p-4 w-2/12">
      <h1 className="text-3xl font-semibold mb-2">Filters</h1>
      <button className="cursor-pointer bg-blue-500 p-2 rounded text-white" onClick={() => productsDispatch({ type: 'CLEAR_ALL_FILTERS' })}>
        Clear all filters
      </button>
      <article className="my-4">
        <section className="flex flex-col">
          <h2 className="text-2xl font-semibold">Sort</h2>
          <label htmlFor="hightolow">
            <input type="radio" name="sort" id="hightolow" checked={sortBy === 'HIGH_TO_LOW'} onChange={() => productsDispatch({ type: 'SORT_BY', payload: 'HIGH_TO_LOW' })} /> High-to-Low
          </label>
          <label htmlFor="lowtohigh">
            <input type="radio" name="sort" id="lowtohigh" checked={sortBy === 'LOW_TO_HIGH'} onChange={() => productsDispatch({ type: 'SORT_BY', payload: 'LOW_TO_HIGH' })} /> Low-to-High
          </label>
        </section>
      </article>
      <article className="my-4">
        <section className="flex flex-col">
          <h2 className="text-2xl font-semibold">Size</h2>
          {sizeArray.map((size) => {
            return (
              <label key={size} htmlFor={size}>
                <input type="checkbox" name={size} id={size} checked={filterBySize.includes(size)} onChange={() => productsDispatch({ type: 'FILTER_BY_SIZE', payload: size })} /> {size}
              </label>
            );
          })}
        </section>
      </article>
      <article className="my-4">
        <section className="flex flex-col">
          <h2 className="text-2xl font-semibold">Brand</h2>
          {brandArray.map((brand) => {
            return (
              <label key={brand} htmlFor={brand}>
                <input type="checkbox" name={brand} id={brand} checked={filterByBrand.includes(brand)} onChange={() => productsDispatch({ type: 'FILTER_BY_BRAND', payload: brand })} /> {brand}
              </label>
            );
          })}
        </section>
      </article>
      <article className="my-4">
        <section className="flex flex-col">
          <h2 className="text-2xl font-semibold">Ideal for</h2>
          {idealForArray.map((idealFor) => {
            return (
              <label key={idealFor} htmlFor={idealFor}>
                <input type="checkbox" name={idealFor} id={idealFor} checked={filterByIdealFor.includes(idealFor)} onChange={() => productsDispatch({ type: 'FILTER_BY_IDEAL_FOR', payload: idealFor })} /> {idealFor}
              </label>
            );
          })}
        </section>
      </article>
    </section>
  );
};
