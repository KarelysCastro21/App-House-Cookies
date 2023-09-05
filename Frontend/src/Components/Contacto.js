import React from "react";
import  { useState } from "react";
import axios from "axios"; 
import '../hojas-estilo/contacto.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from "@mui/material";
import TarjetaRegalo from '../Assets/tarjeta-regalo.png';




const Contacto = () => {
    const [email, setEmail] = useState("");
    const [asunto, setAsunto] = useState("");
    const [consulta, setMensaje] = useState("");
    const [consultaEnviada, setConsultaEnviada] = useState(false);
    const [botonTexto, setBotonTexto] = useState("Enviar Consulta");
    const [emailError, setEmailError] = useState("");
  const [asuntoError, setAsuntoError] = useState("");
  const [consultaError, setConsultaError] = useState("");

  
    const handleSubmit = async (e) => {
      e.preventDefault();

      setEmailError("");
      setAsuntoError("");
      setConsultaError("");

      
    if (!email) {
        setEmailError("Email es requerido");
      }
      if (!asunto) {
        setAsuntoError("Asunto es requerido");
      }
      if (!consulta) {
        setConsultaError("Consulta es requerida");
      }

       if (!email || !asunto || !consulta) {
      // Si algún campo está vacío, no enviar la consulta
      return;
    }
  
      try {
        const response = await axios.post( `${process.env.REACT_APP_BACKEND_URL}/api/Consulta`, {
          email,
          asunto,
          consulta,
        });
  
        console.log(response.data); // Maneja la respuesta del backend
        if (response.data.mensaje === 'Consulta enviada correctamente') {
            setConsultaEnviada(true); // Muestra el aviso de consulta enviada
            // Si la consulta se envió correctamente, limpiamos los campos
            setEmail("");
            setAsunto("");
            setMensaje("");
            setBotonTexto("¡CONSULTA ENVIADA!");
            
          }
      } catch (error) {
        console.error(error);
      }
    };
    return (
        <div id='Contacto' className="contact-page">
            <div  className="contact-page-wrapper">
                
                <h2 className="text-contacto">Dejanos tu Consulta</h2>
                <div className="contact-form-container">
                    <input type="text" placeholder="Tu Email" className="contact-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailError && <p className="error">{emailError}</p>}
                    <input type="text" placeholder="Asunto" className="contact-input" value={asunto} onChange={(e) => setAsunto(e.target.value)} />
                    {asuntoError && <p className="error">{asuntoError}</p>}
                    <textarea placeholder=" Mensaje" className="contact-textarea" value={consulta} onChange={(e) => setMensaje(e.target.value)} />
                    {consultaError && <p className="error">{consultaError}</p>}
                    <button className="button-contacto" onClick={handleSubmit}disabled={consultaEnviada }>
                    {botonTexto}
                    </button>
                    {consultaEnviada && <p className="avisoConsulta"> </p>}
                </div>
            </div>



            <Card className="contact-card">
                <CardContent>
                    <Typography className="tex-card-gift1" >
                        Regala una Gift
                    </Typography>
                    <Typography className="tex-card-gift2">
                        Regala una tarjeta de regalo para alguien especial.
                    </Typography>
                    <CardMedia 
                        component="img"
                        alt="tarjeta de regalo"
                        className="tarjeta-regalo"
                        src={TarjetaRegalo}
                        title="giftcard"
                        style={{ maxWidth: '80%', maxHeight: '100%' }}
                    />
                </CardContent>
            </Card>

        </div>
    );
}
export default Contacto;