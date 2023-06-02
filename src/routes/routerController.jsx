import Home from '../pages/HomeP'
import Resume from '../pages/Resume'
import Jobs from '../pages/Jobs'

const rutas = [
    {path: '/', component: Home},
    {path: '/Home', component: Home, exact: true},
    {path: '*', component: Home},

    
    {path: '/resume', component: Resume},

    {path: '/employment/freelancer', component: Jobs}
]

export default rutas;