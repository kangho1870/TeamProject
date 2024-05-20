import { useNavigate } from "react-router-dom";
import Category from "../../../components/common/Category";
import styles from "../../../css/hospitalAdmin/HospitalAdmin.module.css";
import { useState } from "react";
import AppointmentStatus from "../../../components/hospitalAdmin/AppointmentStatus";



function HospitalAdmin() {

    let categoryBtns = ['예약현황', '예약관리', '상담'];
    let [clickBtn, setClickBtn] = useState(categoryBtns[0]);
    const navigate = useNavigate();

    const toggleActive = (item) => {
        setClickBtn(item);
    }

    return (
        <>
            <div className="container">
                <Category></Category>
                <div className={styles.hospitalAdminArea}>
                    <div className={styles.smallNavBox}>
                        <div role="button" className={styles.smallNav} onClick={() => {navigate("/")}}>
                            <a><p>홈</p></a>
                        </div>
                        <div className={styles.smallNav}>
                            {">"}
                        </div>
                        <div role="button" className={styles.smallNav} onClick={() => {navigate("/hospitalAdmin")}}>
                            <a><p>병원 페이지</p></a>
                        </div>
                    </div>
                    <div className={styles.categoryArea}>
                        <div className={styles.categoryBox}>
                            {categoryBtns.map((v, i) => (
                                <button
                                    key={i}
                                    className={`${styles.categoryBtn} ${clickBtn === v ? styles.categoryBtnActive : ""}`}
                                    onClick={() => {toggleActive(v)}}
                                >
                                    <span className={`${styles.categoryBtn} ${clickBtn === v ? styles.categorySpan : ""}`}>{v}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <AppointmentStatus></AppointmentStatus>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HospitalAdmin;