import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

export const User = mongoose.model("User", userSchema);