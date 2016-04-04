var express = require('express');
var Team = require('../team');

var fcb = new Team('FC Barcelona', 'Barcelona', 'FCB', 'Barcelona');
var rm = new Team();
rm.setName('Real Madrid CF');
rm.setShortName('Real Madrid');
rm.setCode('RM');
rm.setCity('Madrid');

var router = express.Router();

/* GET teams listing. */
router.get('/', function (req, res, next) {
    res.send([fcb, rm]);
});

/* GET team with specific id */
router.get('/:id', function (req, res, next) {
    var id = req.params.id*1;
    switch (id) {
        case 1:
            res.send(fcb);
            break;
        case 2:
            res.send(rm);
            break;
        default:
            res.status(404).send({error: 'Team not found', id: id});
            break;
    }
});

module.exports = router;
