const express = require("express");
const app = express();

const tasks = require("./routes/tasks.js");

app.use(express.json());

app.get("/hello", (req, res) => {
    res.send(`Hello page`);
})

app.use("/api/v1/tasks", tasks);



const port = 8080;
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})