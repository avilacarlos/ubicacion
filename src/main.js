import './style.css';
import Parallax from 'parallax-js';
import '@lottiefiles/lottie-player';

document.addEventListener('DOMContentLoaded', () => {
    
    // Parallax
    const scene = document.getElementById('logo-parallax-scene');
    if (scene) {
        new Parallax(scene, {
            relativeInput: true, // Importante para que funcione bien con el giroscopio del cel
            hoverOnly: false 
        });
    }

    // Animación Lottie
    const contenedorAnimacion = document.getElementById('contenedor-animacion');
    const lottiePlayer = document.getElementById('mi-animacion');

    if (contenedorAnimacion && lottiePlayer) {
        setTimeout(() => {
            contenedorAnimacion.classList.add('visible');
            lottiePlayer.play();
        }, 2000);

        lottiePlayer.addEventListener('complete', () => {
            contenedorAnimacion.classList.remove('visible');
        });
    }
});