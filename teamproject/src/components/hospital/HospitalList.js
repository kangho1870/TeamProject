import styles from "../../css/hospital/HospitalList.module.css";

const HospitalList = (({ hospitalList, index, nowTime }) => {
    return (
        <>
            <div role="button" key={index}>
                <a href={`/hospitals/${hospitalList.hospitalId}`}>
                    <li className={styles.hospitalListLi}>
                        <div className={styles.hospitalListDetailBox}>
                            <div className={styles.hospitalListDetail}>
                                <div className={styles.hospitalListDetailTitleBox}>
                                    <h3 className={styles.hospitalListDetailTitle}>{hospitalList.hospitalName}</h3>
                                </div>
                                <div className={styles.hospitalListDetailDepartmentBox}>
                                    <span className={styles.hospitalListDetailDepartment}>{hospitalList.hospitalCategory}</span>
                                    <div className={styles.timeInfoBox}>
                                    {hospitalList.endTime && nowTime && (
                                        <span className={`${hospitalList.endTime.substring(0, 5) > nowTime ? styles.timeIn : styles.timeOut}`}>
                                            {`${hospitalList.endTime.substring(0, 5) > nowTime ? "● 진료중" : ""}`}
                                        </span>
                                    )}
                                    {hospitalList.endTime && nowTime && hospitalList.endTime.substring(0, 5) > nowTime && (
                                        <>
                                            <div className={styles.timeDiv}></div>
                                            <span className={styles.timeInfo}>{`${hospitalList.endTime.substring(0, 5)}`} 까지</span>
                                        </>
                                    )}
                                    </div>
                                </div>
                                <div className={styles.hospitalListDetailAddressBox}>
                                    <div className={styles.hospitalListDetailAddress}>
                                        {/* <i class="fa-solid fa-location-dot"></i>
                                        <span className={styles.hospitalListDetailAddressSpan}>220m</span> */}
                                        <span className={styles.hospitalListDetailAddressSpan}>{hospitalList.hospitalAddress}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.hospitalListDetailLocationBox}>
                            {hospitalList.hospitalOrganLoc != "" ? <span className={styles.hospitalListDetailLocation}>{hospitalList.hospitalOrganLoc}</span> : <div></div>}
                        </div>
                    </li>
                </a>
            </div>
        </>
    )
});

export default HospitalList;