import mongoose from "mongoose";
const Schema = mongoose.Schema;
const  SubjectType =["TF","Option"];

//create Schema
const SubjectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  options: [{type:String,required:true}],
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Subject = mongoose.model("Subjects", SubjectSchema);