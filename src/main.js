import './style.css';
import Parallax from 'parallax-js';


document.addEventListener('DOMContentLoaded', () => {
    
    // Parallax
    const scene = document.getElementById('logo-parallax-scene');
    if (scene) {
        new Parallax(scene, {
            relativeInput: true, // Importante para que funcione bien con el giroscopio del cel
            hoverOnly: false 
        });
    }
});
