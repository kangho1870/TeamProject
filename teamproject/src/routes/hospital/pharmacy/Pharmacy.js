import { useEffect, useState } from "react";
import Category from "../../../components/common/Category";
import styles from "../../../css/pharmacy/Pharmacy.module.css";
import { useNavigate } from "react-router-dom";

const { kakao } = window;
let pharmacy = ["스타미피부과의원", "그린약국"];

function Pharmacy() {

    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <Category></Category>
                <div className={styles.mainContext}>
                    <div className={styles.mainNavSmall}>
                        <div role="button" className={styles.smallNav}>
                            <a onClick={() => {navigate("/")}}><p>홈</p></a>
                        </div>
                        <div className={styles.smallNav}>
                            {">"}
                        </div>
                        <div role="button" className={styles.smallNav}>
                            <a onClick={() => {navigate("/pharmacys")}}><p>약국 찾기</p></a>
                        </div>
                    </div>
                    <div>
                        <div className={styles.titleBox}>
                            <h1 className={styles.mainTitle}>약국 찾기</h1>
                        </div>
                        <div className={styles.map}>
                            <Kakao></Kakao>
                        </div>
                    </div>
                    <div>
                        <div className={styles.titleBox}>
                            <h1 className={styles.mainTitle}>주변 약국</h1>
                        </div>
                        <PharmacyList></PharmacyList>
                    </div>
                </div>
            </div>
        </>
    )
}

function Kakao() {

    useEffect(() => {
        const container = document.getElementById('map');
        let options = { //지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 5 //지도의 레벨(확대, 축소 정도)
        };
        let map = new kakao.maps.Map(container, options)

        let positions = [
            {
                content: `<div className=${styles.mapMarker}>카카오</div>`, 
                latlng: new kakao.maps.LatLng(33.450705, 126.570677)
            },
            {
                content: '<div>생태연못</div>', 
                latlng: new kakao.maps.LatLng(33.450936, 126.569477)
            },
            {
                content: '<div>텃밭</div>', 
                latlng: new kakao.maps.LatLng(33.450879, 126.569940)
            },
            {
                content: '<div>근린공원</div>',
                latlng: new kakao.maps.LatLng(33.451393, 126.570738)
            }
        ];

        for (var i = 0; i < positions.length; i ++) {
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng // 마커의 위치
            });
        
            // 마커에 표시할 인포윈도우를 생성합니다 
            var infowindow = new kakao.maps.InfoWindow({
                content: positions[i].content // 인포윈도우에 표시할 내용
            });
        
            // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
            // 이벤트 리스너로는 클로저를 만들어 등록합니다 
            // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
            kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
            kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
        }

        function makeOverListener(map, marker, infowindow) {
            return function() {
                infowindow.open(map, marker);
            };
        }
        
        // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
        function makeOutListener(infowindow) {
            return function() {
                infowindow.close();
            };
        }

    }, [])
  
  return (
    <div id="map" style={{ width: "100%", height: "400px", borderRadius: "12px"}}>

    </div>
  )
}

function PharmacyList() {
    
    let [moreDetailBox, setMoreDetailBox] = useState(pharmacy.map(() => false));

    const toggleMoreDetail = (index) => {
        setMoreDetailBox((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const handleButtonClick = (e, index) => {
        e.stopPropagation();
        toggleMoreDetail(index);
    };

      const handleContainerClick = (index) => {
        toggleMoreDetail(index);
    };
      
    return (
        <div>
            <ul className={styles.pharmacyListUl}>
                {pharmacy.map((v, i) => {
                    return (
                        <>
                            <div role="button" className={styles.pharmacyDetailBox} onClick={() => {handleContainerClick(i)}}>
                                <a>
                                    <li className={styles.pharmacyListLi}>
                                        <div className={styles.pharmacyListDetailBox}>
                                            <div className={styles.pharmacyListDetail}>
                                                <div className={styles.pharmacyListDetailTitleBox}>
                                                    <h3 className={styles.pharmacyListDetailTitle}>{v}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.pharmacyListDetailLocationBox}>
                                            <span className={styles.pharmacyListDetailLocation}>1호선 부전역 6번출구</span>
                                        </div>
                                    </li>
                                </a>
                                <div className={styles.pharmacyMoreBtnBos}>
                                    <button onClick={(e) => {handleButtonClick(e, i)}}><i class="fa-solid fa-chevron-down"></i></button>
                                </div>
                            </div>
                            {moreDetailBox[i] && 
                                <div className={styles.pharmacyDetailContextBox}>
                                    <div>
                                        <p>051-316-5833 + {i}</p>
                                    </div>
                                </div>
                            }
                        </>
                    )
                })}
            </ul>
        </div>
    )
}


export default Pharmacy;