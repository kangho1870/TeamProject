import Category from "../../components/common/Category";
import styles from '../../css/hospital/SearchHospital.module.css';
import HospitalStyles from '../../css/hospital/SearchHospitalTitle.module.css';
import HospitalList from '../../components/hospital/HospitalList';
import { useEffect, useState, useRef, useCallback } from 'react';
import axios from "axios";

function SearchHospitalTitle() {
    const params = new URLSearchParams(window.location.search);
    let department = params.get("keyword");
    let [totalPage, setTotalPage] = useState(1);

    const [hospitalList, setHospitalList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState({
        department: department,
        userAddress: "연제구",
        hospitalOpen: false,
        nightOpen: false,
        emergency: false,
        page: 1
    });

    let filterBtns = [filter.userAddress, "hospitalOpen", "nightOpen", "emergency"];
    const [filterBtnClickStatus, setFilterBtnClickStatus] = useState([true, false, false, false]);
    const hospitalListRef = useRef(null);

    useEffect(() => {
        loadData();
    }, [filter]);

    const loadData = () => {
        setLoading(true);
        axios.post(`/hospitals`, filter, {
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(response => {
            let totalCount = response.data.data[0].totalCount;
            setTotalPage(totalCount % 20 == 0 ? totalCount / 20 : Math.floor(totalCount / 20) + 1);

            console.log(filter.page)
            console.log(totalCount)
            console.log(totalPage)
            if (filter.page > totalPage) {
                // 더 이상 데이터가 없는 경우
                // 예를 들어, 페이지를 변경하지 않고 데이터를 더 가져오는 경우에 이런 상황이 발생할 수 있습니다.
                // 이 경우에는 더 이상 Intersection Observer를 활성화하지 않습니다.
                setLoading(false);
                return;
            }

            setHospitalList(prevList => [...prevList, ...response.data.data]);

            setFilter(prevFilter => ({
                ...prevFilter,
                page: prevFilter.page + 1
            }));

            setLoading(false);
        })
        .catch(error => {
            console.error("에러 발생:", error);
            setLoading(false);
        });
    };

    const toggleActive = (item, index) => {
        let copyBtnsStatus = [...filterBtnClickStatus];
        copyBtnsStatus[index] = !copyBtnsStatus[index];
        setFilterBtnClickStatus(copyBtnsStatus);

        let copyFilter = { ...filter };
        if (typeof copyFilter[item] === "boolean") {
            copyFilter[item] = !copyFilter[item];
        }
        setFilter({
            ...copyFilter,
            page: 1
        });
        setTotalPage(1);
        setHospitalList([]);
    };

    useEffect(() => {
        const handleScroll = () => {
            const observer = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting && !loading) {
                    loadData()
                }
            }, {
                root: null,
                rootMargin: '20px',
                threshold: 1
            });
    
            if (hospitalListRef.current) {
                observer.observe(hospitalListRef.current);
            }
    
            return () => {
                if (hospitalListRef.current) {
                    observer.unobserve(hospitalListRef.current);
                }
            };
        };
    
        handleScroll(); // 최초 한 번만 호출

    }, [])

    

    return (
        <>
            <div className='container'>
                <Category/>
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
                        <button className={HospitalStyles.backBtn}><i className="fa-solid fa-angle-left"></i></button>
                        <div className={HospitalStyles.searchInputBox}>
                            <form>
                                <input placeholder='지역+과목명, 병원명을 입력해주세요.' className={HospitalStyles.searchInput} value={department}></input>
                                <button type='submit' className={HospitalStyles.searchInputBtn}><i className="fa-solid fa-magnifying-glass"></i></button>
                            </form>
                        </div>
                    </div>
                    <section>
                        <div className={HospitalStyles.selectSubMenu}>
                            <div className={HospitalStyles.filterBox}>
                                <button className={HospitalStyles.filterBtn}><i className="fa-solid fa-sliders"></i></button>
                            </div>
                            <div className={HospitalStyles.filterBtnBox}>
                                <button className={HospitalStyles.detailfilterBtnBox}>
                                    <span>가까운 순</span>
                                    <div>
                                        <div className={HospitalStyles.menuDown}>
                                            <span><i className="fa-solid fa-angle-down"></i></span>
                                        </div>
                                    </div>
                                </button>
                                {filterBtns.map((v, i) => (
                                    <button
                                        key={i} 
                                        className={`${HospitalStyles.detailfilterBtnBox} ${filterBtnClickStatus[i] ? HospitalStyles.activeBtn : ""} ${i === 0 ? HospitalStyles.activeBtn : ""}`}
                                        onClick={() => toggleActive(v, i)}
                                    >
                                        {i === 0 ? 
                                            <>
                                                <div>
                                                    <span className={HospitalStyles.btnSpan}><i className="fa-solid fa-location-crosshairs"></i></span>
                                                </div>
                                                <span className={HospitalStyles.btnSpan}>
                                                    {v}
                                                </span>
                                            </>
                                            : 
                                            <>
                                                <span className={filterBtnClickStatus[i] === true ? HospitalStyles.btnSpan : ""}>
                                                    {v === "hospitalOpen" ? "진료 중"
                                                        : v === "nightOpen" ? "야간진료"
                                                        : v === "emergency" ? "응급병동" : ""
                                                    }
                                                </span>
                                            </>
                                        }
                                    </button>
                                ))}
                            </div>
                        </div>
                        {
                            hospitalList.length > 0 && (   
                                <section className={HospitalStyles.hospitalListSection}>
                                    <div>
                                        <ul className={`${HospitalStyles.hospitalListUl}`}>
                                            {hospitalList.map((v, i) => (
                                                <HospitalList 
                                                    hospitalList={v}
                                                    index={i}
                                                    department={department}
                                                    key={i}
                                                ></HospitalList>
                                            ))}
                                            <div ref={hospitalListRef}></div>
                                        </ul>
                                    </div>
                                </section>
                            )}
                            {loading && <div>Loading...</div>}
                    </section>
                </div>
            </div>
        </>
    );
}

export default SearchHospitalTitle;
