import Category from "../../components/common/Category";
import styles from "../../css/hospital/HospitalDetail.module.css";
import { useEffect, useState } from "react";
import AllDayTime from "../../components/hospital/AllDayTime";
import HospitalAppointment from "../../components/hospital/HospitalAppointment.js";

const { kakao } = window;

function HospitalDetail() {
    
    let [viewTime, setViewTime] = useState(false);
    let [appointmentView, setAppoinmentView] = useState(false);
    const modalClose = () => {
        setViewTime(false);
        setAppoinmentView(false);
    }

    return (
        <>
            <div className="container">
                <Category></Category>
                <section className={styles.mainTextContext}>
                    <div className={styles.hospitalTitleArea}>
                        <div className={styles.hospitalTitleBox}>
                            <h1 className={styles.hospitalTitle}>스타미피부과의원</h1>
                            <div style={{ marginRight: "24px" }}>
                                <span><i class="fa-solid fa-copy"></i></span>
                            </div>
                        </div>
                        <ul className={styles.hospitalTitleBoxUl}>
                            <div className={styles.hospitalTitleBoxUlDiv}>
                                <span className={styles.hospitalTitleContents}>병원 특징 || 병원 소개</span>
                            </div>
                        </ul>
                    </div>
                    <div className={styles.divLine}></div>
                    <div className={styles.hospitalArea}>
                        <div className={styles.hospitalTimeTitleBox}>
                            <h2 className={styles.hospitalSubTitle}>진료 시간</h2>
                            <div className={styles.hospitalTimeNoticeBox}>
                                <div><i class="fa-solid fa-circle" style={{width:"8px", height:"8px", borderRadius:"4px", marginRight:"5px"}}></i></div>
                                <div style={{width:"8px", height:"8px"}}></div>
                                <span style={{fontWeight:"500", fontSize:"14px", color:"rgb(113, 118, 122)"}}>확인필요</span>
                            </div>
                            <button className={styles.hospitalBtn} onClick={() => {setViewTime(true)}}>전체 요일</button>
                        </div>
                        <div className={styles.hospitalTimeBoxArea}>
                            <div className={styles.hospitalTodayTimeBox}>
                                <h4 className={styles.hospitalTimeSubTitle}>오늘</h4>
                                <span className={styles.hospitalTimeSubTitleSpan} style={{marginBottom: "16px"}}>확인 필요</span>
                            </div>
                            <div className={styles.hospitalTodayTimeBox}>
                                <h4 className={styles.hospitalTimeSubTitle}>휴게시간</h4>
                                <p className={styles.hospitalTimeSubTitleSpan}>확인 필요</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hospitalArea}>
                        <div className={styles.hospitalDepartmentTitleBox}>
                            <h2 className={styles.hospitalSubTitle}>진료 과목</h2>
                        </div>
                        <ul className={styles.hospitalDepartmentUl}>
                            <li className={styles.hospitalDepartmentLi}>피부과</li>
                            <li className={styles.hospitalDepartmentLi}>비뇨의학과</li>
                            <li className={styles.hospitalDepartmentLi}>성형외과</li>
                        </ul>
                    </div>
                    <div className={styles.hospitalArea}>
                        <div className={styles.hospitalLocationBox}>
                            <h2 className={styles.hospitalSubTitle}>병원 위치</h2>
                        </div>
                        <div className={styles.hospitalLocationDetailBox}>
                            <div className={styles.hospitalLocationContentBox}>
                                <span className={styles.hospitalLocationContentSpan}>부산광역시 부산진구 동천로 116 404호</span>
                                <button className={styles.hospitalBtn}>복사</button>
                            </div>
                            <div className={styles.hospitalLocationMap}>
                                <div id="map" className={styles.hospitalMap}>
                                    {<Kakao></Kakao>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hospitalArea}>
                        <div className={styles.hospitalPhoneArea}>
                            <h2 className={styles.hospitalSubTitle}>병원 번호</h2>
                        </div>
                        <div className={styles.hospitalPhoneBox}>
                            <span className={styles.hospitalPhoneSpan}>051-811-1201</span>
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
            <div id="time-modal" onClick={modalClose}>
                {viewTime && <AllDayTime></AllDayTime>}
            </div>
            <div id="appointment-modal" onClick={modalClose}>
                {appointmentView && <HospitalAppointment></HospitalAppointment>}
            </div>
        </>
    )
}

function Kakao() {

    useEffect(() => {
        const container = document.getElementById('map');
        let options = { //지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 5 //지도의 레벨(확대, 축소 정도)
        };
        let map = new kakao.maps.Map(container, options)
        let markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667);
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