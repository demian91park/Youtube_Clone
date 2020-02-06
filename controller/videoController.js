import {videos} from "../db";
import routes from "../routes";
import Video from "../models/Videos";
export const home = async(req, res) => {
  try{
  const videos = await Video.find({}); // async후 await주면 다음 문장 실행때 까지 기다려줌
  res.render("home", { pageTitle: "Home", videos });
  } catch(error){
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};
export const search = (req, res) => {
    const {
      query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy, videos });
  };
  
export const getUpload = (req,res) => res.render("upload",{ pageTitle: "upload"});
export const postUpload = async (req, res) => {

const {
  body: {title, description},
  file: {path}
} = req;
const newVideo =await Video.create({
  fileUrl: path,
  title,
  description
});
console.log(newVideo);
res.redirect(routes.videoDetail(newVideo.id));
// res.render("upload",{ pageTitle: "upload"});
};
//   const  { body: { title, description },
//   file: { path } }=req;
//   console.log(req);

//   //  const{
//   //    body:{
//   //      file,
//   //      title,
//   //      description
//   //    } 
//   //  } = req;
//   const newVideo = await Video.create({

//   })
//    console.log(body, file);
//    res.render("upload",{ pageTitle: "upload"});
//    //TO do : save and upload video
//    //res.redirect(routes.videoDetail(324393));
// };

export const videoDetail = (req, res) =>  res.render("VideoDetail",{ pageTitle: "videoDetail"});
export const editVideo = (req, res) => res.render("editVideo",{ pageTitle: "editVideo"});
export const deleteVideo = (req, res) => res.render("deleteVideo",{ pageTitle: "deleteVideo"});