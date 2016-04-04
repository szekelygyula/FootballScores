module.exports = function (orm, db) {
    var Team = db.define('team', {
            name: { type: 'text', required: true },
            shortName: { type: 'text', required: true },
            code: { type: 'text', required: true },
            city: { type: 'text', required: true }
        },
        {
            hooks: {

            },
            validations: {
                name: orm.enforce.ranges.length(1, 100),
                shortName: orm.enforce.ranges.length(1, 50),
                code: orm.enforce.ranges.length(1, 4),
                city: orm.enforce.ranges.length(1, 100)
            },
            methods: {
                serialize: function () {
                    return {
                        name: this.name,
                        shortName: this.shortName,
                        code: this.code,
                        city: this.city
                    }
                }
            }
        });
};