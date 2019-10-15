const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../app/middlewares/authentication");

const usersController = require("../app/controllers/usersController");
const contactController = require("../app/controllers/contactController");

router.post("/register", usersController.register);
router.post("/login", usersController.login);

router.get("/users/contacts", authenticateUser, contactController.list);
router.post("/users/contacts", authenticateUser, contactController.create);
router.get("/users/contacts/:id", contactController.show);
router.put("/users/contacts/:id", contactController.update);
router.delete("/users/contacts/:id", contactController.destroy);

module.exports = router;
