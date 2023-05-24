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

// Read Biodata method
exports.findAll = (req, res) => {
    Biodata.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error while retrieving biodatas!"
        });
    });
};

exports.findOne = (req, res) => {
    Biodata.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error while finding biodata!"
        });
    });
};

// Update Biodata method
exports.update = (req, res) => {
    Biodata.update(req.body,{
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        res.send({
            message: "Success update biodata with id = " + req.params.id + "!",
        });
    })
    .catch(err => {
        res.status(500).send({
            message:"Error occured while inserting biodata!"
        });
    });
};


// Delete Biodata method
exports.delete = (req, res) => {
    Biodata.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(
        res.send({
            message:"Success delete biodata with id = " + req.params.id + "!",
        })
    )
    .catch(err => {
        res.status(500).send({
            message:"Could not delete biodata with id = " + req.params.id
        })
    });
};