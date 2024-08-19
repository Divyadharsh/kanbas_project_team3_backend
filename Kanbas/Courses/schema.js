import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    _id: String,
    name: String,
    number: String,
    startDate: Date,
    endDate: Date,
    department: String,
    credits: String,
    description: String,
    image: String,
},
    { collection: "courses" });

export default courseSchema;