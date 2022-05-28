import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import cookieParser from "cookie-parser";

import usersRoute from './routes/users.js';



const app = express();
const PORT = 5000;

//MiddleWare
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


app.use('/users', usersRoute);

app.get("/", (req,res) => res.send("Welcome to my first API"));

app.listen(PORT, ()=>{
    console.log(`Server is running on port : http://localhost:${PORT}`);
}); 