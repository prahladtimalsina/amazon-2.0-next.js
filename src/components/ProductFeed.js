import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div>
      {products.map(
        ({ id, title, img, price, description, category, image }) => (
          <Product
            key={id}
            title={title}
            img-={img}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        )
      )}
    </div>  
  );
}

export default ProductFeed;
