import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export const success = Toastify({
    text: 'Success',
    duration: 3000,
    close: true,
    gravity: 'top',
    position: 'right',
    backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
    stopOnFocus: true,
});

export const error = Toastify({
    text: 'Too many matches found. Please enter a more specific query',
    duration: 3000,
    close: true,
    gravity: 'top',
    position: 'right',
    backgroundColor: 'linear-gradient(to right, #FF416C, #FF4B2B)',
    stopOnFocus: true,
});

export const warning = Toastify({
    text: 'Oh No!',
    duration: 3000,
    close: true,
    gravity: 'top',
    position: 'right',
    backgroundColor: 'linear-gradient(to right, #f12711, #f5af19)',
    stopOnFocus: true,
});
