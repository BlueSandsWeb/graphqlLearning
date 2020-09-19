// // ========== Modules ========== //
require("dotenv").config();

const express = require("express");
// // middleware
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");

// graphql
const { graphqlHTTP } = require("express-graphql");
const { root, schema } = require("./schema");

// ========== Routes ========== //
// const usersRouter = require("./api/users");

// ========== Middleware ========== //
// app.use(helmet());
app.use(cors());
app.use(express.json());

// ========== Connect Database ========== //
async function runServer() {
  try {
    await mongoose.connect(process.env.MONGOSTRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // ========== Routing ========== //
    const Products = require("./models/products");
    let ObjectID = require("mongodb").ObjectID;

    const testing = await Products.findOne({
      _id: "5f4c2f810456315ebf9987af",
    });

    // Test Route
    app.use("/test", (req, res) => {
      console.log("It's running!");
      return res.status(200).json({ message: "It's Running!" });
    });

    // app.use("/api/users", usersRouter);

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
    const port = process.env.PORT || 5000;
    app.listen(port);
    console.log(
      `Running a GraphQL API server at http://localhost:${port}/graphql`
    );
  } catch (error) {
    console.log("error :>> ", error);
  }
}

runServer();
