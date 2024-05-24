import React from "react";
import styles from "../../css/community/Magzine.module.css"
import Category from "../../components/common/Category.js";

function Magzine() {
  let data = 
    {
      id: 1,
      title: "삭센다 주사 투여 시간, 가격, 처방받을 수 있는지 궁금하다면 부작용까지 A to",
      content: `다이어트를 시작하면서 약물의 도움을 통해 식욕 억제 효과를 얻고 싶다면,
      '삭센다' 주사를 고려해 볼 수 있어요. '삭센다' 주사의 성분은 '리라글루티드'로 GLP-1과 유사한 구조를 가진 물질이에요.
       GLP-1은 음식을 먹었을 때 인슐린 분비를 낮추고 위장 활동을 저하시켜 소화가 덜 되고 포만감이 들게 하고 식욕 억제 효과가 발생해요.
      따라서 식욕이 조절 안 되는 다이어터라면 '삭센다' 주사의 도움을 받아 볼 수 있어요.
      다이어트 주사 '삭센다'는 언제 투약하는지, 가격은 얼마인지, 처방받으려면 어떻게 해야 하는지에 대해 알아볼게요.`,
      header: "부작용"
    }
  
    const params = new URLSearchParams(window.location.search);

    let contentId = params.get("id");
    console.log(contentId);
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
              <p>건강매거진{">"}</p>  
            </a>
          </div>
            <div role="button" className={styles.breadcrumbsBoxs}>
              <a href="/HealthMagzine">
                <p>{data.header}</p>  
              </a>
            </div>
    </div>
 </div>
         <main className={styles.mainMagzine}>
            <div className={styles.mainTitle}> 
            <span className={styles.mainPhoto}>
             <img alt="타이틀 이미지" src={require('../../imgs/healthMagzine-img/삭센다2.jpg')}
             className={styles.titlePhoto}></img></span>

             <header className={styles.headerTitle}>
                <hgroup className={styles.hgroup}>
                    <h1 className={styles.h1Title}>{data.title}</h1>
                    <h2 className={styles.h2}>삭센다 주사의 투여시간, 가격, 
                    처방가능 여부에 대해 알려드려요</h2>
    </hgroup>
        </header>       
        </div>
              <div className={styles.space}></div>
              <div className={styles.content}>
                <p>{data.content}</p>
                   <br></br>
                   <h3 id="titles">삭센다 주사 맞는 걸 깜빡했는데, 어떻게 해야 하나요?</h3>
                   <p>만약 깜빡하고 오늘 주사 맞는 것을 잊었고 12시간 이내에 생각났다면,
                     가능한 한 빨리 오늘 용량을 투여해요.
                      단, 12시간이 지나서 기억났다면 바로 투여하는 것이 아니라
                      , 다음날 주사 시간에 원래 맞던 용량을 투여해야 해요. 하루 빠뜨렸다고 용량을 2배로 올려 투약할 경우,
                       위장 관련 부작용이 심하게 나타날 수 있으므로 주의하세요.</p>    
                   <br></br>
                     


              </div>



         </main>
 </div>

        </div>

    )
}

export default Magzine;