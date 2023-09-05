Proyecto de Backend y Frontend para un Local de Galletas

Este es el repositorio de la versión beta de un proyecto que consiste en una aplicación web para un local comercial de galletas. 
La aplicación se divide en dos partes principales: el backend y el frontend.

Backend (Node.js, Express, MongoDB, Nodemailer, Express Validator y CORS)

El backend está construido utilizando Node.js y Express, lo que permite la creación de un servidor web robusto.
Se han implementado middleware para gestionar solicitudes HTTP y aplicar validaciones en la entrada de datos utilizando Express Validator.
Se utiliza la API de Nodemailer para enviar correos electrónicos y se ha integrado en el formulario de suscripción de usuarios.
La aplicación se conecta a una base de datos MongoDB para almacenar la información de suscriptores.
Se ha implementado un CRUD completo para el formulario de suscripción, lo que permite crear, leer, actualizar y eliminar registros de suscriptores.
Se ha implementado un CRUD para gestionar la ubicación de la tienda, permitiendo la creación, lectura, actualización y eliminación de información relacionada con la ubicación.
Se ha implementado CORS para permitir peticiones desde diferentes dominios y garantizar la seguridad de la aplicación.

Frontend (React y Nodemailer ,Google Maps API, Hooks)

El frontend está desarrollado en React, proporcionando una experiencia atractiva y responsiva para los usuarios.
Se ha modularizado el código utilizando componentes y se han empleado hooks para administrar el estado de la aplicación de manera eficiente.
Se implementó una ventana emergente al iniciar la página que muestra un formulario de suscripción interactivo que consume la API de Nodemailer en el backend.
Se implementó un carrito de compras para que los usuarios puedan seleccionar y comprar galletas de manera intuitiva.
Se utiliza la API de Google Maps para mostrar la ubicación de la tienda y proporcionar direcciones a los clientes.


Versionamiento
Este repositorio representa la versión beta de la aplicación. Se seguirá trabajando en el proyecto para agregar nuevas características y mejoras en el futuro.

Instrucciones de Ejecución
Para ejecutar el proyecto localmente, sigue estos pasos:

Clona este repositorio en tu máquina.
Instala las dependencias del backend y frontend ejecutando npm install en los directorios backend y frontend.
Configura las variables de entorno necesarias para el backend, incluyendo las credenciales de conexión a la base de datos MongoDB y otras configuraciones.
Ejecuta el servidor backend con npm start en el directorio backend.
Inicia la aplicación frontend con npm start en el directorio frontend.
Contribuciones
Las contribuciones son bienvenidas. Si deseas colaborar en el proyecto, por favor crea un fork del repositorio, implementa tus cambios y abre un pull request.

¡Esperamos que disfrutes explorando y contribuyendo a este proyecto!
