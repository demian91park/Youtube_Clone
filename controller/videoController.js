export const home = (req, res ) => res.render("home",{ pageTitle: "Home", potato: 1234});
export const search = (req,res) => res.render("search", { pageTitle: "search"});

export const upload = (req,res) => res.render("upload",{ pageTitle: "upload"});
export const videoDetail = (req, res) => res.render("VideoDetail",{ pageTitle: "videoDetail"});
export const editVideo = (req, res) => res.render("editVideo",{ pageTitle: "editVideo"});
export const deleteVideo = (req, res) => res.render("deleteVideo",{ pageTitle: "deleteVideo"});