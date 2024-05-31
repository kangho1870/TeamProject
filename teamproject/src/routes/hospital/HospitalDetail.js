import Category from "../../components/common/Category";
import styles from "../../css/hospital/HospitalDetail.module.css";
import { useEffect, useState } from "react";
import AllDayTime from "../../components/hospital/AllDayTime";
import HospitalAppointment from "../../components/hospital/HospitalAppointment.js";
import { useParams } from "react-router-dom";
import axios from "axios";

const { kakao } = window;

function HospitalDetail() {

    const { hospitalId } = useParams();
    
    let [viewTime, setViewTime] = useState(false);
    let [appointmentView, setAppoinmentView] = useState(false);

    let [hospital, setHospital] = useState(null);
    const modalClose = () => {
        setViewTime(false);
        setAppoinmentView(false);
    }
    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        axios.get(`/hospitals/${hospitalId}`)
            .then(response => {
                setHospital(response.data.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error("error!!", error);
            })
    }, [hospitalId]);


    return (
        <>
            {hospital && (
                <div className="container">
                    <Category></Category>
                    <section className={styles.mainTextContext}>
                        <div className={styles.hospitalTitleArea}>
                            <div className={styles.hospitalTitleBox}>
                                <h1 className={styles.hospitalTitle}>{hospital.hospitalName}</h1>
                                <div style={{ marginRight: "24px" }}>
                                    <span><i class="fa-solid fa-copy"></i></span>
                                </div>
                            </div>
                            <ul className={styles.hospitalTitleBoxUl}>
                                <div className={styles.hospitalTitleBoxUlDiv}>
                                    <span className={styles.hospitalTitleContents}>{hospital.hospitalOrganLoc}</span>
                                </div>
                            </ul>
                        </div>
                        <div className={styles.divLine}></div>
                        <div className={styles.hospitalArea}>
                            <div className={styles.hospitalTimeTitleBox}>
                                <h2 className={styles.hospitalSubTitle}>진료 시간</h2>
                                <div className={styles.hospitalTimeNoticeBox}>
                                    
                                    {hospital.endTime == "" && (
                                        <>
                                            <div><i class="fa-solid fa-circle" style={{width:"8px", height:"8px", borderRadius:"4px", marginRight:"5px"}}></i></div>
                                            <div style={{width:"8px", height:"8px"}}></div>
                                            <span style={{fontWeight:"500", fontSize:"14px", color:"rgb(113, 118, 122)"}}>확인필요</span>
                                        </>
                                    )}
                                </div>
                                <button className={styles.hospitalBtn} onClick={() => {setViewTime(true)}}>전체 요일</button>
                            </div>
                            <div className={styles.hospitalTimeBoxArea}>
                                <div className={styles.hospitalTodayTimeBox}>
                                    <h4 className={styles.hospitalTimeSubTitle}>오늘</h4>
                                    {hospital.endTime == "" || hospital.startTime == "" && (
                                        <>
                                            <span className={styles.hospitalTimeSubTitleSpan} style={{marginBottom: "16px"}}>확인 필요</span>
                                        </>
                                    )}
                                    <span className={styles.hospitalTimeSubTitleSpan} style={{marginBottom: "16px"}}>{hospital.startTime.substring(0, 5)} ~ {hospital.endTime.substring(0, 5)}</span>
                                </div>
                                <div className={styles.hospitalTodayTimeBox}>
                                    <h4 className={styles.hospitalTimeSubTitle}>휴게시간</h4>
                                    <span className={styles.hospitalTimeSubTitleSpan}>확인 필요</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.hospitalArea}>
                            <div className={styles.hospitalDepartmentTitleBox}>
                                <h2 className={styles.hospitalSubTitle}>진료 과목</h2>
                            </div>
                            <ul className={styles.hospitalDepartmentUl}>
                                {hospital && hospital.hospitalCategory.map((v, i) => (
                                        <li key={i} className={`${hospital.hospitalCategory !== null ? styles.hospitalDepartmentLi : ""}`}>{v || ""}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={styles.hospitalArea}>
                            <div className={styles.hospitalLocationBox}>
                                <h2 className={styles.hospitalSubTitle}>병원 위치</h2>
                            </div>
                            <div className={styles.hospitalLocationDetailBox}>
                                <div className={styles.hospitalLocationContentBox}>
                                    <span className={styles.hospitalLocationContentSpan}>{hospital.hospitalAddress}</span>
                                    <button className={styles.hospitalBtn}>복사</button>
                                </div>
                                <div className={styles.hospitalLocationMap}>
                                    <div id="map" className={styles.hospitalMap}>
                                        {hospital && <Kakao latitude={hospital.hospitalLatitude} longitude={hospital.hospitalLongitude}></Kakao>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.hospitalArea}>
                            <div className={styles.hospitalPhoneArea}>
                                <h2 className={styles.hospitalSubTitle}>병원 번호</h2>
                            </div>
                            <div className={styles.hospitalPhoneBox}>
                                <span className={styles.hospitalPhoneSpan}>{hospital.hospitalPhone}</span>
                                <button className={styles.hospitalBtn}>전화</button>
                            </div>
                        </div>
                        <div className={styles.hospitalAppointment}>
                            <div className={styles.hospitalAppointmentBtnBox}>
                                <button className={styles.hospitalAppointmentBtn} onClick={() => {setAppoinmentView(true)}}>예약하기</button>
                            </div>
                        </div>
                    </section>
                </div>
            )}
            {viewTime && hospital !== null &&
                <div id="time-modal" onClick={modalClose}>
                    <AllDayTime hospital={hospital}></AllDayTime>
                </div>
            }
                
            {appointmentView && hospital !== null &&
                <div id="appointment-modal" onClick={handleContentClick}>
                    <div onClick={handleContentClick}>
                        <HospitalAppointment modalClose={modalClose} hospital={hospital}></HospitalAppointment>
                    </div>
                </div>
                
            }
        </>
    )
}

function Kakao({latitude, longitude}) {
    useEffect(() => {
        const container = document.getElementById('map');
        let options = { //지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(longitude, latitude), //지도의 중심좌표.
          level: 1 //지도의 레벨(확대, 축소 정도)
        };
        let map = new kakao.maps.Map(container, options)
        let markerPosition  = new kakao.maps.LatLng(longitude, latitude);
        let marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    }, [])
  
  return (
    <div id="map" style={{ width: "500px", height: "400px" }}>

    </div>
  )
}

export default HospitalDetail;