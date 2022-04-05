const express = require("express");
const mongoose = require("mongoose");

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());

//"mongodb://localhost/todolist"
mongoose.connect("mongodb://localhost/todolist")
    .then(()=> console.log('Connected Successfully'))
    .catch((err) => console.log(err));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT);
});
