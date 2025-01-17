//To see how the website should work, run "node index.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

function checker(req, res, next) {
    if (req.body.password === "ILoveProgramming") {
        next();
    } else {
            res.sendFile(__dirname + "/public/index.html");
    }
  }

app.use(checker);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  res.sendFile('secret.html', {root: 'public'});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
