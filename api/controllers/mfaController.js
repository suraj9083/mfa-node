const mfaService = require("../services/mfaService");

exports.qr = async (req, res) => {
    mfaService.qr().then(function (result) {
        res.status(200).send(result)
    })
        .catch(err => {
            console.log('qr error..', err);
            res.send(err)
        })
}

exports.verify = async (req, res) => {
    mfaService.verify(req).then(function (result) {
        res.send(result)
    })
        .catch(err => {
            console.log('qr verify error..', err);
            res.send(err)
        })
}