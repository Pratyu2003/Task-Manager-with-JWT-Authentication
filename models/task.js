import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    title:  {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
});

export const Task = mongoose.model("Task", userSchema);