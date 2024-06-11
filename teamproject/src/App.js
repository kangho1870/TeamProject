import Community from './routes/community/Community.js'
import NoticeBoder from './routes/community/NoticeBoder.js';
import HealthMagzine from './routes/community/HealthMagzine.js';
import Login from './routes/community/Login.js';
import Magzine from './routes/community/Magzine.js';
import React from 'react';
import { Outlet, Route, Router, Routes } from 'react-router-dom';
import SearchHospital from './routes/hospital/SearchHospital';
import SearchHospitalTitle from './routes/hospital/SearchHospitalTitle';
import HospitalDetail from './routes/hospital/HospitalDetail';
import HospitalAppointment from './components/hospital/HospitalAppointment';
import Mypage from "./routes/hospital/mypage/Mypage.js";
import Pharmacy from './routes/hospital/pharmacy/Pharmacy.js';
import MainPage from './routes/hospital/mainPage/MainPage.js';
import HospitalAdmin from './routes/hospital/hospitalAdmin/HospitalAdmin.js';
import './App.css';
import MypageArtilce from './routes/hospital/mypage/MypageArticle.js';
import MypageMedicalHistory from './routes/hospital/mypage/MypageMedicalHistory.js';
import LoginHandler from './components/common/LoginHandler.js';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>

        <Route path="/hospitals" element={<SearchHospital/>}></Route>
        <Route path='hospitals/search?' element={<SearchHospitalTitle/>}></Route>
        <Route path='hospitals/:hospitalId' element={<HospitalDetail></HospitalDetail>}></Route>

        <Route path='/community' element={<Community></Community>}></Route>
        <Route path='/noticeBoder' element={<NoticeBoder></NoticeBoder>}></Route>
        <Route path='/healthMagzine' element={<HealthMagzine></HealthMagzine>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/magzine' element={<Magzine></Magzine>}></Route>

        <Route path='/hospitalAdmin' element={<HospitalAdmin></HospitalAdmin>}></Route>

        <Route path='/pharmacys' element={<Pharmacy></Pharmacy>}></Route>
        <Route path='/mypage' element={<Mypage></Mypage>}>
          <Route path=':title' element={<Outlet/>}>
              <Route path='articles' element={<MypageArtilce></MypageArtilce>} />
              <Route path='appointment'/>
              <Route path='medicalHistory' element={<MypageMedicalHistory />} />
          </Route>
        </Route>
        <Route path='/api/login/kakao' element={<LoginHandler></LoginHandler>}></Route>
      </Routes>
    </>
  );
}


export default App;
