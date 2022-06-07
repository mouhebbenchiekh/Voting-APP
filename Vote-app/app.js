import express from "express";
import cors from "cors";
import connect from "./db.js";
import authRoute from "./routes/auth.js";
import voteRoute from "./routes/vote.js";
import subjectRoute from "./routes/Subject.js";
import passport from "passport";
import "./passport.js";
import mongoose from "mongoose";

const PORT = 5000;
const app = express();

connect();

let db = mongoose.connection;

db.once("open", () => {
  console.log("connection to mongodb");
});

/* import * as voteRoute from "./routes/vote" ; */

/************ MIDDLEVARES *************/

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add headers in order to perform all operation on API
// Because CORS Thing (Google it if you do not know)
app.use(cors());
/************ ROUTES *************/
app.use("/vote/", passport.authenticate("jwt", { session: false }), voteRoute);
app.use("/user/", authRoute);
app.use("/subjects/", subjectRoute);

// listen to the port
app.listen(PORT, () => {
  console.log("app listening on port :" + PORT);
});
