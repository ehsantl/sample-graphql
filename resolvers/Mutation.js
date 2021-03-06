import {v4 as uuid} from "uuid"

export const Mutation = {
  addCategory: (parent, {input}, {categories}) => {
    const {name} = input
    const newCategory = {
      id: uuid(),
      name
    }
    
    categories.push(newCategory);
    return newCategory;
  },
  addProduct: (parent, {input}, {products}) => {
    const { name, description, image, quantity, price, onSale, categoryId } = input;
    const newProduct = {
      id: uuid(),
      name,
      description,
      image,
      quantity,
      price,
      onSale,
      categoryId
    };

    products.push(newProduct);
    return newProduct;
  },
  addReview: (parent, {input}, {reviews}) => {
    const { date, title, comment, rating, productId } = input;

    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId,
    };

    reviews.push(newReview)
    return newReview
  }
}