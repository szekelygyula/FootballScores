var idCounter = 0;
var Team = function (name, shortName, code, city) {
    this.id = idCounter+=1;
    this.name = name;
    this.shortName = shortName;
    this.code = code;
    this.city = city;
};

Team.prototype.setName = function (name) {
    this.name = name;
};

Team.prototype.setShortName = function (shortName) {
    this.shortName = shortName;
};

Team.prototype.setCode = function (code) {
    this.code = code;
};

Team.prototype.setCity = function (city) {
    this.city = city;
};

module.exports = Team;
