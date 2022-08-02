import './App.css';
import NbaPage from './pages/NbaPage/NbaPage'
import TeamsPage from './pages/TeamsPage/TeamsPage'
import Error from './pages/ErrorPage/ErrorPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<NbaPage></NbaPage>}/>
    <Route path='/teams/:Id' element={<TeamsPage></TeamsPage>}/>
    <Route path='*' element={<Error></Error>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
