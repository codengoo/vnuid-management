import dotenv from "dotenv";
import express from "express";
import router from "./routes";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
