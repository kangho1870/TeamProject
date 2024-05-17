import { useEffect } from "react";
import styles from "../../../css/mypage/MypageMedicalHistory.module.css";
import { useNavigate } from "react-router-dom";


const { kakao } = window;



function MypageMedicalHistory() {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.medicalHistoryArea} onClick={() => {
                navigate("/hospitals/1")
            }}>
                <div>
                    <div className={styles.userBox}>
                        <div className={styles.userNameBox}>
                            <img src={require("../../../imgs/mypage-img/userIcon.png")} className={styles.userProfile}></img>
                            <p className={styles.username}>teamproject</p>
                        </div>
                        <div>
                            <p className={styles.hospitalName}>피부과의원</p>
                        </div>
                        <div>
                            <p className={styles.medicalHistory}>2024-05-16{"(목)"}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.hospitalMapBox}>
                    <div id="map1" className={styles.hospitalMap}>
                        {<Kakao></Kakao>}
                    </div>
                    <div className={styles.hospitalAddressBox}>
                        <p className={styles.hospitalAddress}>부산광역시 부산진구 동천로 116 404호</p>
                    </div>
                </div>
            </div>
            <div className={styles.medicalHistoryArea}>
                <div>
                    <div className={styles.userBox}>
                        <div className={styles.userNameBox}>
                            <img src={require("../../../imgs/mypage-img/userIcon.png")} className={styles.userProfile}></img>
                            <p className={styles.username}>teamproject</p>
                        </div>
                        <div>
                            <p className={styles.hospitalName}>피부과의원</p>
                        </div>
                        <div>
                            <p className={styles.medicalHistory}>2024-05-16{"(목)"}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.hospitalMapBox}>
                    <div id="map2" className={styles.hospitalMap}>
                        {<Kakao></Kakao>}
                    </div>
                    <div className={styles.hospitalAddressBox}>
                        <p className={styles.hospitalAddress}>부산광역시 부산진구 동천로 116 404호</p>
                    </div>
                </div>
            </div>
        </>
    )
}

function Kakao() {

    useEffect(() => {
        const container1 = document.getElementById('map1');
        let options1 = { //지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 2 //지도의 레벨(확대, 축소 정도)
        };
        let map1 = new kakao.maps.Map(container1, options1)
        let markerPosition1  = new kakao.maps.LatLng(33.450701, 126.570667);
        let marker1 = new kakao.maps.Marker({
            position: markerPosition1
        });

        marker1.setMap(map1);

        const container2 = document.getElementById('map2');
        let options2 = { //지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 4 //지도의 레벨(확대, 축소 정도)
        };
        let map2 = new kakao.maps.Map(container2, options2)
        let markerPosition2  = new kakao.maps.LatLng(33.450701, 126.570667);
        let marker2 = new kakao.maps.Marker({
            position: markerPosition2
        });

        console.log(marker2.getVisible());

        marker2.setMap(map2);
    }, [])
  
  return (
    <>
        <div id="map1" style={{ width: "300px", height: "130px" }}>

        </div>
    </>
  )
}

export default MypageMedicalHistory;