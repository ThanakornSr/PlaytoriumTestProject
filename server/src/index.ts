import express from "express";
import cors from "cors";
import discountRoute from "./routes/discount";

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

app.use("/api/", discountRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
