export const ProductCard = ({ product }) => {
  return (
    <article className="border-2 border-gray-200 rounded">
      <figure className="h-auto">
        <img src={product.imageURL} alt={product.name} className="h-96 max-h-96 w-full object-cover" />
      </figure>
      <div className="p-4">
        <h2 className="text-sm">{product.brand}</h2>
        <h1 className="text-lg font-semibold">{product.name}</h1>
        <p className="text-sm">Rs.{product.price}</p>
        <p>
          Sizes:{' '}
          {product?.sizes.map((size) => (
            <span key={size}>{size} </span>
          ))}
        </p>
      </div>
    </article>
  );
};
