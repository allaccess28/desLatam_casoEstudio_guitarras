import express from "express";
import router from "./routes/router.js";
import exhbs from "express-handlebars";
import path from "path";
const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.set("view engine", "hbs");
app.engine("hbs", exhbs.engine({
    layoutsDir: __dirname + "/views",
    extname: "hbs",
    defaultLayout: "main",
    }))
    
app.use("/", router);

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));