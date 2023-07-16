import express, { Application } from "express";
import cors from "cors";
import { upcomingEventRoutes } from "./app/modules/upcomingEvents/upcomingEvents.routes";
import { previousEventRoutes } from "./app/modules/previousEvents/previousEvents.routes";
import { mediaBuzzRoutes } from "./app/modules/mediaBuzz/mediaBuzz.routes";
import { usersRoutes } from "./app/modules/users/users.routes";

const app: Application = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//route
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/upcomingEvent", upcomingEventRoutes);
app.use("/api/v1/previousEvent", previousEventRoutes);
app.use("/api/v1/mediaBuzz", mediaBuzzRoutes);

export default app;
