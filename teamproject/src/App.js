import logo from './logo.svg';
import './App.css';
import Category from './components/Category';
import { Route, Router, Routes } from 'react-router-dom';
import SearchHospital from './routes/SearchHospital';
import SearchHospitalTitle from './routes/SearchHospitalTitle';

function App() {
  return (
    <>
      <Routes>
        <Route path="/hospitals" element={<SearchHospital/>}></Route>
        <Route path='/hospitals/:keyword' element={<SearchHospitalTitle/>}></Route>
      </Routes>
    </>
  );
}

export default App;
