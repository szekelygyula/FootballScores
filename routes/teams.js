var express = require('express');
var controllers = require('../controllers')

var router = express.Router();

router.get('/', controllers.teams.list);
router.post('/', controllers.teams.create);
router.get('/:id', controllers.teams.get);

module.exports = router;
