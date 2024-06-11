import { useEffect, useState } from "react";
import Category from "../../../components/common/Category";
import styles from "../../../css/mypage/Mypage.module.css";
import MypageArtilce from "./MypageArticle";
import MypageMedicalHistory from "./MypageMedicalHistory";
import { Outlet, useHref, useNavigate, useParams } from "react-router-dom";
import axios from "axios";



function Mypage() {
    const { title } = useParams();
    const navigate = useNavigate();
    let userId = 1;
    let [navTitle, setNavTitle] = useState(0);
    const btnNum = ["articles", "appointment", "medicalHistory", "favoritesHospital"];
    let [clicked, setClicked] = useState(btnNum[0]);
    
    const toggleActive = (item) => {
        setClicked(item);
        setNavTitle(btnNum.indexOf(item));
    };

    useEffect(() => {
        loadData();
        if(title && btnNum.includes(title)) {
            toggleActive(title);
        }
    }, [title]);

    const loadData = async () => {
        try {
            const response = await axios.get(`/mypage/${title}`, {
                headers: {
                    'userId': userId
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error("There was an error loading the data!", error);
        }
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
                                        navigate(`/mypage/${item}`);
                                    }}
                                >
                                    <span className={`${styles.btn} ${clicked === item ? styles.title : ""}`}>
                                        {item == 'articles' ? '게시글'
                                            : item == 'appointment' ? '예약 내역'
                                            : item == 'medicalHistory' ? '진료 내역'
                                            : item == 'favoritesHospital' ? '찜한 병원' : ""}
                                    </span>
                                </button>
                            ))}
                        </div>
                        <div className={styles.lineDiv}></div>
                    </div>
                    <div>
                        <div className={styles.contextArea}>
                            <Outlet>
                                
                            </Outlet>
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