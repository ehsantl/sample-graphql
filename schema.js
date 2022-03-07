import { gql } from "apollo-server-express";
// String, Int, Float, Boolean
export const typeDefs = gql`
  type Query {
    hello: String!
    numberOf: Int
    myArray: [String!]!
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: addCategoryInput!): Category
    addProduct(input: addProductInput!): Product
    addReview(input: addReviewInput!): Review
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    category: Category!
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }

  input addCategoryInput {
    name: String!
  }

  input addProductInput {
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    categoryId: String!
  }

  input addReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: String!
  }
`;
