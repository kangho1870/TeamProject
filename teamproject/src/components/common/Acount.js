import axios from "axios";
import styles from "../../css/common/Acount.module.css";

function Acount(props) {
    const handleContentClick = (e) => {
        e.stopPropagation();
        
    };

    const kakaoLogin = () => {
        const clientId = '0f429e5d9c11874df48c1325b0d9454e';
        const redirectUri = 'http://localhost:3000/api/login/kakao';
        const responseType = 'code';
        const scope = 'profile_nickname';

        const url = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
        
        window.location.href = url;
    }

    return (
        <>
            <div>
                <div className={styles.acountArea} onClick={props.closeModal}>
                    <div className={styles.acountBox} onClick={handleContentClick}>
                        <div className={styles.acountBoxTop}>
                            <button onClick={props.closeModal}>
                                <span>
                                    <i class="fa-solid fa-xmark"></i>
                                </span>
                            </button>
                        </div>
                        <h1 className={styles.text}>
                            로그인 및 회원가입을 <br></br>
                            클릭 한 번으로 시작하세요.
                        </h1>
                        <p className={styles.text2}>로그인 후 더 편리하게 예약을 해보세요.</p>
                        <button className={styles.kakaoBtn} onClick={kakaoLogin}>
                            <div>
                                <img src={require("../../imgs/acount-img/kakao.png")} className={styles.kakaoImg}></img>
                            </div>
                            카카오톡으로 시작하기
                        </button>
                        <button className={`${styles.kakaoBtn} ${styles.mongDdangBtn}`}>
                            <div className={styles.login}>
                                <i class="fa-solid fa-stethoscope"></i>
                            </div>
                            몽땅병원 로그인
                        </button>
                        <button className={`${styles.kakaoBtn} ${styles.signupBtn}`}>
                            <div>
                                회원가입
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Acount;