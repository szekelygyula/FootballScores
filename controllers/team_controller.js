var _ = require('lodash');
var helpers = require('./_helpers');
var orm = require('orm');

module.exports = {
    list: function (req, res, next) {
        req.models.team.find().order('-name').all(function (err, messages) {
            if (err) return next(err);

            var items = messages.map(function (m) {
                return m.serialize();
            });

            res.send({ items: items });
        });
    },
    create: function (req, res, next) {
        var params = _.pick(req.body, 'name', 'shortName', 'code', 'city');

        req.models.team.create(params, function (err, message) {
            if(err) {
                if(Array.isArray(err)) {
                    return res.send(200, { errors: helpers.formatErrors(err) });
                } else {
                    return next(err);
                }
            }

            return res.send(200, message.serialize());
        });
    },
    get: function (req, res, next) {
        req.models.team.get(req.params.id, function (err, team) {
            if (err) {
                if (err.code == orm.ErrorCodes.NOT_FOUND) {
                    res.send(404, "Team not found");
                } else {
                    return next(err);
                }
            }
            res.send(team)
        });
    }
};