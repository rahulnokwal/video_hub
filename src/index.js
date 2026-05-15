import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectDB from "./db/index.js";
import app from "./app.js";

connectDB()
  .then(() => {
    const server = app.listen(process.env.PORT || 3000, () => {
      console.log("App is running");
    });

    server.on("error", () => {
      console.log("server error:", error);
      process.exit(1);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  });
