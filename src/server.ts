import express from "express";
import dotenv from 'dotenv';
import { generateCompletion } from "./ai/generate";
import { Message } from "./ai/types";

dotenv.config();

const app = express();

app.use(express.json());

app.post("/ai/chat", async (req, res) => {
    const { message } = req.body; 

    if(!message){
        return res.status(400).json({ message: 'Message is required!'});
    }

    const messages: Message[] = [
        {
            role: "system",
            content: "You are a precise and concise AI assistant. Respond clearly and avoid unnecessary verbosity.",
        }, 
        {
            role: "user",
            content: message
        }
    ]

    const result = await generateCompletion(messages);

    if(!result.success){
        return res.status(500).json(result.error)
    }

    res.json(result)
});

app.listen(3000, () => {
    console.log("AI assistanat running on http://localhost:3000")
});






