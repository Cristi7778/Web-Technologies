import express from 'express';
import * as userController from "../controllers/userController.js";

const router = express.Router();

router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUserById);
router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.removeUser);

// Alte rute legate de relații pentru utilizatori
// ...

export default router;