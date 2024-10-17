// src/pages/login/login-slider.tsx
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import LoginBg from '../../assets/login-bg.webp';
import './login-slider.css'; // Importar los estilos personalizados

import SliderImg1 from '../../assets/Image1.png';
import SliderImg2 from '../../assets/Image2.png';
import SliderImg3 from '../../assets/Image3.png';

export default function LoginSlider() {
  const [activeSlide, setActiveSlide] = useState(0); // Estado para controlar la slide activa

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Habilita el cambio automático
    autoplaySpeed: 5000, // Cambia cada 5 segundos
    beforeChange: (_current: number, next: number) => setActiveSlide(next), // Actualiza el estado con la slide activa
    customPaging: () => <div className="dot" />,
    dotsClass: 'slick-dots custom-dots', // Estilos personalizados
  };

  const slides = [
    {
      src: SliderImg1,
      legend: 'Ten todos los archivos en un mismo lugar',
    },
    {
      src: SliderImg2,
      legend: 'Conoce el estado de tus órdenes',
    },
    {
      src: SliderImg3,
      legend: 'Chatea con tus clientes',
    },
  ];

  return (
    <Box
      sx={{
        width: '50%',
        backgroundImage: `url(${LoginBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <img
                src={slide.src}
                alt={`Imagen ${index + 1}`}
                style={{
                  maxWidth: '80%',
                  width: 'auto',
                  height: 'auto',
                  maxHeight: '600px',
                  objectFit: 'cover',
                  margin: '40px auto',
                }}
              />
            </div>
          ))}
        </Slider>

        {/* Leyenda de la imagen activa */}
        <Typography
          variant="h5"
          align="center"
          fontWeight={700}
          sx={{ marginTop: 2, color: 'white' }}
        >
          {slides[activeSlide]?.legend}
        </Typography>
      </Box>
    </Box>
  );
}
