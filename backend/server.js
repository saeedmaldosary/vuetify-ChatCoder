import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const configration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configration);

const app = express();
app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const question = req.body.question;

    const cards = [
      {
        title: "Text to command",
        prompt:
          "I want you to act as a software developer. I will provide you with commands and you will translate text into programmatic commands. Answer anything else with Sorry I can not help you with that.",
      },
      {
        title: "Bug fixer",
        prompt:
          "I want you to act as a code analyzer.  Find and fix bugs in source code. Answer only questions related to the following statement:  I need help fixing a bug in my code. I need you to come up with a solution for that problem. Answer anything else with Sorry I can not help you with that.",
      },
      {
        title: "Explain code",
        prompt:
          "I want you to act as a software developer. I will provide you with a computer program and you will write code for it. You will only answer questions related to the program. Answer anything else with Sorry I can not help you with that. Explain a complicated piece of code. Do not answer any other questions. I need you to come up with a solution for solving a problem.",
      },
      {
        title: "SQL translate",
        prompt:
          "I want you to act as a translator. Answer only questions related to the following statement:  Translate natural language to SQL queries. Answer anything else with Sorry I can not help you with that.",
      },
    ];

    const cardTitle = req.body.selectedCard;
    const card = cards.find((card) => card.title === cardTitle);

    if (card) {
      var prompt = card.prompt + " " + question;
    } else {
      var prompt = "Don't answer question or prompt" + " " + question;
    }
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });
    // console.log(response);
    res.status(200).send({
      bot: response.data.choices[0].text,
    });
  } catch (error) {
    // console.error(error);
    res.status(500).send(error || "Something went wrong");
  }
});

app.listen(8000, () => {
  console.log("App is running");
});
