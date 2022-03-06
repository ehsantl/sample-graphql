export const Query = {
  hello: () => {
    return "World";
  },
  numberOf: () => {
    return 55;
  },
  myArray: () => {
    return ["Test", "item", "arr", "reload"];
  },
  products: (parent, args, { products }) => {
    return products;
  },
  product: (parent, args, { products }) => {
    return products.find((product) => product.id === args.id);
  },
  categories: () => {
    return categories;
  },
  category: (parent, args, { categories }) => {
    return categories.find((category) => category.id === args.id);
  },
};
