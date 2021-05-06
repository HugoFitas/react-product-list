const Product = ({ title, price, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{price}€</h3>
      <img src={image} alt={title} height="200" />
    </div>
  );
};

export default Product;
