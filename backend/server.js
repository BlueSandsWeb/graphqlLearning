// // ========== Modules ========== //
require("dotenv").config();

const express = require("express");
// // middleware
const app = express();
const helmet = require("helmet");
const cors = require("cors");

// graphql
const { graphqlHTTP } = require("express-graphql");
const { root, schema } = require("./schema");

// ========== Routes ========== //

// ========== Middleware ========== //
// app.use(helmet());
app.use(express.json());
app.use(cors());

// ========== Routing ========== //

// Test Route
app.use("/test", (req, res) => {
  console.log("It's running!");
  return res.status(200).json({ message: "It's Running!" });
});

// GraphQL Route
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

// ========== Starting server ========== //
app.listen(5000);
console.log("Running a GraphQL API server at http://localhost:5000/graphql");
