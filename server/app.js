import express, { urlencoded } from "express";
import cors from "cors";
import { fileRouter } from "./routes/fileRouter.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/api/files", fileRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
