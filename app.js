import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieparser from"cookie-parser";
import bodyparser from "body-parser";
import { localsMiddleware} from"./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express();



// respond with "hello world" when a GET request is made to the homepage
app.use(helmet());
app.set('view engine', 'pug');
app.use("/uploads", express.static("uploads"));
app.use(cookieparser());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(morgan("dev"));


app.use(localsMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;