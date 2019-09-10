const Users = require("./Users");
const Projects = require("./Projects");

//Relación entre Usuarios y Proyectos
Users.belongsToMany(Projects,{through : 'projects_users'})
Projects.belongsToMany(Users,{through : 'projects_users'})

module.exports = {
    Users,
    Projects
}