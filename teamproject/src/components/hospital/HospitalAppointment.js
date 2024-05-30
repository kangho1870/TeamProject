import Category from "../common/Category";
import styles from '../../css/hospital/HospitalAppointment.module.css';
import Calendar from "react-calendar";
import '../../css/common/CustomCalendar.module.css';
import { useEffect, useState } from "react";
import moment, { locale } from "moment";

function HospitalAppointment(props) {
    const [date, setDate] = useState(new Date());
    const [startTime, setStartTime] = useState(props.hospital.startTime);
    const [endTime, setEndTime] = useState(props.hospital.endTime);

    const [timeButtons, setTimeButtons] = useState([]);
    const [selectTime, setSelectTime] = useState(timeButtons[0]);

    useEffect(() => {
        // generateTimeButtons 함수 정의
        const generateTimeButtons = (startTime, endTime) => {
            const buttons = [];
            let currentTime = moment(startTime, "HH:mm");
            const endTimeObj = moment(endTime, "HH:mm");
        
            // 오전 시간 버튼 생성
            if (moment(startTime, "HH:mm").isBefore(moment("12:00", "HH:mm"))) {
                while (currentTime.isBefore(moment("12:00", "HH:mm")) && currentTime.isBefore(endTimeObj)) {
                    buttons.push(currentTime.format("HH:mm"));
                    currentTime.add(30, "minutes"); // 30분 추가
                }
            }
        
            // 오후 시간 버튼 생성
            currentTime = moment("12:00", "HH:mm");
            while (currentTime.isBefore(endTimeObj)) {
                buttons.push(currentTime.format("HH:mm"));
                currentTime.add(30, "minutes"); // 30분 추가
            }
        
            return buttons;
        };
    
        console.log(moment(date).format("MM월 DD일"));
        const buttons = generateTimeButtons(startTime, endTime);
        setTimeButtons(buttons);
    }, [date, startTime, endTime]);

    const handleTimeButtonClick = (time) => {
        setSelectTime(time);
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            <div className={styles.appointmentModal} onClick={props.modalClose}>
                <div className={styles.appointmentModalArea} onClick={handleModalClick}>
                    <div className={styles.appointmentModalBox}>
                        <header className={styles.appointmentTitle}>예약하기</header>
                        <h4 className={styles.appointmentSubTitle}>날짜 선택</h4>
                        <Calendar
                            calendarType="gregory"
                            next2Label={null}
                            prev2Label={null}
                            formatYear={(locale, date) => moment(date).format("YYYY")}
                            formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
                            formatDay={(locale, date) => moment(date).format('D')}
                            onChange={setDate} value={date}
                            >
                        </Calendar>
                        <h4 className={styles.appointmentSubTitle}>시간 선택</h4>
                        <form>
                            <div className={styles.appointmentDayArea}>
                                <div className={styles.appointmentDayBox}>
                                    <div>
                                        {moment(date).format("MM월 DD일")}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={styles.timeType}>오전</div>
                                <ul className={styles.appointmentTimeUl}>
                                    {timeButtons.map((time, index) => (
                                        time <= "12:00" &&
                                        <li key={index} className={styles.appointmentTimeLi}>
                                            <button onClick={handleTimeButtonClick} className={`${selectTime === time ? styles.appointmentTimeBtnSelected : styles.appointmentTimeBtn}`}>{time}</button>
                                        </li>
                                    ))}
                                </ul>
                                <div className={styles.timeType}>오후</div>
                                <ul className={styles.appointmentTimeUl}>
                                    {timeButtons.map((time, index) => (
                                        time > "12:00" &&
                                        <li key={index} className={styles.appointmentTimeLi}>
                                            <button className={styles.appointmentTimeBtn}>{time}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <div>
                                    <h4 className={styles.appointmentSubTitle}>증상 및 요청사항</h4>
                                </div>
                                <div className={styles.appointmentInputArea}>
                                    <textarea></textarea>
                                </div>
                            </div>
                            <div className={styles.appointmentBtnBox}>
                                <button type="submit" className={styles.appointmentBtn}>예약하기</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HospitalAppointment;