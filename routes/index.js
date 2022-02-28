const fs = require("fs");

function dynamicLoadRoutes(app) {
    fs.readdirSync(__dirname).forEach(
        function (file) {
            if (file === "index.js" || file.substr(file.lastIndexOf(".") + 1) !== "js") {
                return;
            }
            let name = file.substr(0, file.indexOf("."));
            require("./" + name)(app);
        }
    );
}

module.exports = dynamicLoadRoutes;