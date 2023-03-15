const sitesRoute = require("./site");
function route(app) {
  app.use("/", sitesRoute);
}

module.exports = route;
