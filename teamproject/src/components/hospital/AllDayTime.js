import styles from "../../css/hospital/AllDayTime.module.css";

function AllDayTime() {
    return (
        <>
            <div className={styles.timeModal}>
                <div className={styles.timeModalArea}>
                    <div className={styles.timeModalBox}>
                        <header className={styles.timeModalTitle}>
                            전체 요일
                        </header>
                        <div className={styles.todayTimeArea}>
                            <div className={styles.todayTimeBox}>
                                <h4 className={styles.today}>오늘</h4>
                                <span className={styles.time}>09:00 ~ 18:00</span>
                            </div>
                            <div className={styles.todayBreakTimeBox}>
                                <h4 className={styles.breakTime}>휴게시간</h4>
                                <p>확인 필요</p>
                            </div>
                        </div>
                        <div className={styles.timeAllDayArea}>
                            <div className={styles.timeBox}>
                                <h4 style={{color: "rgb(45, 46, 47)"}}>월</h4>
                                <span className={styles.time}>확인 필요</span>
                            </div>
                            <div className={styles.timeBox}>
                                <h4 style={{color: "rgb(45, 46, 47)"}}>화</h4>
                                <span className={styles.time}>확인 필요</span>
                            </div>
                            <div className={styles.timeBox}>
                                <h4 style={{color: "rgb(45, 46, 47)"}}>수</h4>
                                <span className={styles.time}>확인 필요</span>
                            </div>
                            <div className={styles.timeBox}>
                                <h4 style={{color: "rgb(45, 46, 47)"}}>목</h4>
                                <span className={styles.time}>확인 필요</span>
                            </div>
                            <div className={styles.timeBox}>
                                <h4 style={{color: "rgb(45, 46, 47)"}}>금</h4>
                                <span className={styles.time}>확인 필요</span>
                            </div>
                            <div className={styles.timeBox}>
                                <h4 style={{color: "rgb(28, 126, 214)"}}>토</h4>
                                <span className={styles.time}>확인 필요</span>
                            </div>
                            <div className={styles.timeBox}>
                                <h4 style={{color: "rgb(240, 62, 62)"}}>일</h4>
                                <span className={styles.time}>확인 필요</span>
                            </div>
                            <div className={styles.timeBox}>
                                <h4 style={{color: "rgb(240, 62, 62)"}}>공휴일</h4>
                                <span className={styles.time}>확인 필요</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllDayTime;