import './index.css'
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// const blob = document.getElementById('blob');

// document.body.onpointermove = (event) => {
//   const {clientX, clientY} = event;

// blob.style.left = `${clientX}px`;
// blob.style.top = `${clientY}px`;
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<div>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </div>
);
