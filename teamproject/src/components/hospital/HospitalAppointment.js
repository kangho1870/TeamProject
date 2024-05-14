import Category from "../common/Category";
import styles from '../../css/hospital/HospitalAppointment.module.css';


function HospitalAppointment() {
    return (
        <>
            <div className={styles.appointmentModal}>
                <div className={styles.appointmentModalArea}>
                    <div className={styles.appointmentModalBox}>
                        <header className={styles.appointmentTitle}>예약하기</header>
                        <h4 className={styles.appointmentSubTitle}>날짜</h4>
                        <div className={styles.appointmentDayArea}>
                            <div className={styles.appointmentDayBox}>
                                <div>
                                    <button>{"<"}</button>
                                </div>
                            </div>
                            <div className={styles.appointmentDayBox}>
                                <div>
                                    <button>2024-05-14</button>
                                </div>
                            </div>
                            <div className={styles.appointmentDayBox}>
                                <div>
                                    <button>{">"}</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul className={styles.appointmentTimeUl}>
                                <li className={styles.appointmentTimeLi}>
                                    <button className={styles.appointmentTimeBtn}>09:00</button>
                                </li>
                                <li className={styles.appointmentTimeLi}>
                                    <button className={styles.appointmentTimeBtn}>09:00</button>
                                </li>
                                <li className={styles.appointmentTimeLi}>
                                    <button className={styles.appointmentTimeBtn}>09:00</button>
                                </li>
                                <li className={styles.appointmentTimeLi}>
                                    <button className={styles.appointmentTimeBtn}>09:00</button>
                                </li>
                                <li className={styles.appointmentTimeLi}>
                                    <button className={styles.appointmentTimeBtn}>09:00</button>
                                </li>
                                <li className={styles.appointmentTimeLi}>
                                    <button className={styles.appointmentTimeBtn}>09:00</button>
                                </li>
                                <li className={styles.appointmentTimeLi}>
                                    <button className={styles.appointmentTimeBtn}>09:00</button>
                                </li>
                                <li className={styles.appointmentTimeLi}>
                                    <button className={styles.appointmentTimeBtn}>09:00</button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <h4 className={styles.appointmentSubTitle}>증상</h4>
                            </div>
                            <div className={styles.appointmentInputArea}>
                                <textarea></textarea>
                            </div>
                        </div>
                        <div className={styles.appointmentBtnBox}>
                            <button className={styles.appointmentBtn}>예약하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HospitalAppointment;