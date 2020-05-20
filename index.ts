import express from "express";
import bodyParser from "body-parser";
const app = express();


const { port } = require('./conf');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import * as GodsController from "./controllers/GodsController";

app.route('/gods')
.get(GodsController.gods)
.post(GodsController.create)


app.route('/god/:name')
.get(GodsController.godByName)
.put(GodsController.update)
.delete(GodsController.del)

app.route('/pokebygod/:name')
.get(GodsController.PokeByName)

app.listen(port, () => {
    console.log(`Node JS Server started at port ${port}`);
});
