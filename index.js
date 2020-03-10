var graylog2 = require("graylog2");

var logger = new graylog2.graylog({
    servers: [
        { host: "127.0.0.1", port: 12201 },
    ],
    facility: "Test.js",
});

logger.on("error", function (error) {
    console.error("Error while trying to write to graylog2:", error);
});

setTimeout(() => {
    logger.log("What we've got here is...failure to communicate");
    logger.log("With some data coming...", {
        cool: 'beans',
        test: {
            yoo: 123,
        }
    });
    logger.notice("What we've got here is...failure to communicate");

    console.log('logged?');
    // process.exit();
}, 2000);