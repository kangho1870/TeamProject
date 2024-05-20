import { Link, Navigate, useNavigate } from 'react-router-dom';
import styles from '../../css/hospital/MoreDepartment.module.css';

function MoreDepartment(props) {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.moreDepartmentModal}>
                <div className={styles.moreDepartmentModalBox}>
                    <div className={styles.moreDepartmentBtnBox}>
                        <h4 className={styles.departmentSelect}>진료과목 선택</h4>
                        <ul className={styles.departmentUl}>
                            <li className={styles.departmentLi} onClick={() => {navigate("/hospitals/search?keyword=가정의학과")}}>
                                <div className={styles.departmentTitleBox}>
                                    <p>가정의학과</p>
                                    <span>건강증진, 예방, 만성질환 등</span>
                                </div>
                                <div>
                                    <span>
                                        <img src={require('../../imgs/department-img/가정의학과.png')}></img>
                                    </span>
                                </div>
                            </li>
                            <li className={styles.departmentLi}>
                                <div className={styles.departmentTitleBox}>
                                    <p>내과</p>
                                    <span>건강증진, 예방, 만성질환 등</span>
                                </div>
                                <div>
                                    <span>
                                        <img src={require('../../imgs/department-img/내과.png')}></img>
                                    </span>
                                </div>
                            </li>
                            <li className={styles.departmentLi}>
                                <div className={styles.departmentTitleBox}>
                                    <p>비뇨기과</p>
                                    <span>건강증진, 예방, 만성질환 등</span>
                                </div>
                                <div>
                                    <span>
                                        <img src={require('../../imgs/department-img/비뇨기과.png')}></img>
                                    </span>
                                </div>
                            </li>
                            <li className={styles.departmentLi}>
                                <div className={styles.departmentTitleBox}>
                                    <p>산부인과</p>
                                    <span>건강증진, 예방, 만성질환 등</span>
                                </div>
                                <div>
                                    <span>
                                        <img src={require('../../imgs/department-img/산부인과.png')}></img>
                                    </span>
                                </div>
                            </li>
                            <li className={styles.departmentLi}>
                                <div className={styles.departmentTitleBox}>
                                    <p>소아과</p>
                                    <span>건강증진, 예방, 만성질환 등</span>
                                </div>
                                <div>
                                    <span>
                                        <img src={require('../../imgs/department-img/소아과.png')}></img>
                                    </span>
                                </div>
                            </li>
                            <li className={styles.departmentLi}>
                                <div className={styles.departmentTitleBox}>
                                    <p>신경외과</p>
                                    <span>건강증진, 예방, 만성질환 등</span>
                                </div>
                                <div>
                                    <span>
                                        <img src={require('../../imgs/department-img/신경외과.png')}></img>
                                    </span>
                                </div>
                            </li>
                            <li className={styles.departmentLi}>
                                <div className={styles.departmentTitleBox}>
                                    <p>안과</p>
                                    <span>건강증진, 예방, 만성질환 등</span>
                                </div>
                                <div>
                                    <span>
                                        <img src={require('../../imgs/department-img/안과.png')}></img>
                                    </span>
                                </div>
                            </li>
                            <li className={styles.departmentLi}>
                                <div className={styles.departmentTitleBox}>
                                    <p>이비인후과</p>
                                    <span>건강증진, 예방, 만성질환 등</span>
                                </div>
                                <div>
                                    <span>
                                        <img src={require('../../imgs/department-img/이비인후과.png')}></img>
                                    </span>
                                </div>
                            </li>
                            <li className={styles.departmentLi}>
                                <div className={styles.departmentTitleBox}>
                                    <p>정신건강의학과</p>
                                    <span>건강증진, 예방, 만성질환 등</span>
                                </div>
                                <div>
                                    <span>
                                        <img src={require('../../imgs/department-img/정신건강의학과.png')}></img>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoreDepartment;