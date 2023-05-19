import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "backendTodo",
    }).then((c) => console.log(`Database Connected ${c.connection.host}`)).catch((e) => console.log(e));
};
