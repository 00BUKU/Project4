import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`🎉 Connected to MongoDB at ${db.host}:${db.port} 🎉`);
});

db.on("error", function (error) {
  console.error(`😞 Connection error: ${error} 😞`);
});
