import * as path from "path";
import * as dotenv from "dotenv";

import Express from "./Express";
import { Database } from "./Database";
// import Seeder from "../seeder"
export class App {
  /**
   *   Loads your dotenv file
   */
  public loadConfiguration(): void {
    dotenv.config({ path: path.join(__dirname, "../../.env") });
  }

  /**
   * Loads instance of express server
   */
  public loadServer(): void {
    Express.init();
  }

  /**
   * Tries to oonnect to database
   */
  public loadDatabase(): void {
    Database.init();
  }

  // public loadSeeder(): void {
  //   Log.info("Database :: Loading seeder @ Master...");
  //   Database.Seeder();
  // }
  /**
   * Insert user and other essential document at server start
   */

  // public insertEssentail(): void {
  //   Log.info("Essential :: Booting @ Master...");

  //   Express.insertAdmin();
  // }
}

export default new App();
