const { Router } = require("express");
//mis imports

const getDrivers = require("../controllers/getDrivers");
const getDriverById = require("../controllers/getDriverById");
const createDrivers = require("../controllers/createDrivers");

const router = Router();
//mis rutas

router.get("/drivers/:idDriver", getDriverById);
router.get("/drivers", getDrivers);
router.post("/drivers", createDrivers);

module.exports = router;
