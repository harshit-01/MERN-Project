import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRouter from './routes/posts.js'
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/posts',postRouter);
app.get('/',(req, res) =>{
     res.send("Hello to Memories API");
})
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => app.listen(PORT,()=>
   console.log(`Server running on port :${PORT}`)
)).catch(err =>console.log(err.message));
mongoose.set('useFindAndModify', false);