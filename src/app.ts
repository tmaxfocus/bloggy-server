import express, { Express } from "express";
import { BloggyServer } from "./setupServer";

class Application {
  public initialize(): void {
    const app: Express = express();
    const server: BloggyServer = new BloggyServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
