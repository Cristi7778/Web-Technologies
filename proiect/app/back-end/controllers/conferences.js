import { User } from "../models/users";
import { Conference } from "../models/conferences";
const getConferences = async (req, res) => {
  try {
    const conferences = await Conference.findAll();
    res.status(200).send({ records: conferences });
  } catch (err) {
    res.status(500).send({ message: "server error", err: err });
  }
};
const getConferenceById = async (req, res) => {
    const conferenceId = req.params.id;
  
    try {
      const conference = await Conference.findByPk(conferenceId);
  
      if (!conference) {
        return res.status(404).send({ message: "Conference not found." });
      }
  
      res.status(200).send({ conference: conference });
    } catch (err) {
      res.status(500).send({ message: "server error", err: err });
    }
  };

const createConference = async (req, res) => {
  const { name, date, location, organizerId } = req.body;

  try {
    const organizer = await User.findByPk(organizerId);

    if (!organizer || organizer.role !== "organizer") {
      return res.status(404).send({ message: "Invalid organizer" });
    }

    const newConference = await Conference.create({
      name,
      date,
      location,
      OrganizerId: organizerId,
    });

    res.status(201).send({ message: "Conference created", conference: newConference });
  } catch (err) {
    res.status(500).send({ message: "server error", err: err });
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
      res.status(500).send({ message: "server error", err: err });
    }
  };

export {
  getConferences,
  createConference,
  deleteConference
};