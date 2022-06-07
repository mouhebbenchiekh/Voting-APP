import mongoose from "mongoose";
const Schema = mongoose.Schema;

//create Schema
const VoteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref:'User',
    required: true,
  },
  subject: {
    type: Schema.Types.ObjectId,
    ref:"Subject",
    required: true,
  },
  choice: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Vote = mongoose.model("Votes", VoteSchema);