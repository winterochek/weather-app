import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import MonthStats from './pages/MonthStats/MonthStats';
import Header from './shared/Header/Header';
import Popup from './shared/Popup/Popup';

function App() {
   return (
      <div className='container'>
         <Header />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='month-statistics' element={<MonthStats />} />
         </Routes>
         {/* <Popup /> */}
      </div>
   );
}

export default App;
