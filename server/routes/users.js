const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const registerValidation = require("../middlewares/registerValidation");

router.post("/auth/login", userController.login);
router.post("/auth/register", registerValidation, userController.register);
router.get("/auth/signOut", userController.signOut);


module.exports = router;
