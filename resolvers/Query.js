export const Query = {
  products: (parent, { filter }, { products, reviews }) => {
    let filteredProducts = products;

    if (filter) {
      const { onSale, avgRating } = filter;

      if (onSale === true) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;
          reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });
          return sumRating / numberOfReviews >= avgRating;
        });
      }
    }

    return filteredProducts;
  },
  product: (parent, args, { products }) => {
    return products.find((product) => product.id === args.id);
  },
  categories: (parent, args, { categories }) => {
    return categories;
  },
  category: (parent, args, { categories }) => {
    return categories.find((category) => category.id === args.id);
  },
};
