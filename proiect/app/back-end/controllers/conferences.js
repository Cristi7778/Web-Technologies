import { Conference } from "../models/conferences.js";
import { User } from "../models/users.js";
import { Article } from "../models/articles.js";
import { STRING } from "sequelize";

const createConference = async (req, res) => {
  const { name, date, location, organizerId, articleId } = req.body;
  try {
    const newConference = await Conference.create({
      name,
      date,
      location,
      organizerId,
      articleId,
    });

    res.status(201).send({ message: "Conference created", conference: newConference });
  } catch (err) {
    res.status(500).send({ message: "Server error", err: err });
  }
};

const deleteConference = async (req, res) => {
  const conferenceId = req.params.id;

  try {
    const conference = await Conference.findByPk(conferenceId);

    if (!conference) {
      return res.status(404).send({ message: "Conference not found." });
    }

    await conference.destroy();

    res.status(200).send({ message: "Conference deleted" });
  } catch (err) {
    res.status(500).send({ message: "Server error", err: err });
  }
};

const getConferences = async (req, res) => {
  try {
    const conferences = await Conference.findAll();
    res.status(200).send({ records: conferences });
  } catch (err) {
    res.status(500).send({ message: "Server error", err: err });
  }
};

const getConferenceById = async (req, res) => {
  const conferenceId = req.params.id;

  try {
    const conference = await Conference.findByPk(conferenceId)

    if (!conference) {
      return res.status(404).send({ message: "Conference not found." });
    }

    res.status(200).send({ conference: conference });
  } catch (err) {
    res.status(500).send({ message: "Server error", err: err });
  }
};
const updateConference = async (req, res) => {
  const conferenceId = req.params.id;
  const { name, date, location, organizerId, articleId } = req.body;

  try {
    const conference = await Conference.findByPk(conferenceId);

    if (!conference) {
      return res.status(404).send({ message: "Conference not found." });
    }

    conference.name = name;
    conference.date = date;
    conference.location = location;
    conference.organizerId = organizerId;
    conference.articleId = articleId;

    await conference.save();

    res.status(200).send({ message: "Conference updated", conference: conference });
  } catch (err) {
    res.status(500).send({ message: "Server error", err: err });
  }
};

export {
  createConference,
  deleteConference,
  getConferences,
  getConferenceById,
  updateConference
};