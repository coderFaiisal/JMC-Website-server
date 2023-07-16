import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rydydvt.mongodb.net/JMC?retryWrites=true&w=majority`;

async function bootstrap() {
  try {
    await mongoose.connect(uri);
    console.log("DB connection successful");

    app.listen(port, () => {
      console.log(`Server is listening on PORT : ${port}`);
    });
  } catch {
    console.log("DB connection failed");
  }
}
bootstrap();
