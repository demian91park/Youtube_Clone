import routes from "../routes";
import alert from 'alert-node';

export const getJoin = (req, res) => {
 res.render("join",{ pageTitle: "join"});

};
export const postJoin = (req, res) => {
    const {
        body: {name, email, password, password2}
    } = req;
    console.log(req.body);
    if(password !== password2) {
        res.status(400);
        alert('password is not same')
        res.render("join",{ pageTitle: "join"});
    } else {
        // To do: Register User
        // to DO: log user in
        res.redirect(routes.home)
    }
};

export const getLogin = (req, res) => res.render("login",{ pageTitle: "Log in"});
export const postLogin = (req, res) => {
    res.redirect(routes.home);
};
export const logout = (req, res) => {
    //TO DO PROCESS LOG OUT
    res.redirect(routes.home);
   
};
export const users = (req, res) => res.render("users",{ pageTitle: "users"});
export const userDetail = (req, res) => res.render("userDetail",{ pageTitle: "userDetail"});
export const editProfile = (req, res) => res.render("editProfile",{ pageTitle: "editProfile"});
export const changePassword = (req, res) => res.render("changePassword",{ pageTitle: "changePassword"});