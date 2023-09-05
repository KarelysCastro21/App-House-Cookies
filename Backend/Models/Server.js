const express = require("express");
const cors = require("cors"); 
const dbConnection = require('../Database/database')

require('dotenv').config();

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = "/api/usuarios";
        this.LocationPath ='/api/Location';
        this.ConsultaPath = '/api/Consulta';
       
        
       

        //Middlewares
        this.app.use(cors());
        this.middlewares();
        this.app.use(express.json());
        

        //Rutas de mi aplicación
        this.routes();

        //ejecucion base de datos 
        this.conectarDB();

        


    }
    middlewares() {

        this.app.use(cors({
            origin: 'http://localhost:3000', // Cambia esto por la URL de tu frontend
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            credentials: true,
        }));
        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio Público
        this.app.use(express.static("public")); 
    }

    routes() {
        this.app.use(this.usuarioPath, require("../Routes/Usuarios"));
        this.app.use(this.LocationPath,require('../Routes/Location'));
        this.app.use(this.ConsultaPath, require('../Routes/Consulta'));
    
      }

    async conectarDB() {
        await dbConnection();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto", this.port);
        });
    }
     
}

module.exports = Server;