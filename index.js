const express = require("express");
const app = express();
const router = express.Router();

router.use("/products", (req, res, next) => {
  console.log("request: ", req);
});

app.use("/", router);

app.use(() => {
  console.log("hello server");
});

app.listen(5000);
