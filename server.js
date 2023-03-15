const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./src/configs/dbconfig");
const route = require("./src/routes/index");
const bodyParser = require("body-parser");
const cors = require("cors");
// middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// connect db
db.connect();
// config routes
route(app);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
