import bodyParser from 'body-parser';
import express from 'express'
import cors from "cors";
import connection from './db.js';
import Router from './routes/route.js'

const app = express();


app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", Router)

connection();
const PORT = 8000
app.listen(PORT, () => console.log(`whatsapp Backend Server is running on ${PORT}`));