import React, { useState } from "react";
import styles from "../../css/hospitalAdmin/AppointmentStatus.module.css";
import { Table } from "react-bootstrap";

function AppointmentStatus() {
    let [userInfo, setUserInfo] = useState([
        {
            no: "1",
            appointmentTime: "10:00",
            appointmentStatus: 2,
            name: "홍길동",
            age: 20,
            gender: 0,
            symptom: "머리가 아파요",
            uniqueness: "3년 전 심장 수술",
            currentMedicationList: "심장 약"
        },
        {
            no: "2",
            appointmentTime: "13:00",
            appointmentStatus: 1,
            name: "홍길서",
            age: 35,
            gender: 1,
            symptom: "배가 아파요",
            uniqueness: "위암 치료중",
            currentMedicationList: "알러지 약"
        },
        {
            no: "2",
            appointmentTime: "13:00",
            appointmentStatus: 0,
            name: "홍길서",
            age: 35,
            gender: 1,
            symptom: "배가 아파요",
            uniqueness: "위암 치료중",
            currentMedicationList: "알러지 약"
        }
    ])

    let [moreInfo, setMoreInfo] = useState(Array(userInfo.length).fill(false));
    const toggleActive = (index) => {
        setMoreInfo((prev) =>
            prev.map((item, i) => (i === index ? !item : item))
        );
    };
    let [navTitle, setNavTitle] = useState(1);

    return (
        <>
            <div className={styles.appointmentStatusArea}>
                <div className={styles.appointmentTitle}>
                    <Table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>예약시간</th>
                                <th>진료현황</th>
                                <th>이름</th>
                                <th>나이</th>
                                <th>성별</th>
                                <th>증상</th>
                                <th>진료 진행도</th>
                                <th>자세히</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userInfo.map((v, i) => (
                                <React.Fragment key={v.no}>
                                    <tr>
                                        <td>{v.no}</td>
                                        <td>{v.appointmentTime}</td>
                                        <td style={{ 
                                            color: v.appointmentStatus === 0 ? "grey"
                                                    : v.appointmentStatus === 1 ? "rgb(146, 235, 98)"
                                                    : "rgb(87, 199, 244)"
                                         }}>
                                            <i class="fa-solid fa-circle"></i>
                                        </td>
                                        <td>{v.name}</td>
                                        <td>{v.age} 세</td>
                                        <td>{v.gender == 0 ? "남" : "여"}</td>
                                        <td>{v.symptom}</td>
                                        <td>
                                            <button style={{ color:"white", backgroundColor: "grey", borderRadius:"5px", marginRight:"3px" }} onClick={() => {
                                                let copy = [...userInfo];
                                                copy[i].appointmentStatus = 0;
                                                setUserInfo(copy)
                                            }}>대기</button>
                                            <button style={{ color:"black", backgroundColor: "rgb(146, 235, 98)", borderRadius:"5px", marginRight:"3px" }} onClick={() => {
                                                let copy = [...userInfo];
                                                copy[i].appointmentStatus = 1;
                                                setUserInfo(copy)
                                            }}>진료 중</button>
                                            <button style={{ color:"white", backgroundColor: "rgb(87, 199, 244)", borderRadius:"5px", marginRight:"3px" }} onClick={() => {
                                                let copy = [...userInfo];
                                                copy[i].appointmentStatus = 2;
                                                setUserInfo(copy)
                                            }}>진료 완료</button>
                                        </td>
                                        <td>
                                            <button
                                                className={v.no}
                                                onClick={() => toggleActive(i)}
                                            >
                                                {moreInfo[i] 
                                                 ? <i class="fa-solid fa-angle-up"></i>
                                                 : <i class="fa-solid fa-angle-down"></i>
                                                }
                                                
                                            </button>
                                        </td>
                                    </tr>
                                    {navTitle === 1 && moreInfo[i] && (
                                        <tr>
                                            <td colSpan={9}>
                                                <DetailArea data={v}></DetailArea>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                        
                    </Table>
                    
                </div>
            </div>
        </>
    )
}

function DetailArea({data}) {

    return (
        <>
            <div className={styles.detailArea}>
                <div className={styles.detailBoxTitle}>
                    <h3 className={styles.detailH3}>환자 특이사항</h3>
                </div>
                <div className={styles.detailBox}>
                    <div className={`${styles.detail} ${styles.detailLeft}`}>
                        <div className={styles.detailTitleBox}>
                            <span className={styles.detailSpan}>만성 질환</span>
                        </div>
                        <p className={styles.detailP}>{data.uniqueness}</p>
                    </div>
                    <div className={styles.detail}>
                        <div className={styles.detailTitleBox}>
                            <span className={styles.detailSpan}>복용중인 약</span>
                        </div>
                        <p className={styles.detailP}>{data.currentMedicationList}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppointmentStatus;