const db = require('../models');

const Biodata = db.biodata;
const Op = db.Sequelize.Op;

// Create Biodata method
exports.create = (req, res) => {
    // Create validate request
    if (!req.body.nama) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    };

    // Create biodata object
    const biodata = {
        nama: req.body.nama,
        tempat_lahir: req.body.tempat_lahir,
        tanggal_lahir: req.body.tanggal_lahir,
        alamat: req.body.alamat
    };

    // Save biodata to db
    Biodata.create(biodata)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:"Error occured while inserting biodata!"
        });
    });
};