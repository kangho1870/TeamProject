import React from 'react';
import styled from 'styled-components';
import './App.css';
<<<<<<< HEAD
import {} from 'react-router-dom';
import Community from './community/community';


function App() {
  return (
    <div className="App"> 
    
      </div>    
=======
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
>>>>>>> 71956c33dd1a4be12170d2da1ef6e78da125fc19
  );
}


export default App;
