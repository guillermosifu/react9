import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PrimerComponente from './AppEjemplo';
import Form from './componentes/Form';
import FormRegister from './FormRegister';
import FormUsuario from './FormUser';
import Git from './PracticaGit'

 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
   <Git/>
  
        
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
