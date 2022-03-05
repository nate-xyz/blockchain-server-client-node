function validate(app) {

    app.get("/validate", function (request, response) {
        let isValid = global.blockchain.isChainValid();
        let responseStr = "";
        if (isValid) {
            responseStr = "The blockchain is valid!";
        } else {
            responseStr = "The blockchain is invalid!";
        }
        response
            .status(200) // HTTP status code 200: OK
            .send(responseStr); // Response message
    });
}

module.exports = validate;