import Home from '../pages/HomeP'
import Resume from '../pages/Resume'
import Jobs from '../pages/Jobs'

const rutas = [
    {path: '/', element: Home},
    {exact: true, path: '/Home', element: Home},
    {path: '*', element: Home},

    
    {exact: true, path: '/resume', element: Resume},

    {exact: true, path: '/employment/freelancer', element: Jobs}
]

export default rutas;