import express from "express";
// import cookieParser  from "cookie-parser";
import cors from "cors";
import { Application } from "express";
// import * as expressValidator from 'express-validator';

class Http {
  public static mount(_express: Application): Application {
    // Enables the request body parser
    _express.use(express.json());

    // Enables the cookies
    // _express.use(cookieParser());

    _express.use(
      express.urlencoded({
        // limit: Locals.config().maxUploadLimit,
        // parameterLimit: Locals.config().maxParameterLimit,
        extended: false,
      })
    );

    // Disable the x-powered-by header in response
    _express.disable("x-powered-by");

    return _express;
  }
}

export default Http;
