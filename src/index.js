//Archivo para arrancar la aplicacion

//Creo el servidor por donde se va a desplegar la aplicacion con ayuda de express
//https:localhost/4000
import dotenv from "dotenv";
import app from './app.js'
import {connectDB} from "./db.js"

dotenv.config();
connectDB();
app.listen(
    process.env.PORT,
    console.log("listening on port " + process.env.PORT)
  );