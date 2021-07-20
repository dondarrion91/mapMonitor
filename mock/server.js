const express = require("express");
const app = express();
const port = 3000;
const router = require("./src/routes/places.routes");
const cors = require("cors");

app.use(cors());

app.use("/api/v1", router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
