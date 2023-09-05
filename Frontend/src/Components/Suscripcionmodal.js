import React, { useState} from 'react';
import axios from 'axios';
import { Modal, Paper, TextField, Button, IconButton } from '@mui/material';
import { Email, Person, Cake, Close } from '@mui/icons-material';
import '../hojas-estilo/modal.css';
import Suscribete from '../Assets/suscripcion.png';


axios.defaults.validateStatus = function (status) {
  return true; // Incluso se manejarán los códigos de estado no válidos
};

const SubscriptionModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [nombreApellido, setNombreApellido] = useState('');
  const [cumpleaños, setCumpleaños] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

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
      const getUserResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/usuarios?email=${trimmedEmail}`);

      if (getUserResponse.status === 200) {
        setIsRegistered(true);
        setUserId(getUserResponse.data.userId);
        setIsUpdating(true)


        // Usuario ya registrado, realiza la solicitud PUT para actualizarlo
        const userId = getUserResponse.data.userId;
        const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/usuarios/${userId}`, {
          email: trimmedEmail,
          nombreApellido,
          cumpleaños: formattedCumpleaños,
        });

        if (response.status === 200) {
          console.log('Usuario actualizado exitosamente');
          setIsUpdating(true);
          setRegistroExitoso(false);
        }
      } else if (getUserResponse.status === 404) {
        // Usuario no registrado, realiza la solicitud POST para registrarlo
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/usuarios`, {
          email: trimmedEmail,
          nombreApellido,
          cumpleaños: formattedCumpleaños,
        });

        if (response.status === 201) {
          console.log('Registro exitoso');
          setRegistroExitoso(true);
          setIsUpdating(false);
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
        const response = await axios.put(`http://localhost:8080/api/usuarios/${userId}`, {
          email,
          nombreApellido,
          cumpleaños,
        });

        if (response.status === 200) {
          console.log('Usuario actualizado exitosamente');
          setIsUpdating(true);
          setRegistroExitoso(false);
        }
      } else {
        console.log('No se puede actualizar el usuario sin un ID');
      }
    } catch (error) {
      // ... (manejo de errores)
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
            {registroExitoso && !isUpdating && (
              <p className="success-message">Gracias por suscribirte</p>
            )}
            {isUpdating && (
              <p className="success-message">Actualización exitosa</p>
            )}
            {errorMessage && (
              <p className="error-message">{errorMessage}</p>
            )}
            <h2>{isRegistered ? 'Usted ya se encuentra registrado' : 'SUSCRIPCIÓN'}</h2>
            <TextField
              label="Email"
              fullWidth
              InputProps={{ startAdornment: <Email /> }}
              className="input"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Nombre y Apellido"
              fullWidth
              InputProps={{ startAdornment: <Person /> }}
              className="input"
              placeholder="Ingresa tu nombre y apellido"
              value={nombreApellido}
              onChange={(e) => setNombreApellido(e.target.value)}
            />
            <TextField
              label="Cumpleaños"
              fullWidth
              InputProps={{ startAdornment: <Cake /> }}
              className="input"
              placeholder="Dia / Mes"
              value={cumpleaños}
              onChange={(e) => setCumpleaños(e.target.value)}
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