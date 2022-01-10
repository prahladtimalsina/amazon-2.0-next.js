import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto ">
        {products
          .slice(0, 4)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
        <img
          className="md:col-span-full"
          src="/static/images/banner-col.jpg"
          alt=""
        />
        <div className="md:col-span-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 ">
          {products
            .slice(4, 5)
            .map(({ id, title, price, description, category, image }) => (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            ))}
        </div>
        {products
          .slice(5, products.length)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
    </>
  );
}

export default ProductFeed;
