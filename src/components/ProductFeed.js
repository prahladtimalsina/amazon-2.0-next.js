import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
