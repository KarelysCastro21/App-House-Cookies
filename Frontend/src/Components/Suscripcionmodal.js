import React, { useState} from 'react';
import axios from 'axios';
import { Modal, Paper, TextField, Button, IconButton } from '@mui/material';
import { Email, Person, Cake, Close } from '@mui/icons-material';
import '../hojas-estilo/modal.css';
import Suscribete from '../Assets/suscripcion.jpg';


axios.defaults.validateStatus = function (status) {
  return true; // Incluso se manejarán los códigos de estado no válidos
};

const isProduction = process.env.NODE_ENV === 'production';

const apiUrl = isProduction
  ? process.env.REACT_APP_BACKEND_URL // URL de producción en Vercel
  : 'http://localhost:8080'; // URL local en desarrollo

const SubscriptionModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [nombreApellido, setNombreApellido] = useState('');
  const [cumpleaños, setCumpleaños] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);


  const handleSubscribe = async () => {
    try {
      
        // Verifica que todos los campos estén llenos
        if (!email || !nombreApellido || !cumpleaños) {
          setErrorMessage('Por favor, complete todos los campos.');
          return;
        }
  

      const trimmedEmail = email.trim();
      const [dia, mes] = cumpleaños.split('/');
      const formattedCumpleaños = `${dia}/${mes}`;

      // Realiza una solicitud GET para verificar si el usuario ya está registrado
      const getUserResponse = await axios.get(`${apiUrl}/api/usuarios?email=${trimmedEmail}`);

      if (getUserResponse.status === 200) {
        console.log('Usuario ya se encuentra registrado');
        setIsRegistered(true);
        setUserId(getUserResponse.data.userId);
      
       
      } else if (getUserResponse.status === 404) {
        // Usuario no registrado, realiza la solicitud POST para registrarlo
        const response = await axios.post(`${apiUrl}/api/usuarios`, {
          email: trimmedEmail,
          nombreApellido,
          cumpleaños: formattedCumpleaños,
        });

        if (response.status === 201) {
          console.log('Registro exitoso');
          setRegistroExitoso(true);
          
          setTimeout(onClose, 3000);
        }
      }
    } catch (error) {
      console.error('Error al suscribirse:', error);
      setErrorMessage('Error al suscribirse: ' + error.message);
    }
  };

  const handleUpdate = async () => {
    try {
      if (userId) {
        // Realizar la solicitud PUT con el ID del usuario
        const response = await axios.put(`${apiUrl}/api/usuarios/${userId}`, {
          email,
          nombreApellido,
          cumpleaños,
        });

        if (response.status === 200) {
          console.log('Usuario actualizado exitosamente');
        
          setRegistroExitoso(false);
          setTimeout(onClose, 3000);
        }
      } else {
        console.log('No se puede actualizar el usuario sin un ID');
      }
    } catch (error) {
      console.error('Error al suscribirse:', error);
      setErrorMessage('Error al suscribirse: ' + error.message);
    }
  };

  const buttonText = isRegistered ? 'Actualizar Datos' : 'Suscribirse';



  return (
    <Modal open={isOpen} onClose={onClose} className="custom-modal">
      <Paper className="modal-paper">
        <div className="modal-content">
          <div className="image-container">
            <img src={Suscribete} alt="Imagen" className="modal-image" />
          </div>
          <div className="form-container">
            <div className="close-button-container">
              <IconButton className="close-button" onClick={onClose}>
                <Close />
              </IconButton>
            </div>
            {registroExitoso &&  (
              <p className="success-message">Gracias por suscribirte</p>)
             }
            {errorMessage && (
              <p className="error-message">{errorMessage}</p>
            )}
            <h2>{isRegistered ? 'Correo Electronico Existente ¿Desea Actualizar sus Datos?' : 'Suscripción'}</h2>
            <TextField
              label="Email"
              fullWidth
              InputProps={{ startAdornment: <Email /> }}
              className="input"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: '16px' }} 
            />
            <TextField
              label="Nombre y Apellido"
              fullWidth
              InputProps={{ startAdornment: <Person /> }}
              className="input"
              placeholder="Ingresa tu nombre y apellido"
              value={nombreApellido}
              onChange={(e) => setNombreApellido(e.target.value)}
              style={{ marginBottom: '16px' }} 
            />
            <TextField
              label="Cumpleaños"
              fullWidth
              InputProps={{ startAdornment: <Cake /> }}
              className="input"
              placeholder="Dia / Mes"
              value={cumpleaños}
              onChange={(e) => setCumpleaños(e.target.value)}
              style={{ marginBottom: '16px' }} 
            />
            <div className="button-container">
              <Button
                variant="contained"
                style={{ backgroundColor: '#d2ad19', color: 'white' }}
                onClick={isRegistered ? handleUpdate : handleSubscribe}
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </Paper>
    </Modal>
  );
};



export default SubscriptionModal;