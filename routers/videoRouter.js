import express from "express";
import routes from "../routes";
import { videoDetail, deleteVideo, getUpload, postUpload, geteditVideo, postEditVideo  } from "../controller/videoController";
import { uploadVideo } from "../middlewares";

 const videoRouter = express.Router();

// upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// video detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit video
videoRouter.get(routes.editVideo(), geteditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
// delete video
videoRouter.get(routes.deleteVideo(), deleteVideo);
export default videoRouter;