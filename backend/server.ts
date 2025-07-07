import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from the TypeScript backend!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
