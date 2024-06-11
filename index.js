import express from "express";
import router from "./routes/router.js";
import { engine } from "express-handlebars";
import expressFileUpload from "express-fileupload";

const app = express();
const PORT = process.env.PORT || 3000;

//Motor de Plantilla
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./views");

//Middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(expressFileUpload());

//Rutas
app.use("/", router);

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
