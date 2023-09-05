const nodemailer = require('nodemailer');


    const transporter = nodemailer.createTransport({
        pool: true,
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use TLS
        auth: {
            user: 'house.cookies.arg@gmail.com',
            pass: process.env.CONNECTION_MAIL,
        }
    });

    const enviarCorreo = async (destinatario, nombreApellido, linkDesuscripcion) => {
        try {
          await transporter.sendMail({
            from: 'tu_correo@gmail.com',
            to: destinatario,
            subject: 'HOUSE COOKIES ARG',
            html: `
            <p>¡Bienvenido/a, ${nombreApellido}!</p>
            <p>Gracias por suscribirte en nuestra aplicación.</p>
            <p>Si en algún momento deseas desuscribirte, puedes hacerlo haciendo clic <a href="${linkDesuscripcion}">aquí</a>.</p>
            <p>Saludos,</p>
            <p>Tu equipo de House Cookies ARG</p>
        `,
          });
          console.log('Correo electrónico enviado correctamente.');
        } catch (error) {
          console.error('Error al enviar el correo electrónico:', error);
        }
      };
      
      




module.exports = enviarCorreo;