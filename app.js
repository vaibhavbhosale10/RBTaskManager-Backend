const express = require("express"); //npm i express
const bodyParser = require("body-parser"); //npm i body-parser
const cors = require("cors"); //npm i cors
require("dotenv").config(); //npm i dotenv
require("./models/database");

const app = express();
app.use(cors());
app.use(express.static("Uploads"));
app.use((req, res, next) => {
  res.header("Access-Control-Expose-Headers", "x-accessToken, x-refreshToken");
  next();
});

app.use(bodyParser.json());

const port = process.env.PORT || 9090;

app.use("/api/users", require("./routes/user-route"));
app.use("/api/auth", require("./routes/auth-route"));
app.use("/api/admin", require("./routes/admin-route"));
app.use("/api/adminAuth", require("./routes/admin-auth-route"));
app.use("/api/task", require("./routes/task-route"));
app.use("/api/task-admin", require("./routes/task-admin-route"));

app.listen(port, () => console.log(`Server is listening on ${port}`));
