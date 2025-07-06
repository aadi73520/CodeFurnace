const express = require('express');
const app=express();
require('dotenv').config();
const main = require('./config/db');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/userAuth');
const redisClient = require('./config/redis');

app.use(express.json());
app.use(cookieParser());

app.use('/user',authRouter);


const InitlizeConnection = async ()=>{
        try{
                await Promise.all([redisClient.connect(),main()]);
                console.log("Connected to Redis");
                console.log("Connected to DB");
                app.listen(process.env.PORT,()=>{
                        console.log("Server listening at port number: "+ process.env.PORT);
                })
        }
        catch(err){
                console.log("Error: "+err);
        }
}
InitlizeConnection(); 


// main()
// .then(async ()=>{
//         console.log("Connected to DB")
//         app.listen(process.env.PORT,()=>{
//                 console.log("Server listening at port number: "+ process.env.PORT);
//         })
// })
// .catch(err => console.log("Error Occured: "+ err));
