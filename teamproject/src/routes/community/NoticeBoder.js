import React from "react";
import styles from "../../css/community/NoticeBoder.module.css";
import CommunityModal from "./CommunityModal";
import Category from "../../components/common/Category.js";

function NoticeBoder() {
    return (
        <div className="container">
            <Category></Category>
            <div className={styles.main}>
            <div className={styles.mainHome}>
             <div className={styles.mainBox}>
               <div className={styles.mainBoxs}>
                 <div className={styles.mainHeader}>
                  <div className={styles.breadcrumbs}>
                  <div role="button" className={styles.breadcrumbsButton}>
                     <a><p>홈</p></a>                                
                   </div>
                <div className={styles.mark}>
                     {">"}
                  </div>
                  <div role="button" className={styles.breadcrumbsButton}>
                    <a><p>커뮤니티</p></a>                                
                   </div>
                <div className={styles.mark}>
                    {">"}
                  </div>
                  <div role="button" className={styles.breadcrumbsButton}>
                    <a><p>글쓰기</p></a>                                
        </div>                    
        </div>         
    </div>   
          <div role="button" className={styles.mainBanner}>
          <div className={styles.writeBoxi}>
            <div>
            <i class="fa-solid fa-list-ul"></i> 
            </div>
            <div className={styles.writeBox}>카테고리를 선택하세요</div>
            <div className={styles.writeBoxii}>
            <i class="fa-solid fa-arrow-down"></i>
            </div>
            </div> 
          </div>
          <div className={styles.noticeBox}> //메인상자 
          <textarea rows={1} maxLength={100} placeholder="제목을 입력해주세요 (100자 이내)"
          className={styles.noticeText}>
          </textarea>
          <textarea maxLength={500} placeholder="
          📍카테고리 성격에 맞는 글을 작성해주세요.
          📍내용은 5000자까지 작성할 수 있어요.
          📍다른사람과 함께 어울리는 공간이에요. 서로를 배려하는 마음으로 작성해주세요.
          📍신고를 많이 당하게 되면 커뮤니티 이용이 제한 될 수 있어요."
          className={styles.noticeText2}>
          </textarea>
           {/* { <textarea maxlength="5000" className={styles.noticeMax}></textarea>} */}
         <button type="button" className ={styles.noticeFlie}>
         <i class="fa-solid fa-camera"></i>
         <div>사진첨부</div>
         </button>

         <div className={styles.check}>
         <div className={styles.checkBox}>
         <input type="checkbox"></input>
         사진 숨김 처리하기 
         </div>
         </div>
          </div>
          <div className={styles.tmi}>
            <p>📍다른 사용자가 보기 불편할 수 있는 사진이라면 사진을 숨김 처리해 올려주세요.</p>
            <p>📍사진은 한 장만 올릴 수 있어요.</p>
          </div>
          {/* <input type="file" accept="image/*"></input> */}
         <div id="updateButton" className={styles.update}>
          <div className={styles.updateBox}>
           <div className={styles.usreUpdate}>
            <button className={styles.userUpdateMain}>등록</button>
            </div>
          </div>
          </div> 
    </div>
 </div>

</div>
</div>    
    
 </div>

 
    )
}

export default NoticeBoder;