var mongoose=require('mongoose');
var port='3600';

mongoose.promise=global.promise
mongoose.set("strictQuery", false)
var app=require('./app')

mongoose.connect('mongodb://localhost:27017/spa', {
}).then(() => {
    console.log("Conexión exitosa a la DB");
    app.listen(port, () => {
        console.log(`Servidor corriendo en localhost:${port}`);
    });
}).catch(err => console.log("Error al conectar a la base de datos:", err));

