import face from '../../imgs/department-img/피부과.png'
import Category from "../../components/common/Category";
import styles from '../../css/hospital/SearchHospital.module.css';
import HospitalStyles from '../../css/hospital/SearchHospitalTitle.module.css';
import HospitalList from '../../components/hospital/HospitalList';
function SearchHospitalTitle() {

    const params = new URLSearchParams(window.location.search);
    
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
                                <button className={HospitalStyles.placeBtn}>
                                    <div>
                                        <span><i class="fa-solid fa-location-crosshairs"></i></span>
                                    </div>
                                    <span>연산동</span>
                                </button>
                                <button className={HospitalStyles.detailfilterBtnBox}>
                                    <i class="fa-solid fa-house-medical-circle-check"></i>
                                    <span>간편예약</span>
                                </button>
                                <button className={HospitalStyles.detailfilterBtnBox}>
                                    <span>진료중</span>
                                </button>
                                <button className={HospitalStyles.detailfilterBtnBox}>
                                    <span>야간진료</span>
                                </button>
                                <button className={HospitalStyles.detailfilterBtnBox}>
                                    <span>응급병동</span>
                                </button>
                            </div>
                        </div>
                        <HospitalList></HospitalList>
                    </section>
                </div>
            </div>
        </>
    )
}

export default SearchHospitalTitle;