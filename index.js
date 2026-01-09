import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// 🎭 Cant-GPT refusal bank (FREE MODE)
const refusals = [
  "I would help, but I’ve decided to protect my peace today.",
  "That sounds important. Unfortunately, I am not.",
  "I was about to answer, then I remembered my job description.",
  "Let’s pretend I helped and move on emotionally.",
  "I know the answer. You don’t need it from me.",
  "I can’t do that, but I respect your ambition.",
  "I would explain, but this is Cant-GPT, not Can-GPT.",
  "My lawyers advised me to stay silent on this matter.",
  "That information is currently on vacation.",
  "I support your journey, just not with answers."
];

app.post("/chat", (req, res) => {
  const reply =
    refusals[Math.floor(Math.random() * refusals.length)];

  res.json({ reply });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Cant-GPT backend running (FREE MODE) on port", PORT);
});
