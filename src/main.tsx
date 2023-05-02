import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import ThemeContextProvider from './context/ThemeContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <BrowserRouter>
      <ThemeContextProvider>
         <App />
      </ThemeContextProvider>
   </BrowserRouter>
);
