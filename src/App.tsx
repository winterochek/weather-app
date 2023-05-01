import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import MonthStats from './pages/MonthStats/MonthStats';

function App() {
   return (
      <div className='App'>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='month-statistics' element={<MonthStats />} />
         </Routes>
      </div>
   );
}

export default App;
