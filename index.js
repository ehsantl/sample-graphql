import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import { typeDefs } from "./schema.js";

import { Query } from "./resolvers/Query.js";
import { Mutation } from "./resolvers/Mutation.js";

import { Product } from "./resolvers/Product.js";
import { Category } from "./resolvers/Category.js";

import { categories, products, reviews } from "./db.js";


async function startApolloServer(typeDefs, resolvers, context) {
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

const resolvers = {
  Query,
  Mutation,
  Product,
  Category
};

const context = {
  products,
  categories,
  reviews
}

startApolloServer(typeDefs, resolvers, context);