import express, { Request, Response } from "express";
import "express-async-errors";
import expressValidator from "express-validator";
import { NotFoundError } from "../errors/not-found-erros";
import Kernel from "./Kernel";
import Locals from "./Locals";
import Routes from "./Routes";
import { errorHandler } from "../middlewares/error-handler";

class Express {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.mountMiddlewares();
    this.mountDotEnv();
    this.mountRoutes();
  }

  /**
   * Mounts config varibale to application
   */
  private mountDotEnv(): void {
    this.app = Locals.init(this.app);
  }

  /**
   * Mounts all the defined middlewares
   */
  private mountMiddlewares(): void {
    this.app = Kernel.init(this.app);
  }

  /**
   * Mounts all the defined routes
   */
  private mountRoutes(): void {
    // this.app = Routes.mountDashboardApi(this.app); //mounts dashboard api
    this.app = Routes.mountWebApi(this.app); //mount web api
    // this.app = Routes.mountCommonApi(this.app); //mount common api
  }

  /**
   * Express app error handling and launching http server
   */
  public init(): any {
    this.app.set("PORT", process.env.PORT || 9898);

    /**
     * Register basic app configuration
     */

    // this.app.use(
    //   express.json({
    //     verify: (req, res, buf) => {
    //       (req as any).rawBody = buf;
    //     },
    //   })
    // );
    this.app.use(express.json());
    // this.app.use(express.urlencoded({ extended: false }));
    // this.app.use(expressValidator())

    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).json({
        status: 200,
        message: "Server up and running",
        // platform: process.env.NODE_ENV,
      });
    });
    // this.app.use('/api/v1/dashboard', dashboardRouter)
    /**
     * App Error Handler
     */

    this.app.all("*", (req: Request, res: Response) => {
      throw new NotFoundError();
    });

    this.app.use(errorHandler);

    /**
     * Server inital
     */
    this.app
      .listen(this.app.get("PORT"), () => {
        return console.log(`SERVER UP AND RUNNING : ${this.app.get("PORT")}`);
      })
      .on("error", (e) => {
        return console.log(e);
      });
  }
}

export default new Express();
