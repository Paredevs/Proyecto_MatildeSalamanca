import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import AppRouter from './routes/AppRouter';
import AuthProvider from './auth/AuthProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      
      <AppRouter />

        
    </AuthProvider>
  </React.StrictMode>
  
);

