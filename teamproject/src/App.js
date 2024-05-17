import logo from './logo.svg';
import './App.css';
import Category from './components/common/Category';
import { Route, Router, Routes } from 'react-router-dom';
import SearchHospital from './routes/hospital/SearchHospital';
import SearchHospitalTitle from './routes/hospital/SearchHospitalTitle';
import HospitalDetail from './routes/hospital/HospitalDetail';
import HospitalAppointment from './components/hospital/HospitalAppointment';
import Mypage from "./routes/hospital/mypage/Mypage.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/hospitals" element={<SearchHospital/>}></Route>
        <Route path='hospitals/search?' element={<SearchHospitalTitle/>}></Route>
        <Route path='hospitals/:hospitalId' element={<HospitalDetail></HospitalDetail>}></Route>
        <Route path='hospitals/:hospitalId/appointment' element={<HospitalAppointment></HospitalAppointment>}></Route>

        <Route path='/mypage' element={<Mypage></Mypage>}></Route>
      </Routes>
    </>
  );
}

export default App;
