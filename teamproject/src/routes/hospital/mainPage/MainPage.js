

import { useState } from "react";
import styles from "../../../css/mainPage/mainPage.module.css";

import Banner from './Banner';
import { useNavigate } from "react-router-dom";



function MainPage() {
    const navigate = useNavigate();
    const categoryBtns = ['커뮤니티', '건강 매거진'];
    let [clickBtn, setClickBtn] = useState(categoryBtns[0]);

    const toogleActive = (item) => {
        setClickBtn(item);
    }


    return (
        <>
            <div className={styles.mainpage}>
                <div style={{width:"100%", height:"300px"}}>
                    <Banner></Banner>
                </div>
                <main className={styles.mainArea}>
                    <div className={styles.searchBox}>
                        <div className={styles.inputBox}>
                            <div className={styles.logo}>
                                <i class="fa-solid fa-stethoscope"></i>
                            </div>
                            <input placeholder="머리가 아파요, 목이 따가워요" className={styles.searchInput}></input>
                        </div>
                        <div>
                            <div>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                    <div className={styles.navBox}>
                        <div className={styles.navArea} onClick={() => {navigate("/hospitals")}}>
                            <div className={`${styles.searcHospitalBtnBox} ${styles.searchBtnBox}`}>
                                <p className={styles.searcHospitalBtnSubTitle}>내가 원하는 정보로</p>
                                <p className={styles.searcHospitalBtnTitle}>병원 찾기</p>
                            </div>
                        </div>
                        <div className={styles.navArea}onClick={() => {navigate("/pharmacys")}}>
                            <div className={`${styles.searcPharmacyBtnBox} ${styles.searchBtnBox}`}>
                                <p className={styles.searcHospitalBtnSubTitle}>내 주변에 있는</p>
                                <p className={styles.searcHospitalBtnTitle}>약국 찾기</p>
                            </div>
                        </div>
                        <div className={styles.navArea} onClick={() => {navigate("/hospitals")}}>
                            <div className={`${styles.searcAppointmentBtnBox} ${styles.searchBtnBox}`}>
                                <p className={styles.searcHospitalBtnSubTitle}>빠르고 손 쉽게</p>
                                <p className={styles.searcHospitalBtnTitle}>병원 예약하기</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contentsNavBtn}>
                        {categoryBtns.map((v, i) => (
                            <button
                                key={i}
                                value={v}
                                className={`${styles.contentNavBtn} ${clickBtn === v ? styles.contentNavBtnActive : ""}`}
                                onClick={() => toogleActive(v)}
                            >
                                {v}
                            </button>
                        ))}
                    </div>
                    <div className={styles.contentArea}>
                        <div className={styles.navTitleBox}>
                            <h2 className={styles.navTitle}>커뮤니티</h2>
                            <button type="button" className={styles.moreBtn}>더보기</button>
                        </div>
                        <div className={styles.contentBox}>
                            <div className={styles.contentTitleBox}>
                                <div className={styles.contextBox}>
                                    <div>
                                        <h3 className={styles.contentTitle}>목에 이물감이 57일째, 역류성후두염인지 감기인지 헷갈려요. 비염과 연관이 있을까요?</h3>
                                        <p className={styles.content}>제가 57일전부터 지금까지 목이 이물감이 계속 느껴졌는데 역류성후두염인지,그냥 감기인지 헷갈림니다. 그리고 원래 비염을 달고 살았지만 이거랑 연관이 있을까요? [어떻게 행동을해야 빨리 나을수 있는지 정확한 답변 부탁드림니다.]</p>
                                    </div>
                                </div>
                                <div className={styles.writeBox}>
                                    <p className={styles.write}>2024.05.19</p>
                                </div>
                            </div>
                            <div className={styles.contentTitleBox}>
                                <div className={styles.contextBox}>
                                    <div>
                                        <h3 className={styles.contentTitle}>목에 이물감이 57일째, 역류성후두염인지 감기인지 헷갈려요. 비염과 연관이 있을까요?</h3>
                                        <p className={styles.content}>제가 57일전부터 지금까지 목이 이물감이 계속 느껴졌는데 역류성후두염인지,그냥 감기인지 헷갈림니다. 그리고 원래 비염을 달고 살았지만 이거랑 연관이 있을까요? [어떻게 행동을해야 빨리 나을수 있는지 정확한 답변 부탁드림니다.]</p>
                                    </div>
                                </div>
                                <div className={styles.writeBox}>
                                    <p className={styles.write}>2024.05.19</p>
                                </div>
                            </div>
                            <div className={styles.contentTitleBox}>
                                <div className={styles.contextBox}>
                                    <div>
                                        <h3 className={styles.contentTitle}>목에 이물감이 57일째, 역류성후두염인지 감기인지 헷갈려요. 비염과 연관이 있을까요?</h3>
                                        <p className={styles.content}>제가 57일전부터 지금까지 목이 이물감이 계속 느껴졌는데 역류성후두염인지,그냥 감기인지 헷갈림니다. 그리고 원래 비염을 달고 살았지만 이거랑 연관이 있을까요? [어떻게 행동을해야 빨리 나을수 있는지 정확한 답변 부탁드림니다.]</p>
                                    </div>
                                </div>
                                <div className={styles.writeBox}>
                                    <p className={styles.write}>2024.05.19</p>
                                </div>
                            </div>
                            <div className={styles.contentTitleBox}>
                                <div className={styles.contextBox}>
                                    <div>
                                        <h3 className={styles.contentTitle}>목에 이물감이 57일째, 역류성후두염인지 감기인지 헷갈려요. 비염과 연관이 있을까요?</h3>
                                        <p className={styles.content}>제가 57일전부터 지금까지 목이 이물감이 계속 느껴졌는데 역류성후두염인지,그냥 감기인지 헷갈림니다. 그리고 원래 비염을 달고 살았지만 이거랑 연관이 있을까요? [어떻게 행동을해야 빨리 나을수 있는지 정확한 답변 부탁드림니다.]</p>
                                    </div>
                                </div>
                                <div className={styles.writeBox}>
                                    <p className={styles.write}>2024.05.19</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.centerDiv}></div>
                    <div className={styles.contentArea}>
                        <div className={styles.navTitleBox}>
                            <h2 className={styles.navTitle}>건강 매거진</h2>
                            <button type="button" className={styles.moreBtn}>더보기</button>
                        </div>
                        <div className={styles.contentBox}>
                            <div className={styles.contentTitleBox}>
                                <div className={styles.contextBox}>
                                    <div>
                                        <h3 className={styles.contentTitle}>목에 이물감이 57일째, 역류성후두염인지 감기인지 헷갈려요. 비염과 연관이 있을까요?</h3>
                                        <p className={styles.content}>제가 57일전부터 지금까지 목이 이물감이 계속 느껴졌는데 역류성후두염인지,그냥 감기인지 헷갈림니다. 그리고 원래 비염을 달고 살았지만 이거랑 연관이 있을까요? [어떻게 행동을해야 빨리 나을수 있는지 정확한 답변 부탁드림니다.]</p>
                                    </div>
                                </div>
                                <div className={styles.writeBox}>
                                    <p className={styles.write}>2024.05.19</p>
                                </div>
                            </div>
                            <div className={styles.contentTitleBox}>
                                <div className={styles.contextBox}>
                                    <div>
                                        <h3 className={styles.contentTitle}>목에 이물감이 57일째, 역류성후두염인지 감기인지 헷갈려요. 비염과 연관이 있을까요?</h3>
                                        <p className={styles.content}>제가 57일전부터 지금까지 목이 이물감이 계속 느껴졌는데 역류성후두염인지,그냥 감기인지 헷갈림니다. 그리고 원래 비염을 달고 살았지만 이거랑 연관이 있을까요? [어떻게 행동을해야 빨리 나을수 있는지 정확한 답변 부탁드림니다.]</p>
                                    </div>
                                </div>
                                <div className={styles.writeBox}>
                                    <p className={styles.write}>2024.05.19</p>
                                </div>
                            </div>
                            <div className={styles.contentTitleBox}>
                                <div className={styles.contextBox}>
                                    <div>
                                        <h3 className={styles.contentTitle}>목에 이물감이 57일째, 역류성후두염인지 감기인지 헷갈려요. 비염과 연관이 있을까요?</h3>
                                        <p className={styles.content}>제가 57일전부터 지금까지 목이 이물감이 계속 느껴졌는데 역류성후두염인지,그냥 감기인지 헷갈림니다. 그리고 원래 비염을 달고 살았지만 이거랑 연관이 있을까요? [어떻게 행동을해야 빨리 나을수 있는지 정확한 답변 부탁드림니다.]</p>
                                    </div>
                                </div>
                                <div className={styles.writeBox}>
                                    <p className={styles.write}>2024.05.19</p>
                                </div>
                            </div>
                            <div className={styles.contentTitleBox}>
                                <div className={styles.contextBox}>
                                    <div>
                                        <h3 className={styles.contentTitle}>목에 이물감이 57일째, 역류성후두염인지 감기인지 헷갈려요. 비염과 연관이 있을까요?</h3>
                                        <p className={styles.content}>제가 57일전부터 지금까지 목이 이물감이 계속 느껴졌는데 역류성후두염인지,그냥 감기인지 헷갈림니다. 그리고 원래 비염을 달고 살았지만 이거랑 연관이 있을까요? [어떻게 행동을해야 빨리 나을수 있는지 정확한 답변 부탁드림니다.]</p>
                                    </div>
                                </div>
                                <div className={styles.writeBox}>
                                    <p className={styles.write}>2024.05.19</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default MainPage;