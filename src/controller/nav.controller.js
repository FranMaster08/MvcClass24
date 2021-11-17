const { usermodel } = require("../model");
const NavController = {
  getHome: (req, res) => {
    res.render("index",{users : usermodel.getUsers()});
  },
  createUser: (req, res) => {
    const response = usermodel.createUser({
      cedula: "222222",
      name: "John",
      lastName: "Tittor",
    });
    res.send(response);
  },
  getRegister:(req, res)=>{
    res.render("register")
  }
};

module.exports = NavController;
