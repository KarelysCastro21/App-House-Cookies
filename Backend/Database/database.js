const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {
        const connectionString = `mongodb+srv://karelysDev:${process.env.CONNECTION_STRING}@cluster0.mmhf5nk.mongodb.net/`;
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Base de datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar base de datos');
    }
};

module.exports = dbConnection;
