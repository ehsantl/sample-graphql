export const Category = {
  products: (parent, {filter}, {products}) => {

    if (!filter) return products;

    if (filter.onSale === true) {
      return products.filter(
        (product) => product.onSale === true && product.categoryId === parent.id
      );
    } else {
      return products;
    } 
  },
};
