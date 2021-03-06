// You can rewrite any configuration field by adding it to config.local.js module.exports
var config = {
    environment: process.env.ENVIRONMENT || "production",

    port: process.env.PORT || 5000,

    sessionSecret: process.env.SESSION_SECRET || 'your-session-secret',

    mongoUri: process.env.MONGO_URI || '127.0.0.1/passport-application',

    livereload: {
        host: 'localhost',
        port: '35729',
        enabled: process.env.ENVIRONMENT === "development"
    },

    s3: {
        bucket: process.env.S3_BUCKET,
        key: process.env.S3_KEY,
        secret: process.env.S3_SECRET
    }

};

// Local machine config
if( require('fs').existsSync( __dirname + "/config.local.js" ) ) {
    require('lodash').extend(config, require(__dirname + "/config.local.js") );
}

module.exports = config;
