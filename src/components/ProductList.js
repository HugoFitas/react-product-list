import Product from "./Product";

const ProductList = ({ allProducts }) => {
  return (
    <div>
      {allProducts.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ProductList;
