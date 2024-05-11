import face from '../department-img/피부과.png';
import Category from '../components/Category';
import styles from '../css/SearchHospital.module.css';
import MoreDepartment from '../components/MoreDepartment';
import { useEffect, useRef, useState } from 'react';

function SearchHospital() {

    const [more, setMore] = useState(false);

    const closeModal = () => {
        setMore(false)
    }

    return (
        <>
            <div className='container'>
                <Category></Category>
                <div className={styles.mainContextTop}>
                    <div className={styles.mainNavSmall}>
                        <div role="button" className={styles.smallNav}>
                            <a href="/"><p>홈</p></a>
                        </div>
                        <div className={styles.smallNav}>
                            {">"}
                        </div>
                        <div role="button" className={styles.smallNav}>
                            <a href="/hospitals"><p>병원 찾기</p></a>
                        </div>
                    </div>
                    <div className={styles.mainTitleBox}>
                        <h1 className={styles.mainTitle}>병원 찾기</h1>
                    </div>
                    <div className={styles.departmentBox}>
                        <p className={styles.titleInfo}>병원 예약하고 편하게 방문해보세요</p>
                        <h2 className={styles.titleInfo2}>어떤 병원을 찾으세요?</h2>
                        <ul className={styles.categoryBtnBox}>
                            <li className={styles.categoryBtns}>
                                <span>
                                    <img alt="피부과" src={face} className={styles.departmentImage}></img>
                                </span>
                                <p>피부과</p>
                            </li>
                            <li className={styles.categoryBtns}>
                                <span>
                                    <img alt="피부과" src={face} className={styles.departmentImage}></img>
                                </span>
                                <p>산부인과</p>
                            </li>
                            <li className={styles.categoryBtns}>
                                <span>
                                    <img alt="피부과" src={face} className={styles.departmentImage}></img>
                                </span>
                                <p>이비인후과</p>
                            </li>
                            <li className={styles.categoryBtns}>
                                <span>
                                    <img alt="피부과" src={face} className={styles.departmentImage}></img>
                                </span>
                                <p>내과</p>
                            </li>
                            <li className={styles.categoryBtns}>
                                <span>
                                    <img alt="피부과" src={face} className={styles.departmentImage}></img>
                                </span>
                                <p>안과</p>
                            </li>
                            <li className={styles.categoryBtns}>
                                <span>
                                    <img alt="피부과" src={face} className={styles.departmentImage}></img>
                                </span>
                                <p>가정의학과</p>
                            </li>
                            <li className={styles.categoryBtns}>
                                <span>
                                    <img alt="피부과" src={face} className={styles.departmentImage}></img>
                                </span>
                                <p>소아과</p>
                            </li>
                            <li className={styles.categoryBtns}>
                                <span>
                                    <img alt="피부과" src={face} className={styles.departmentImage}></img>
                                </span>
                                <p>정형외과</p>
                            </li>
                            <li className={styles.categoryBtns}>
                                <span>
                                    <img alt="피부과" src={face} className={styles.departmentImage}></img>
                                </span>
                                <p>정신건강의학과</p>
                            </li>
                            <li className={styles.categoryBtns}>
                                <span>
                                    <img alt="피부과" src={face} className={styles.departmentImage}></img>
                                </span>
                                <p>비뇨기과</p>
                            </li>
                            <li className={styles.categoryBtns}>
                                <span>
                                    <img alt="피부과" src={face} className={styles.departmentImage}></img>
                                </span>
                                <p>치과</p>
                            </li>
                            <li className={styles.categoryBtns}>
                                <span>
                                    <img alt="피부과" src={face} className={styles.departmentImage}></img>
                                </span>
                                <p>신경외과</p>
                            </li>
                            <li className={styles.categoryBtns}>
                                <span>
                                    <img alt="피부과" src={face} className={styles.departmentImage}></img>
                                </span>
                                <p>신경외과</p>
                            </li>
                            <li className={styles.categoryBtns}>
                                <span>
                                    <img alt="피부과" src={require('../department-img/피부과.png')} className={styles.departmentImage}></img>
                                </span>
                                <p>신경외과</p>
                            </li>
                        </ul>
                        <button type='button' className={styles.departmentMoreBtn} onClick={() => {setMore(!more)}}>더보기</button>
                    </div>
                    <div style={{width : "100%", height : "16px", backgroundColor : "#f5f6f7"}}></div>
                    <div className={styles.mainContextBottom}>
                        <div className={styles.bottomFastSearchBox}>
                            <h2 className={styles.bottomTitle}>어떻게 아프신가요?</h2>
                            <ul className={styles.bottomFastSearchCategory}>
                                <li className={styles.boottomFastSearchCategorys} value={"독감"}>독감</li>
                                <li className={styles.boottomFastSearchCategorys}>탈모</li>
                                <li className={styles.boottomFastSearchCategorys}>비염</li>
                                <li className={styles.boottomFastSearchCategorys}>사후피임</li>
                                <li className={styles.boottomFastSearchCategorys}>질염</li>
                                <li className={styles.boottomFastSearchCategorys}>대상포진</li>
                                <li className={styles.boottomFastSearchCategorys}>다이어트</li>
                                <li className={styles.boottomFastSearchCategorys}>아토피</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.bottomSearchArea}>
                        <div className={styles.bottomSearchAreaBox}>
                            <div className={styles.bottomSearchInputBox}>
                                <input className={styles.bottomSearchInput} placeholder='병원 이름, 지역+과목'></input>
                                <button type='button' className={styles.bottomSearchBtn}>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                            <h3 className={styles.trending}>인기 검색어</h3>
                            <ul className={styles.trendingTitle}>
                                <li className={styles.trendingTitles}>#여드름</li>
                                <li className={styles.trendingTitles}>#지루성피부염</li>
                                <li className={styles.trendingTitles}>#감기</li>
                                <li className={styles.trendingTitles}>#역류성식도염</li>
                                <li className={styles.trendingTitles}>#두드러기</li>
                                <li className={styles.trendingTitles}>#리쥬란</li>
                                <li className={styles.trendingTitles}>#보톡스</li>
                                <li className={styles.trendingTitles}>#이석증</li>
                                <li className={styles.trendingTitles}>#당뇨</li>
                                <li className={styles.trendingTitles}>#백옥주사</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {more && <MoreDepartment closeModal={closeModal}></MoreDepartment>}
        </>
    )
}

export default SearchHospital;