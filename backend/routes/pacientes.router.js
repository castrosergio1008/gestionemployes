const express = require("express");
const router = express.Router();
const pacientesController = require("../controllers/pacientes.controller");

router.post("/", pacientesController.create);
router.get("/", pacientesController.find);
router.get("/:id", pacientesController.findById);
router.put("/:id", pacientesController.update);
router.delete("/:id", pacientesController.remove);


module.exports = router
