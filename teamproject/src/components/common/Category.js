import React, { useState } from 'react';
import styles from '../../css/common/Category.module.css'
import { useNavigate } from 'react-router-dom';
import Acount from './Acount.js';

function Category() {
    const navigate = useNavigate();
    let [acountView, setAcountView] = useState(false);

    const closeModal = () => {
        setAcountView(false);
    }

    return (
        <>
            <div className={styles.categoryNav}>
                <div className={styles.logoBox} onClick={() => {navigate("/")}}>
                    <div className={styles.logo}>
                        <i class="fa-solid fa-stethoscope">몽땅병원</i>
                    </div>
                    <div className="search-btn">
                        <button className={styles.search}><i class="fa-solid fa-magnifying-glass"></i> 검색</button>
                    </div>
                </div>
                <div className={styles.navBox}>
                    <ul className={styles.navList}>
                        <a>
                            <li className={styles.list} onClick={() => {navigate("/hospitals")}}>
                                <img src={require("../../imgs/category-img/병원.png")} className={styles.navImg}></img>
                                병원 찾기
                            </li>
                        </a>
                        <a>
                            <li className={styles.list} onClick={() => {navigate("/pharmacys")}}>
                                <img src={require("../../imgs/category-img/약국.png")} className={styles.navImg}></img>
                                약국 찾기
                            </li>
                        </a>
                        <a>
                            <li className={styles.list} onClick={() => {navigate("/")}}>
                                <img src={require("../../imgs/category-img/매거진.png")} className={styles.navImg}></img>
                                건강 매거진
                            </li>
                        </a>
                        <a>
                            <li className={styles.list} onClick={() => {navigate("/community")}}>
                                <img src={require("../../imgs/category-img/매거진.png")} className={styles.navImg}></img>
                                커뮤니티
                            </li>
                        </a>
                        <a>
                            <li className={styles.list} onClick={() => {navigate("/mypage")}}>
                                <img src={require("../../imgs/category-img/마이페이지.png")} className={styles.navImg}></img>
                                마이 페이지
                            </li>
                        </a>
                    </ul>
                    <div className={styles.btnBox}>
                        <button className={`${styles.userLoginBtn} ${styles.loginBtn}`} onClick={() => {setAcountView(true)}}>로그인/가입</button>
                        <button className={`${styles.hospitalLoginBtn} ${styles.loginBtn}`}>병원 등록</button>
                    </div>
                </div>
            </div>
            <div id='modal' onClick={closeModal}>
                {acountView && <Acount closeModal={closeModal}></Acount>}
            </div>
        </>
    )
}

export default Category;