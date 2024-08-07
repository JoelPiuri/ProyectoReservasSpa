var mongoose=require('mongoose');
var port='3600';
mongoose.promise=global.promise
mongoose.set("strictQuery", false)
var app=require('./app')
mongoose.connect('mongodb://localhost:27017/spa').then(()=>{
    console.log("Coneccion exitosa a laDB")
    app.listen(port, ()=>{
        console.log("Servidor corriendo en localhost:3600")
    })
}).catch(err=>console.log(err))