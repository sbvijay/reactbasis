import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './app_routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


ReactDOM.render(
<div className="div-center">
  <AppRoutes />
</div>,  
document.getElementById('root'));


