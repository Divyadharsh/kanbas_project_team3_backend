import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
    name: { type: String },
    description: String,
    course: String,
    lessons: [{
        id: String,
        name: { type: String },
        description: String,
        module: String
    }]
},
    { collection: "modules" }
);
export default moduleSchema;
