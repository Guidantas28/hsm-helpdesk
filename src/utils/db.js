import mongoose from "mongoose";

const MONGO = process.env.MONGO;

let cachedConnection = null;

export default async function connect() {
    if (cachedConnection) {
        return cachedConnection;
      }
    
      const dbConnection = await mongoose.connect(MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    
      cachedConnection = dbConnection;
      return dbConnection;
}