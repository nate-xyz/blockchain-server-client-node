function chain(app) {
    app.get("/chain", function (request, response) {
        let chainStr = global.blockchain.prettify();
        response
            .status(200) // HTTP status code 200: OK
            .send(chainStr); // Response message
    });
}

module.exports = chain;