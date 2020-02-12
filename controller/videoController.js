import {videos} from "../db";
import routes from "../routes";
import Video from "../models/Videos";
export const home = async(req, res) => {
  try{
  const videos = await Video.find({}).sort({'_id': -1}); // async후 await주면 다음 문장 실행때 까지 기다려줌
  res.render("home", { pageTitle: "Home", videos });
  } catch(error){
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};
export const search = async(req, res) => {
    const {
      query: { term: searchingBy }
    } = req;
    let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" }
    });
  } catch (error) {
    console.log(error);
  }
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

export const videoDetail = async(req, res) =>  {
  const {
    params: {id}
  } = req;
  try{
  const video =await Video.findById(id);
  console.log(video);
  res.render("VideoDetail",{ pageTitle: video.title, video});
  } catch(error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
export const geteditVideo = async(req, res) => {
  const {
    params: {id}
  } = req;
  try{
    const video = await Video.findById(id);
    res.render("editVideo", {pageTitle: 'Edit ${video.title}', video});
  } catch(error){
    res.redirect(routes.home);
  }

};

 export const postEditVideo = async (req,res) => {
  const {
    params: {id},
    body: {title, description}
  } = req;

  try{
    await Video.findOneAndUpdate({_id: id}, { title, description});
    res.redirect(routes.videoDetail(id));
  } catch(error){
    res.redirect(routes.home);
  }
 };
export const deleteVideo = async(req, res) => {
  const {
    params: {id}
  } = req;

  try{
    await Video.findOneAndRemove({_id: id});
                                                        
  } catch(error){
    console.log(error);
    res.redirect(routes.home);
  }
};