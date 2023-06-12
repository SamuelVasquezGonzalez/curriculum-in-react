import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/HomeP'
import Resume from '../pages/Resume'
import Jobs from '../pages/Jobs'


export const router = createBrowserRouter([
    {path: '/', element: <Home />},
    {path: '/Home', element: <Home />},
    
    
    {path: '/resume', element: <Resume />},
    {path: '/employment/freelancer', element: <Jobs />},

    {path: '*', element: <Home />}
]);