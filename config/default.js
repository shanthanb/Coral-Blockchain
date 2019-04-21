"use strict";

module.exports = {
    app: {
        port: 3343
    },
    db: {
        MYSQLDBHostname: 'db-intern.ciupl0p5utwk.us-east-1.rds.amazonaws.com',
        MYSQLDBUsername: 'dummyUser',
        MYSQLDBPassword: 'dummyUser01',
        MYSQLDBName: 'db_intern',
        MYSQLTABLEName: 'userData'
    },
    constants: {
        cookieAge: 24 * 60 * 60 * 1000, /* one day in microseconds */
        maxConnectionSequelize: 10,
        minConnectionsSequelize: 1,
        idleTimeSequelize: 3600000,
        sessionTTLAPP: 7 * 24 * 60 * 60,
        sessionTTL: 45 * 60, /* 45 min in sec */
        production: false,
        sessionAge: 60 * 1000, /* in microseconds */
        rabbitMQBulk: 10,
        rabbitMQBulkElastic: 10,
        elasticRequestTimeout: 1000, /* in microseconds */
        requestTimeoutSequelize: 30000, /* in microseconds */
        dnlMobileVerificationTtl: 30000 /* in microseconds */
    },
    endpoints: {
        login: '',
        signup: '',
        confirm: ''
    },
    development: {
        username: 'dummyUser',
        password: 'dummyUser01',
        database: 'db_intern',
        host: 'db-intern.ciupl0p5utwk.us-east-1.rds.amazonaws.com',
        dialect: 'mysql'
    },
    test: {
        username: 'dummyUser',
        password: 'dummyUser01',
        database: 'db_intern',
        host: 'db-intern.ciupl0p5utwk.us-east-1.rds.amazonaws.com',
        dialect: 'mysql'
    },
    production: {
        username: 'dummyUser',
        password: 'dummyUser01',
        database: 'db_intern',
        host: 'db-intern.ciupl0p5utwk.us-east-1.rds.amazonaws.com',
        dialect: 'mysql'
    },
}
