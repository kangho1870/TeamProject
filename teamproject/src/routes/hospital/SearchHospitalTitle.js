import Category from "../../components/common/Category";
import styles from '../../css/hospital/SearchHospital.module.css';
import HospitalStyles from '../../css/hospital/SearchHospitalTitle.module.css';
import HospitalList from '../../components/hospital/HospitalList';
import { useEffect, useState, useRef } from 'react';
import axios from "axios";

function SearchHospitalTitle() {
    const params = new URLSearchParams(window.location.search);
    let department = params.get("keyword");
    const [totalPage, setTotalPage] = useState(1);
    const [page, setPage] = useState(1);
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

    const filterBtns = [filter.userAddress, "hospitalOpen", "nightOpen", "emergency"];
    const [filterBtnClickStatus, setFilterBtnClickStatus] = useState([true, false, false, false]);
    const hospitalListRef = useRef(null);

    const loadData = (newPage) => {
        setLoading(true);
        axios.post(`/hospitals`, { ...filter, page: newPage }, {
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(response => {
            const data = response.data.data;
            if(data.length > 0) {
                const totalCount = data[0].totalCount;
                setTotalPage(Math.ceil(totalCount / 20));
                setHospitalList(prevList => [...prevList, ...data]);
                console.log(data)
            }
            setLoading(false);
        })
        .catch(error => {
            console.error("에러 발생:", error);
            setLoading(false);
        });
    };

    const toggleActive = (item, index) => {
        const copyBtnsStatus = [...filterBtnClickStatus];
        copyBtnsStatus[index] = !copyBtnsStatus[index];
        setFilterBtnClickStatus(copyBtnsStatus);

        const copyFilter = { ...filter };
        if (typeof copyFilter[item] === "boolean") {
            copyFilter[item] = !copyFilter[item];
        }
        setFilter({ ...copyFilter, page: 1 });
        setPage(1);
        setHospitalList([]);
    };

    useEffect(() => {
        loadData(1);
    }, [filter]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && page < totalPage && !loading) {
                setPage(prevPage => prevPage + 1);
            }
        }, {
            root: null,
            rootMargin: '20px',
            threshold: 1
        });

        if(hospitalListRef.current) {
            observer.observe(hospitalListRef.current);
        }

        return () => {
            if(hospitalListRef.current) {
                observer.unobserve(hospitalListRef.current);
            }
        };
    }, [hospitalList, page, totalPage, loading]);

    useEffect(() => {
        if(page > 1) {
            loadData(page);
        }
    }, [page]);

    return (
        <>
            <div className='container'>
                <Category />
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
                                <input placeholder='지역+과목명, 병원명을 입력해주세요.' className={HospitalStyles.searchInput} value={department}/>
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
                                            {page < totalPage ? <div ref={hospitalListRef}></div> : <div className="test"></div>}
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
