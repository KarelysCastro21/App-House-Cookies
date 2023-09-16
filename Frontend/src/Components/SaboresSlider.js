import React, { useRef, useState, useEffect } from 'react';
import Sabores from '../Components/Sabores';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import '../hojas-estilo/sabores.css';

const SaboresSlider = () => {

    const cards = [
        {
            image: require('../Assets/chocolate-chip.png'),
            description: 'Chocolate Chip',
        },
        {
            image: require('../Assets/choco-white.png'),
            description: 'choco white',
        },
        {
            image: require('../Assets/membrillo.png'),
            description: 'membrillo',
        },
        {
            image: require('../Assets/polvorosas.jpg'),
            description: 'polvorosa',
        },
       
        {
            image: require('../Assets/choco-rocklets.png'),
            description: 'Choco rocklets',
        }, {
            image: require('../Assets/alfacookie.png'),
            description: 'Alfaccokies',
        },
        {
            image: require('../Assets/festival.png'),
            description: 'Festival ',
        },
        {
            image: require('../Assets/alfajores.png'),
            description: 'Alfajores',
        },
        {
            image: require('../Assets/doble-chocolate.png'),
            description: 'Doble Chocolate',
        },



    ];

    const cardWidth = 200;
    const visibleCards = 6;
    const totalCards = cards.length;
    const duplicatedCards = [...cards, ...cards];
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [expandedCardIndex, setExpandedCardIndex] = useState(-1);

    const scrollRight = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalCards);
    };

    const scrollLeft = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalCards) % totalCards);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalCards);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [currentSlide, totalCards]);

    const handleCardClick = (index) => {
        if (index === expandedCardIndex) {
            setExpandedCardIndex(-1); // Si se hace clic en la misma tarjeta, cierra la descripción
        } else {
            setExpandedCardIndex(index);
        }
    };

    return (
        <div id='Sabores' className="sabores-slider-container">
            <div className="Sabores-slaider-text-container">
                <p className="primary-subheading">Sabores</p>
                <h2 className="primary-heading">
                    Una Cookie ideal para cada Ocasión
                </h2>
                <p className="primary-text">
                    Tenemos 18 sabores de cookies, todos fueron hechos a mano y creados para ser los mas deliciosos para satisfacer tu paladar!
                </p>
            </div>
            <div className="sabores-slider">
                <IconButton onClick={scrollLeft} className="sabores-button sabores-button-left">
                    <ChevronLeftIcon />
                </IconButton>
                <div className="sabores-slider"></div>
                <div
                    ref={sliderRef}
                    className="sabores-slider-content"
                    style={{
                        width: `${cardWidth * visibleCards}px`,
                        transform: `translateX(-${currentSlide * cardWidth}px)`,
                        display: 'flex',
                        transition: 'transform 0.3s ease-in-out',
                    }}
                >

                    {duplicatedCards.map((card, index) => (
                        <Sabores
                            key={index}
                            image={card.image}
                            description={card.description}
                            onClick={() => handleCardClick(index)}
                            isExpanded={index === expandedCardIndex}
                        />
                    ))}
                </div>
                <IconButton onClick={scrollRight} className="sabores-button sabores-button-right">
                    <ChevronRightIcon />
                </IconButton>

            </div>
        </div>
    );
};

export default SaboresSlider;