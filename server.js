
const express= require('express');
const bodyparser = require('body-parser');
const cors= require('cors');
const bcrypt= require('bcrypt-nodejs');
const app = express();
const knex= require('knex');
const register = require('./controllers/register.js');
const signin = require('./controllers/signin');
const image = require('./controllers/image');
const profile = require('./controllers/profile');



const db=knex({
  client: 'pg',
  connection: {
    connectionString : process.env.DATABASE_URL,
    ssl: true
  }
});


app.use(cors());
app.use(bodyparser.json());





app.get('/',(req,res)=>{res.json("It is Working")});

app.post('/signin',(req,res)=>{signin.handleSignin(req,res,db,bcrypt)})

app.post('/register',(req,res)=> {register.handleRegister(req,res,db,bcrypt)})

app.put('/image',(req,res)=>{image.handleImage(req,res,db)})

app.post('/imageurl',(req,res)=>{image.handleApiCall(req,res)})

app.get('/profile/:id',(req,res)=>{profile.handleProfile(req,res,db)})

app.listen(process.env.PORT || 3000,() =>{
	console.log("app is running on port 3000");
});

