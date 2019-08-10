const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost:27017/shopper",
  { useNewUrlParser: true },
  (err, res) => {
    if (err) throw err;

    console.log("Connected");
  }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const routes = require("./api/routes/routes");
routes(app);
const port = 5000;

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
