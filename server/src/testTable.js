const { Driver, Team } = require("./db.js");

module.exports = async () => {
  const namo = await Driver.create({
    name: "Namito",
    id: 2222,
    apellido: "Namardopolis",
    descripcion: "El mejor piloto de Formula 1 de la historia",
    imagen: "defaultimagenbro",
    nacionalidad: "Argentina",
    fechadenacimiento: "1998-01-20",
  });
  const namo2 = await Driver.create({
    name: "Namito2",
    id: 2223,
    apellido: "Namardopolis2",
    descripcion: "El mejor piloto de Formula 1 de la historia2",
    imagen: "defaultimagenbro2",
    nacionalidad: "Argentina",
    fechadenacimiento: "1998-01-20",
  });
  // const mercedes = await Team.create({
  //   nombre: "Mercedes",
  //   id: 1,
  // });
  // await Team.create({
  //   nombre: "Mercedes2",
  //   id: 2,
  // });
  // const mercedes3 = await Team.create({
  //   nombre: "Mercedes3",
  //   id: 3,
  // });
  // await Team.create({
  //   nombre: "Mercedes4",
  //   id: 4,
  // });
  // const mercedes5 = await Team.create({
  //   nombre: "Mercedes5",
  //   id: 5,
  // });
  // namo.addTeam(mercedes);
  // namo.addTeam(mercedes5);
  // namo2.addTeam(mercedes3);
};
