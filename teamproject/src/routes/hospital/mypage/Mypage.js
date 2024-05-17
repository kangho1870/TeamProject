import { useEffect, useState } from "react";
import Category from "../../../components/common/Category";
import styles from "../../../css/mypage/Mypage.module.css";
import MypageArtilce from "./MypageArticle";
import MypageMedicalHistory from "./MypageMedicalHistory";



function Mypage() {
    let [navTitle, setNavTitle] = useState(0);
    const btnNum = ["게시글", "작성한 후기", "진료내역", "찜한 병원"];
    let [clicked, setClicked] = useState(btnNum[0]);
    
    const toggleActive = (item) => {
        setClicked(item);
        setNavTitle(btnNum.indexOf(item));
    };

    return (
        <>
            <div className="container">
                <Category></Category>
                <div className={styles.mypageArea}>
                    <div className={styles.smallNavBox}>
                        <div role="button" className={styles.smallNav}>
                            <a href="/"><p>홈</p></a>
                        </div>
                        <div className={styles.smallNav}>
                            {">"}
                        </div>
                        <div role="button" className={styles.smallNav}>
                            <a href="/mypage"><p>마이페이지</p></a>
                        </div>
                    </div>
                    <div className={styles.userContentBox}>
                        <div className={styles.userIcon}>
                            <img src={require("../../../imgs/mypage-img/userIcon.png")}></img>
                        </div>
                        <div className={styles.userNicname}>
                            <div>teamproject</div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.mypageNav}>
                            {btnNum.map((item, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    value={item}
                                    className={`${styles.btn} ${clicked === item ? styles.active : ""}`}
                                    onClick={() => {
                                        toggleActive(item);
                                    }}
                                >
                                    <span className={`${styles.btn} ${clicked === item ? styles.title : ""}`}>{item}</span>
                                </button>
                            ))}
                        </div>
                        <div className={styles.lineDiv}></div>
                    </div>
                    <div>
                        <div className={styles.contextArea}>
                            {navTitle == 0 ? <MypageArtilce></MypageArtilce>
                                : navTitle == 2 ? <MypageMedicalHistory></MypageMedicalHistory>
                                : null
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mypage;