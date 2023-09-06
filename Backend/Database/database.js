const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async ()=>{

    try{
        await mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Base de datos online');
       
    }catch (error) {
        console.log(error);
        throw new Error('Error al iniciar base de datos');


    }
};

module.exports= dbConnection;
