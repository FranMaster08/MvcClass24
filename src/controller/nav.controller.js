const NavController = {
  getHome: (req, res) => {
    //res.render("index");
    res.send("index");
  },
};

module.exports = NavController;
