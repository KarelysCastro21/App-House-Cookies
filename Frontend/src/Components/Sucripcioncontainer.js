import React, { useState, useEffect } from 'react';
import SubscriptionModal from '../Components/Suscripcionmodal';

import '../hojas-estilo/modal.css'; 

const SubscriptionContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Abre el modal después de 5000 milisegundos (5 segundos)
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <SubscriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default SubscriptionContainer;