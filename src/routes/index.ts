import { AuthRoute } from "./auth.routes";
import * as bodyParser from "body-parser";
import * as express from "express";
import cors from "cors"
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

class Routes {
  static init(app: express.Application): void {
    const options = {
      swagger: "2.0",
      definition: {
        openapi: "3.0.0",
        info: {
          title: "Node RestAPI starter",
          version: "0.1.0",
          description:
            "This is an authentication application with json web token",
          contact: {
            name: "Abba Sali Aboubakar Mamate",
            url: "https://abbasali.vercel.app",
            email: "abbasalimokolo@email.com",
          },
        },
        servers: [
          {
            url: "http://localhost:5000",
          },
        ],
      },
      apis: ["./swagger.js  "],
    };
    const router: express.Router = express.Router();
    const specs = swaggerJsdoc(options);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cors())
    app.use("/", router);
    app.use("/", new AuthRoute().router);
    app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));
  }
}

export { Routes };
