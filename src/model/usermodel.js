const fs = require("fs");
const path = require("path");
const dbUser = require("./users.json");

const userModel = {
  getUsers: function()  {
    return JSON.parse(fs.readFileSync(path.join(__dirname, "./users.json"),{encoding: "utf8"}));
  },
  isExist: function (cedula) {
    const isExist = this.getUsers().find((item) => item.cedula == cedula);
    if (isExist) {
      return true;
    } else {
      return false;
    }
  },
  createUser: function (user) {
    const users = this.getUsers();
    if (this.isExist(user.cedula)) {
      return "Ya existe";
    }
    users.push(user);
    fs.writeFileSync(
      path.resolve(__dirname, "./users.json"),
      JSON.stringify(users, null, 4),
      { encoding: "utf8" }
    );
    return "Creado";
  },
  deleteUser: function (cedula) {
    const newDb = this.getUsers().filter(item => item.cedula != cedula);
    fs.writeFileSync(
      path.resolve(__dirname, "./users.json"),
      JSON.stringify(newDb, null, 4),
      { encoding: "utf8" }
    );
  },
  updateUser: function (cedula,user){
    const indiceBuscado = this.getUsers().findIndex(user => user.cedula == cedula)
    if(indiceBuscado<0){
      return "No existe esta cedula en la base de datos"
    }
    let newDb = this.getUsers()
    newDb[indiceBuscado]=user
    fs.writeFileSync(
      path.resolve(__dirname, "./users.json"),
      JSON.stringify(newDb, null, 4),
      { encoding: "utf8" }
    );
    return "Actualizado con exito"
  }
};


module.exports = userModel;
