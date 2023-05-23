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

app.get("/f", (req, res) => {
    res.json({
        message: "This is example of ExpressJS"
    });
});

const PORT = process.env.PORT || 3000;
app.listen (PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});