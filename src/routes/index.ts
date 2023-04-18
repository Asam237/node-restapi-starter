import { AuthRoute } from "./auth.routes";
import * as bodyParser from "body-parser";
import * as express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

class Routes {
  static init(app: express.Application) {
    const options = {
      definition: {
        openapi: "3.1.0",
        info: {
          title: "LogRocket Express API with Swagger",
          version: "0.1.0",
          description:
            "This is a simple CRUD API application made with Express and documented with Swagger",
          license: {
            name: "MIT",
            url: "https://spdx.org/licenses/MIT.html",
          },
          contact: {
            name: "LogRocket",
            url: "https://logrocket.com",
            email: "info@email.com",
          },
        },
        servers: [
          {
            url: "http://localhost:5000",
          },
        ],
      },
      apis: ["./routes/*.ts"],
    };
    const router = express.Router();
    const specs = swaggerJsdoc(options);
    app.use(bodyParser.json());
    app.use("/", router);
    app.use("/", new AuthRoute().router);
    app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));
  }
}

export { Routes };
