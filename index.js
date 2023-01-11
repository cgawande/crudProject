const crudSchema = require("./model/crudSchemaModel");
const bodyparser = require("body-parser");
const express = require("express");

require("./model/config");

const user=require("./routers/userRouter")


const app = express();
const port = 5000;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


app.use("/", user)


app.listen(port, () => {
  console.log(`server is running on port no:${port}`);
});
