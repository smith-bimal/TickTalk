import { config } from "dotenv";
config()

import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello from TickTalk server")
});

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})