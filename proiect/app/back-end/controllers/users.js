import { User } from "../models/users.js";
const allReviewers = ["dana","ioana","iulia","alexandra","oana"];
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send({ records: users });
  } catch (err) {
    res.status(500).send({ message: "server error", err: err });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.status(200).send({ user: user });
    } else {
      res.status(404).send({ message: "user not found." });
    }
  } catch (err) {
    res.status(500).send({ message: "server error", err: err });
  }
};

const createUser = async (req, res) => {
  const userData = req.body;

  try {
    const newUser = await User.create(userData);

    if (newUser.userType === 'reviewer') {
      allReviewers.push(newUser);
    }
    res.status(201).send({ message: "User was created", user: newUser });
  } catch (err) {
    res.status(500).send({ message: "Server error", err: err });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      const updatedUser = await user.update(req.body);
      res.status(200).send({ user: updatedUser });
    } else {
      res.status(404).send({ message: "user not found." });
    }
  } catch (err) {
    res.status(500).send({ message: "server error", err: err });
  }
};

const removeUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.status(200).send({ message: "deleted user" });
    } else {
      res.status(404).send({ message: "user not found" });
    }
  } catch (err) {
    res.status(500).send({ message: "server error", err: err });
  }
};

export {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  removeUser
};