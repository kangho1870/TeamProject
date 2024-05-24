import React from "react";
import styles from "../../css/community/HealthMagzine.module.css"
import Category from "../../components/common/Category.js";

function HealthMagzine() {

  let magzine = [
    {
      id: 1,
      title: 1,
      content:1
    },
    {
      id: 2,
      title: 2,
      content:2
    },
    {
      id: 3,
      title: 3,
      content:3
    }
  ];
  

    return (
       <div className="container">
         <Category></Category>
        <div className={styles.mainHome}>
        <div className={styles.main}>
        <div className={styles.mainBox}></div>
         <div className={styles.breadcrumbs}>
          <div role="button" className={styles.breadcrumbsBox}>
            <a href="/">
              <p>홈{">"}</p>  
            </a>     
          </div>
          <div role="button" className={styles.breadcrumbsBoxs}>
            <a href="/HealthMagzine">
              <p>건강매거진</p>  
            </a>
    </div>
 </div> 
         <div className={styles.contentBox}>
         <div className={styles.contentTitle}>건강매거진</div>
         <div className={styles.contentMain}>
          <p>최신컨텐츠</p>
          <ul className={styles.contentList}>
            {magzine.map((v, i) => {
              return (
                <a className={v.id} target="/self" href={`/HealthMagzine/Magzine/?id=${v.id}`}>
                  <div role="button" className={styles.magzine}>
                    <li className={styles.magzineMain}>
                      <div className={styles.magzinebox}>
                        <div className={styles.separation}>
                          <h2 className={styles.magzineTitle}>
                            {v.title}
                          </h2>
                          <p className={styles.magzineContent}>
                            {v.content}
                          </p>
                          <time className={styles.magzineTime}></time>
                        </div>
                        <div className={styles.magzineImg}>
                          <img src={require(`../../imgs/healthMagzine-img/삭센다${v.id}.jpg`)} className=
                          {styles.magzineImgs}>
                          </img>
                        </div>
                      </div>
                    </li>
                  </div>
                </a>
              )
            })}
            {/* <a target="/self" href="/HealthMagzine/Magzine">
              <div role="button" className={styles.magzine}>
                <li className={styles.magzineMain}>
                  <div className={styles.magzinebox}>
                    <div className={styles.separation}>
                      <h2 className={styles.magzineTitle}>삭센다 주사 투여시간, 가격, 처방받을수 있는지 궁금하다면?
                        A ~ Z 까지 알려드려요
                      </h2>
                      <p className={styles.magzineContent}>삭센다 주사의 투여시간, 가격, 
                          처방가능 여부에 대해 알려드려요
                      </p>
                      <time className={styles.magzineTime}>2024.04.29</time>
                    </div>
                    <div className={styles.magzineImg}>
                      <img src={require('../../imgs/healthMagzine-img/삭센다1.jpg')} className=
                      {styles.magzineImgs}>
                      </img>
                    </div>
                  </div>
                </li>
              </div>
            </a>
            <a target="/self" href="/HealthMagzine/Magzine/:magazineId"></a>
          <div role="button" className={styles.magzine}></div>
            <li className={styles.magzineMain}>
              <div className={styles.magzinebox}>
                <div className={styles.separation}>
                  <h2 className={styles.magzineTitle}>잇몸치료 나눠서 하는이유? 잇몸치료 통증,
                   실비가능 여부까지!</h2>
                    <p className={styles.magzineContent}>잇몸치료 나눠서 해야 하는 이유와 통증,
                     실비가능 여부까지 궁금하다면 읽어보세요.</p>
                    <time className={styles.magzineTime}>2024.04.26</time>
                </div>
                <div className={styles.magzineImg}>
                <img src={require('../../imgs/healthMagzine-img/잇몸.jpg')} className=
                {styles.magzineImgs}></img>
                </div>
            </div>          
            </li>
            <a target="/self" href="/HealthMagzine/Magzine></a>
          <div role="button" className={styles.magzine}></div>
            <li className={styles.magzineMain}>
              <div className={styles.magzinebox}>
                <div className={styles.separation}>
                  <h2 className={styles.magzineTitle}>삭센다 효과, 부작용, 사용법, 주의사항이 궁금하다면?</h2>
                    <p className={styles.magzineContent}>삭센다 주사의 효과와 부작용, 사용법,
                     주의사항에 대해 자세히 알려드릴게요.</p>
                    <time className={styles.magzineTime}>2024.04.25</time>
                </div>
                <div className={styles.magzineImg}>
                <img src={require('../../imgs/healthMagzine-img/부작용.jpg')} className=
                {styles.magzineImgs}></img>
                </div>
            </div>          
            </li>
            <a target="/self" href="/HealthMagzine/Magzine"></a>
          <div role="button" className={styles.magzine}></div>
            <li className={styles.magzineMain}>
              <div className={styles.magzinebox}>
                <div className={styles.separation}>
                  <h2 className={styles.magzineTitle}>피나스테리드 성분의 뿌리는 탈모약 '핀쥬베' 효과,
                   부작용, 사용법, 주의사항까지</h2>
                    <p className={styles.magzineContent}>피나스테리드 성분의 뿌리는 탈모약 '핀쥬베'의 장점, 효과,
                     사용법, 주의사항이 궁금하다면?</p>
                    <time className={styles.magzineTime}>2024.04.24</time>
                </div>
                <div className={styles.magzineImg}>
                <img src={require('../../imgs/healthMagzine-img/핀쥬베.jpg')} className=
                {styles.magzineImgs}></img>
                </div>
            </div>          
            </li>
            <a target="/self" href="/HealthMagzine/Magzine">

            </a> */}
          <div role="button" className={styles.magzine}>

          </div>
            <li className={styles.magzineMain}>
              <div className={styles.magzinebox}>
                <div className={styles.separation}>
                  <h2 className={styles.magzineTitle}>염증성 여드름에 효과적인 염증 주사? 효과,
                   부작용, 성분 파헤치기</h2>
                    <p className={styles.magzineContent}>"삭센다" 주사의 투여시간, 가격, 
                    처방가능 여부에 대해 알려드려요염증 주사 효과, 부작용,
                     성분이 궁금하다면 읽어보세요.</p>
                    <time className={styles.magzineTime}>2024.04.20</time>
                </div>
                <div className={styles.magzineImg}>
                <img src={require('../../imgs/healthMagzine-img/여드름.jpg')} className=
                {styles.magzineImgs}></img>
                </div>
            </div>          
            </li>

          </ul>
          
         </div>
         </div>
</div>    
</div>
</div>

    )
}

export default HealthMagzine;