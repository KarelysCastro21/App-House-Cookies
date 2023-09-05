import React from "react";
import Pedidosya from "../Assets/pedidos-ya.jpg";
import Mercadopago from "../Assets/mercado-pago.png";
import Rappi from "../Assets/rappi.png";
import whatsapp  from "../Assets/whatsapp.png"


const Delivery = () => {
  const workInfoData = [
    {
      image: Pedidosya,
      link:"https://www.pedidosya.com.ar/restaurantes/buenos-aires/house-cookies-arg-menu?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action",
    },
    {
      image: Rappi,
      link:"https://www.rappi.com.ar/restaurantes/134416-house-cookies-arg",
    },
    { image: Mercadopago,
      link:"",
    },
    { image: whatsapp,
      link:"https://api.whatsapp.com/message/FBBHVTATKQ63O1?autoload=1&app_absent=0",
    },

  ];
  return (
    <div id='Delivery'className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Delivery</p>
        <h1 className="primary-heading">Haz tu Pedido</h1>
        <p className="primary-text">
          Tenemos diferentes opciones para que eligas tu servicio preferido de delivery.

        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data, index) => (
          <div className="work-section-info" key={index}>
            <div className="info-boxes-img-container">
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                <img src={data.image} alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delivery;