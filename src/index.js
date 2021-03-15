// React
import React from 'react';
import ReactDOM from 'react-dom';

// Estilos
import './assets/css/index.css';
import RouterApp from './components/Router/RouterApp';

// Routes


const root = document.getElementById('root')
const element = <RouterApp />


ReactDOM.render(element, root);
