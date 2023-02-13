import { Application } from "express";
import Locals from "./Locals";

// import { indexDashboardRouter } from "../routes/v1/dashboard";
// import { indexwebRouter } from "../routes/v1/web";
import { indexRouter } from "../routes/";
// import { webRouter } from "../routes/v1/web";
// import { commonRouter } from "../routes/v1/common";

class Routes {
  // mount web apis
  public mountWebApi(_express: Application): Application {
    const webPrefix = Locals.config().webPrefix;

    return _express.use(`/api/v1/${webPrefix}`, indexRouter);
  }

  //mount dashboard apis

  //   public mountDashboardApi(_express: Application): Application {
  //     const dashboardPrefix = Locals.config().dashboardPrefix;

  //     return _express.use(`/api/v1/${dashboardPrefix}`, indexDashboardRouter);
  //   }

  //mount common apis

  // public mountCommonApi(_express: Application): Application {
  //   const commonPrefix = Locals.config().commonPrefix;
  //   Log.info("Routes :: Mounting API Routes...");

  //   return _express.use(`/api/v1/${commonPrefix}`, commonRouter);
  // }
}

export default new Routes();
