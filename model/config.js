const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/crud", {
  useNewUrlParser: "true",
});

mongoose.connection.on("error", (err) => {
  console.log("mongoose connection error", err);
});

mongoose.connection.on("connectd", (err, res) => {
  console.log("mongoose connection connected");
});
