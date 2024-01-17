import express from 'express';
import * as userController from "../controllers/users.js";

export const router = express.Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.removeUser);