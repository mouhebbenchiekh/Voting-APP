import express from "express";
import { Subject } from "../models/subject.js";
import { Vote } from "../models/votes.js";
const router = express.Router();

router.get("/Subjects", async (req, res) => {
  const oldSubjects = await Subject.find();
  const subjects = await Promise.all(
    oldSubjects.map(async (subject) => {
      const newEle = {
        subject,
        votes: await Vote.find({ subject: subject._id }),
      };

      return newEle;
    })
  );

  return res.json({ subjects });
});

export default router;
