const express = require("express");
const app = express();

const router = express.Router();
const {getAllTasks} = require("../controllers/tasks");

router.route("/").get((req, res) => {
    res.send("All items");
})

module.exports = router;