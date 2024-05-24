import face from '../../imgs/department-img/피부과.png'
import Category from "../../components/common/Category";
import styles from '../../css/hospital/SearchHospital.module.css';
import MoreDepartment from '../../components/hospital/MoreDepartment';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchHospital() {

    const [more, setMore] = useState(false);
    let [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const closeModal = () => {
        setMore(false)
    }

    const handleSearch = () => {
        navigate("/hospitals/search?keyword=" + searchValue);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
    };

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
                            <li className={styles.categoryBtns} onClick={() => {navigate("/hospitals/search?keyword=피부과")}}>
                                <span>
                                    <img alt="피부과" src={require("../../imgs/department-img/피부과.png")} className={styles.departmentImage}></img>
                                </span>
                                <p>피부과</p>
                            </li>
                            <li className={styles.categoryBtns} onClick={() => {navigate("/hospitals/search?keyword=산부인과")}}>
                                <span>
                                    <img alt="산부인과" src={require("../../imgs/department-img/산부인과.png")} className={styles.departmentImage}></img>
                                </span>
                                <p>산부인과</p>
                            </li>
                            <li className={styles.categoryBtns} onClick={() => {navigate("/hospitals/search?keyword=이비인후과")}}>
                                <span>
                                    <img alt="이비인후과" src={require("../../imgs/department-img/이비인후과.png")} className={styles.departmentImage}></img>
                                </span>
                                <p>이비인후과</p>
                            </li>
                            <li className={styles.categoryBtns} onClick={() => {navigate("/hospitals/search?keyword=내과")}}>
                                <span>
                                    <img alt="내과" src={require("../../imgs/department-img/내과.png")} className={styles.departmentImage}></img>
                                </span>
                                <p>내과</p>
                            </li>
                            <li className={styles.categoryBtns} onClick={() => {navigate("/hospitals/search?keyword=안과")}}>
                                <span>
                                    <img alt="안과" src={require("../../imgs/department-img/안과.png")} className={styles.departmentImage}></img>
                                </span>
                                <p>안과</p>
                            </li>
                            <li className={styles.categoryBtns} onClick={() => {navigate("/hospitals/search?keyword=가정의학과")}}>
                                <span>
                                    <img alt="가정의학과" src={require("../../imgs/department-img/가정의학과.png")} className={styles.departmentImage}></img>
                                </span>
                                <p>가정의학과</p>
                            </li>
                            <li className={styles.categoryBtns} onClick={() => {navigate("/hospitals/search?keyword=소아과")}}>
                                <span>
                                    <img alt="소아과" src={require("../../imgs/department-img/소아과.png")} className={styles.departmentImage}></img>
                                </span>
                                <p>소아과</p>
                            </li>
                            <li className={styles.categoryBtns} onClick={() => {navigate("/hospitals/search?keyword=정형외과")}}>
                                <span>
                                    <img alt="정형외과" src={require("../../imgs/department-img/정형외과.png")} className={styles.departmentImage}></img>
                                </span>
                                <p>정형외과</p>
                            </li>
                            <li className={styles.categoryBtns} onClick={() => {navigate("/hospitals/search?keyword=정신건강의학과")}}>
                                <span>
                                    <img alt="정신건강의학과" src={require("../../imgs/department-img/정신건강의학과.png")} className={styles.departmentImage}></img>
                                </span>
                                <p>정신건강의학과</p>
                            </li>
                            <li className={styles.categoryBtns} onClick={() => {navigate("/hospitals/search?keyword=비뇨기과")}}>
                                <span>
                                    <img alt="비뇨기과" src={require("../../imgs/department-img/비뇨기과.png")} className={styles.departmentImage}></img>
                                </span>
                                <p>비뇨기과</p>
                            </li>
                            <li className={styles.categoryBtns} onClick={() => {navigate("/hospitals/search?keyword=치과")}}>
                                <span>
                                    <img alt="치과" src={require("../../imgs/department-img/치과.png")} className={styles.departmentImage}></img>
                                </span>
                                <p>치과</p>
                            </li>
                            <li className={styles.categoryBtns} onClick={() => {navigate("/hospitals/search?keyword=신경외과")}}>
                                <span>
                                    <img alt="신경외과" src={require("../../imgs/department-img/신경외과.png")} className={styles.departmentImage}></img>
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
                                <li className={styles.boottomFastSearchCategorys} onClick={() => {navigate("/hospitals/search?keyword=독감")}}>독감</li>
                                <li className={styles.boottomFastSearchCategorys} onClick={() => {navigate("/hospitals/search?keyword=탈모")}}>탈모</li>
                                <li className={styles.boottomFastSearchCategorys} onClick={() => {navigate("/hospitals/search?keyword=비염")}}>비염</li>
                                <li className={styles.boottomFastSearchCategorys} onClick={() => {navigate("/hospitals/search?keyword=사후피임")}}>사후피임</li>
                                <li className={styles.boottomFastSearchCategorys} onClick={() => {navigate("/hospitals/search?keyword=질염")}}>질염</li>
                                <li className={styles.boottomFastSearchCategorys} onClick={() => {navigate("/hospitals/search?keyword=대상포진")}}>대상포진</li>
                                <li className={styles.boottomFastSearchCategorys} onClick={() => {navigate("/hospitals/search?keyword=다이어트")}}>다이어트</li>
                                <li className={styles.boottomFastSearchCategorys} onClick={() => {navigate("/hospitals/search?keyword=아토피")}}>아토피</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.bottomSearchArea}>
                        <div className={styles.bottomSearchAreaBox}>
                            <div className={styles.bottomSearchInputBox}>
                                <input className={styles.bottomSearchInput} placeholder='병원 이름, 지역+과목' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyDown={handleKeyDown}></input>
                                <button type='button' className={styles.bottomSearchBtn} onClick={handleSearch}>
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
            <div id='modal' onClick={closeModal}>
                {more && <MoreDepartment></MoreDepartment>}
            </div>
        </>
    )
}

export default SearchHospital;