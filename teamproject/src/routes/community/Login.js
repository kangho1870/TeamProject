import React from "react";
import Category from "../../components/common/Category";
import styles from "../../css/community/Login.module.css";
  
  function Login() {
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
                <p>로그인</p>          
    </div>
 </div>
          <div className={styles.logoMain}>
            <div className={styles.logoBox}>
            <div className={styles.logo}>
                <i class="fa-solid fa-stethoscope">몽땅병원</i>
              </div>
      </div>
      </div>
      </div> 
          <form className={styles.loginBox}>
            <label for="name" className={styles.loginName}>
                <span className={styles.loginSpan}>이름</span>
                  <input id="name" type="text" placeholder="이름을 입력하세요" className=
                  {styles.loginInput}>
            </input>
        </label>
            <label for="name" className={styles.loginName}>
              <span className={styles.loginSpan}>이메일</span>
                <input id="eamil" type="text" placeholder="이메일을 입력하세요" className=
                {styles.loginInput}>
          </input>
         </label>
            <label for="name" className={styles.loginName}>
               <span className={styles.loginSpan}>닉네임</span>
                <input id="name" type="text" placeholder="닉네임을 입력하세요" className=
                {styles.loginInput}>
        </input>
    </label>
          <label for="phone" className={styles.loginName}>
           <span className={styles.loginSpan}>연락처 (전화번호)</span>
            <div className={styles.loginPhone}>
             <input className={styles.phone} type="tel" disabled value="010"></input>
             <input className={styles.phone1} type="tel"maxlength="4" name="phone1"></input>
             <input className={styles.phone1} type="tel"maxlength="4" name="phone1"></input>

      </div>       
    </label>
          <label for="name" className={styles.loginName}>
                    <span className={styles.loginSpan}>성별</span>
               <p>여기 디자인 다시하자</p>
              </label>
            

          <section className={styles.agreeMain}>
            <h4>약관동의</h4>
          <section className={styles.agreeBox}>
          <div className={styles.checkBox}>
         <input type="checkbox"></input>
         개인정보의 수집/이용 동의  
      </div>
          <div className={styles.agreeContent}>
            <p className={styles.agreeDetail}>
            몽땅병원은 서비스 제공을 위해서 아래와 같이 개인정보를 수집합니다. 
            서비스 제공에 필요한 최소한의 개인 정보 이므로
             동의를 해주셔야 서비스를 이용하실 수 있습니다.
            </p>
            <table className={styles.collection}>
              <tbody>
                <tr>
                  <th>수집항목</th>
                  <tr>이름,연락처</tr>
                </tr>
              </tbody>
            </table>
          </div>
          </section>
          <div id="updateButton" className={styles.update}>
          <div className={styles.updateBox}>
           <div className={styles.usreUpdate}>
            <button className={styles.userUpdateMain}>입력완료</button>
            </div>
          </div>
          </div>
          </section>
         
    </form>         
        </div>
          </div>

    )
  }


  export default Login;