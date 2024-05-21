import React from 'react';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import SearchHospital from './routes/hospital/SearchHospital';
import SearchHospitalTitle from './routes/hospital/SearchHospitalTitle';
import HospitalDetail from './routes/hospital/HospitalDetail';
import HospitalAppointment from './components/hospital/HospitalAppointment';
import Mypage from "./routes/hospital/mypage/Mypage.js";
import Pharmacy from './routes/hospital/pharmacy/Pharmacy.js';
import MainPage from './routes/hospital/mainPage/MainPage.js';
import HospitalAdmin from './routes/hospital/hospitalAdmin/HospitalAdmin.js';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>

        <Route path="/hospitals" element={<SearchHospital/>}></Route>
        <Route path='hospitals/search?' element={<SearchHospitalTitle/>}></Route>
        <Route path='hospitals/:hospitalId' element={<HospitalDetail></HospitalDetail>}></Route>
        <Route path='hospitals/:hospitalId/appointment' element={<HospitalAppointment></HospitalAppointment>}></Route>
        <Route path='/hospitalAdmin' element={<HospitalAdmin></HospitalAdmin>}></Route>

        <Route path='/pharmacys' element={<Pharmacy></Pharmacy>}></Route>
        <Route path='/mypage' element={<Mypage></Mypage>}></Route>
      </Routes>
    </>
  );
}


export default App;
