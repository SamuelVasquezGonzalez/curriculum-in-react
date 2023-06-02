import React, { useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import rutas from './routes/routerController';
import ChangeTitle from './components/changeTitle';

function App() {
  return (
    <Router>
      <div className="App">
        <ChangeTitle />
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
