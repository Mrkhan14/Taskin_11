import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { TOKEN } from './constants';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
   let [isLogin, setIsLogin] = useState(
      localStorage.getItem(TOKEN) ? true : false
   );
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path=''
               element={isLogin ? <HomePage /> : <Navigate to='/login' />}
            ></Route>
            {/* <Route path='login' element={<LoginPage />}></Route> */}
            <Route
               path='login'
               element={<LoginPage setIsLogin={setIsLogin} />}
            ></Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
