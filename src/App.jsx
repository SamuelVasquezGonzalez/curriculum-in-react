import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import rutas from './routes/routerController';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {rutas.map((ruta) => (
            <Route key={ruta.path} element={<ruta.component />} path={ruta.path} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
