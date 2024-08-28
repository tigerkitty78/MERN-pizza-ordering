const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://mudaligenavithma3:Navithma78@cluster0.ymlgagf.mongodb.net/mern-pizza'

mongoose.connect(mongoURL, {useUnifiedTopology: true , useNewUrlParser: true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('mongodb connected');
})

db.on('error' , ()=>{
    console.log('mongodb connection failed');
})

module.exports = mongoose