const nodemailer = require('nodemailer');


const enviarConsulta = async (req, res) => {
    try {
      const { email, asunto, consulta } = req.body;
  
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
  
      const mailOptions = {
        from: email, // Tu correo
        to: 'house.cookies.arg@gmail.com', // Correo destinatario
        subject: `Consulta de ${email}  ${asunto}`,
        text: consulta
      };
  
      const info = await transporter.sendMail(mailOptions);
      console.log('Correo enviado:', info.response);
      res.status(200).json({ mensaje: 'Consulta enviada correctamente' });
    } catch (error) {
      console.error('Error al enviar la consulta:', error);
      res.status(500).json({ mensaje: 'Error al enviar la consulta' });
    }
  };
  
  module.exports = {
    enviarConsulta
  };