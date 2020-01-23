import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieparser from"cookie-parser";
import bodyparser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express();



// respond with "hello world" when a GET request is made to the homepage

app.use(cookieparser());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(helmet());

app.use(morgan("dev"));
app.use("/", globalRouter);
app.use("/user",userRouter);
app.use("/video",videoRouter);

export default app;