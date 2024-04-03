let express = require("express");
const app = express();
const port = 3000;
let router = require("./routers/index.js");

router(app);

app.listen(port, (error) => {
  if (error) {
    console.log("DEU ERRO!");
    return;
  }
  console.log("Esta rodando que é uma belezinha... ");
});
