import express from "express";
import cors from "cors";
import records from "./routes/record.js"
import inference from "./routes/inference.js"

const PORT = process.env.PORT || 5050;
const app = express();

// Configure CORS to allow requests from Vercel
app.use(cors({
    origin: "https://kicks-application.vercel.app/",
    credentials: true,
  }));

app.use(express.json());
app.use("/record", records);
app.use("/inference", inference);


//Start express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})