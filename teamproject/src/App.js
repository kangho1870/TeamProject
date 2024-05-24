import Category from './components/common/Category';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import SearchHospital from './routes/hospital/SearchHospital';
import SearchHospitalTitle from './routes/hospital/SearchHospitalTitle';
import HospitalDetail from './routes/hospital/HospitalDetail';
import Community from './routes/community/Community.js'
import NoticeBoder from './routes/community/NoticeBoder.js';
import HealthMagzine from './routes/community/HealthMagzine.js';
import Login from './routes/community/Login.js';
import Magzine from './routes/community/Magzine.js';
function App() {
  return (
    <>
      <Routes>
        <Route path="/hospitals" element={<SearchHospital/>}></Route>
        <Route path='hospitals/search?' element={<SearchHospitalTitle/>}></Route>
        <Route path='hospitals/:hospitalId' element={<HospitalDetail></HospitalDetail>}></Route>
        <Route path='/community' element={<Community></Community>}></Route>
        <Route path='/NoticeBoder' element={<NoticeBoder></NoticeBoder>}></Route>
        <Route path='/HealthMagzine' element={<HealthMagzine></HealthMagzine>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Magzine' element={<Magzine></Magzine>}></Route>
      </Routes>
    </>
  );
}


export default App;
