const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

const db = require('./app/models');
db.sequelizeConnection.sync()
.then(() => {
    console.log('Synced db!')
})
.catch((err) => {
    console.log('Failed to sync db: ', err.message)
});

// Import biodata controller
const biodataController = require('./app/controllers/biodata.controller.js');

// Create biodata route
app.post("/", (req, res) => {
    biodataController.create(req, res);
});

// Read biodata route
app.get("/", (req,res) => {
    biodataController.findAll(req, res);
});

app.get("/:id", (req,res) => {
    biodataController.findOne(req, res);
});

// Update biodata route
app.put("/:id", (req, res) => {
    biodataController.update(req, res);
});

// Delete biodata route
app.post("/:id", (req,res) => {
    biodataController.delete(req, res);
});

const PORT = process.env.PORT || 3000;
app.listen (PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});