import mongoose from "mongoose";

export const connectToDb = async () => {

    const connection: { isConnected?: number } = {};

    try {
        if (connection.isConnected) {
            console.log("Using existing connection.");
            return;
        }
        if (!process.env.MONGODB) {
            throw new Error("MONGODB environment variable is not defined");
        }
        const db = await mongoose.connect(process.env.MONGODB);
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        throw new Error(error as string);
    }
}