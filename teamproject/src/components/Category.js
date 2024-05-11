import React from 'react';
import styles from '../css/Category.module.css';
import { Outlet } from 'react-router-dom';

function Category() {
    return (
        <div className={styles.categoryNav}>
            <div className={styles.logoBox}>
                <div className={styles.logo}>
                    <i class="fa-solid fa-stethoscope">몽땅병원</i>
                </div>
                <div className="search-btn">
                    <button className={styles.search}><i class="fa-solid fa-magnifying-glass"></i> 검색</button>
                </div>
            </div>
            <div className={styles.navBox}>
                <ul className={styles.navList}>
                    <a><li className={styles.list}>병원 찾기</li></a>
                    <a><li className={styles.list}>약국 찾기</li></a>
                    <a><li className={styles.list}>건강 매거진</li></a>
                    <a><li className={styles.list}>마이 페이지</li></a>
                </ul>
                <div className={styles.btnBox}>
                    <button className={`${styles.userLoginBtn} ${styles.loginBtn}`}>사용자 로그인/가입</button>
                    <button className={`${styles.hospitalLoginBtn} ${styles.loginBtn}`}>병원 로그인</button>
                </div>
            </div>
        </div>
    )
}

export default Category;