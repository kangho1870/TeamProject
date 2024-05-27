import Category from "../../components/common/Category";
import styles from '../../css/hospital/SearchHospital.module.css';
import HospitalStyles from '../../css/hospital/SearchHospitalTitle.module.css';
import HospitalList from '../../components/hospital/HospitalList';
import { useEffect, useState } from 'react';
import axios from "axios";
function SearchHospitalTitle() {

    const params = new URLSearchParams(window.location.search);

    let hospitals = ["a", "b" ,"c"];
    let [hospitalList, setHospitalList] = useState([]);
    
    const [filter, setFilter] = useState([
        {
            userAddress: "연제구",
            hospitalOpen: false,
            nightOpen: false,
            emergency: false
        }
    ]);

    useEffect(() => {
        axios.post(`/hospitals`, filter[0], {
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(response => {
            let copy = [...hospitalList, response.data];
            setHospitalList(copy);
        })
        .catch(error => {
            console.error("에러 발생:", error);
        });
    }, [])

    console.log(hospitalList)

    let filterBtns = [filter[0].userAddress, "hospitalOpen", "nightOpen", "emergency"];
    let [filterBtnClickStatus, setFilterBtnClickStatus] = useState([true, false, false, false]);
    

    const toggleActive = (item, index) => {
        let copyBtnsStatus = [...filterBtnClickStatus];
        copyBtnsStatus[index] = !copyBtnsStatus[index];
        setFilterBtnClickStatus(copyBtnsStatus);
    
        // 업데이트된 filter 복사본 생성
        let copyFilter = [...filter];
    
        // 복사본 내 필터 값 업데이트
        if (typeof copyFilter[0][item] === "boolean") {
            copyFilter[0][item] = !copyFilter[0][item];
        }
    
        // 업데이트된 filter 상태로 설정
        setFilter(copyFilter);
    };

    let department = params.get("keyword");

    

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
                        <div className={styles.smallNav}>
                            {">"}
                        </div>
                        <div role="button" className={styles.smallNav}>
                            <a href="/hospitals/search?"><p>검색 결과</p></a>
                        </div>
                    </div>
                    <div className={HospitalStyles.searchBox}>
                        <button className={HospitalStyles.backBtn}><i class="fa-solid fa-angle-left"></i></button>
                        <div className={HospitalStyles.searchInputBox}>
                            <form>
                                <input placeholder='지역+과목명, 병원명을 입력해주세요.' className={HospitalStyles.searchInput} value={department}></input>
                                <button type='submit' className={HospitalStyles.searchInputBtn}><i class="fa-solid fa-magnifying-glass"></i></button>
                            </form>
                        </div>
                    </div>
                    <section>
                        <div className={HospitalStyles.selectSubMenu}>
                            <div className={HospitalStyles.filterBox}>
                                <button className={HospitalStyles.filterBtn}><i class="fa-solid fa-sliders"></i></button>
                            </div>
                            <div className={HospitalStyles.filterBtnBox}>
                                <button className={HospitalStyles.detailfilterBtnBox}>
                                    <span>가까운 순</span>
                                    <div>
                                        <div className={HospitalStyles.menuDown}>
                                            <span><i class="fa-solid fa-angle-down"></i></span>
                                        </div>
                                    </div>
                                </button>
                                {filterBtns.map((v, i) => (
                                    <button
                                        key={i} 
                                        className={`${HospitalStyles.detailfilterBtnBox} ${filterBtnClickStatus[i] ? HospitalStyles.activeBtn : ""} ${i == 0 ? HospitalStyles.activeBtn : ""}`}
                                        onClick={() => toggleActive(v, i)}
                                    >
                                        {i == 0 ? 
                                            <>
                                                <div>
                                                    <span className={HospitalStyles.btnSpan}><i class="fa-solid fa-location-crosshairs"></i></span>
                                                </div>
                                                <span className={HospitalStyles.btnSpan}>
                                                    {v}
                                                </span>
                                            </>
                                            : 
                                            <>
                                                <span className={filterBtnClickStatus[i] == true ? HospitalStyles.btnSpan : ""}>
                                                    {v == "hospitalOpen" ? "진료 중"
                                                                        : v == "nightOpen" ? "야간진료"
                                                                        : v == "emergency" ? "응급병동" : ""
                                                    }
                                                </span>
                                            </>
                                        }
                                        
                                    </button>
                                ))}
                            </div>
                        </div>
                        {
                            hospitalList[0] && (
                                <section className={HospitalStyles.hospitalListSection}>
                                    {console.log(hospitalList[0])}
                                    <div>
                                        <ul className={HospitalStyles.hospitalListUl}>
                                            {hospitalList.data.map((v, i) => {
                                                console.log(hospitalList);
                                                <HospitalList hospitalList={v} index={i} department={department} key={i}></HospitalList>
                                            })}
                                        </ul>
                                    </div>
                                </section>
                            )
                        }
                        {/* <section className={HospitalStyles.hospitalListSection}>
                            <div>
                                <ul className={HospitalStyles.hospitalListUl}>
                                    {hospitalList.map((v, i) => (
                                        <HospitalList hospitalList={v} index={i} department={department}></HospitalList>
                                    ))}
                                </ul>
                            </div>
                        </section> */}
                    </section>
                </div>
            </div>
        </>
    )
}

export default SearchHospitalTitle;