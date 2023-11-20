import ReactDOM from 'react-dom/client';
import './assets/style/index.css'
import './assets/style/style.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Routing';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router} />

);