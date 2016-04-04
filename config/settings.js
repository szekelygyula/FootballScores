var settings = {
    database   : {
        protocol: "postgresql", // or "mysql"
        query: { pool: true },
        host: "localhost",
        port: "5432",
        database: "football_tip",
        user: "football",
        password: "barca"
    }
};

module.exports = settings;