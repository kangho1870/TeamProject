import styles from "../../css/hospital/HospitalList.module.css";

function HospitalList({hospitals, index}) {
    return (
        <>
            <div role="button">
                <a href={`/hospitals/${index}`}>
                    <li className={styles.hospitalListLi}>
                        <div className={styles.hospitalListDetailBox}>
                            <div className={styles.hospitalListDetail}>
                                <div className={styles.hospitalListDetailTitleBox}>
                                    <h3 className={styles.hospitalListDetailTitle}>{hospitals}</h3>
                                </div>
                                <div className={styles.hospitalListDetailDepartmentBox}>
                                    <span className={styles.hospitalListDetailDepartment}>피부과</span>
                                </div>
                                <div className={styles.hospitalListDetailAddressBox}>
                                    <div className={styles.hospitalListDetailAddress}>
                                        <i class="fa-solid fa-location-dot"></i>
                                        <span className={styles.hospitalListDetailAddressSpan}>220m</span>
                                        <span className={styles.hospitalListDetailAddressSpan}>부산광역시 연제구 연산동</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.hospitalListDetailLocationBox}>
                            <span className={styles.hospitalListDetailLocation}>1호선 부전역 6번출구</span>
                        </div>
                    </li>
                </a>
            </div>
        </>
    )
}

export default HospitalList;