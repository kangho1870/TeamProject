// import { Button } from "bootstrap";
import { useState } from "react";
import styles from "../../css/community/community.module.css";
// import { useState } from 'react';
import styled from "styled-components";
import CommunityModal from "./CommunityModal";
import Category from "../../components/common/Category.js";

function Community() {
    const [click, setClick] = useState(false);
    const closeModal = () => { setClick(false)};
    return (
        <>
            <div className="container">
            <Category></Category>
                <div className={styles.home}>
                    <div className={styles.main}>
                        <div className={styles.mainBanner}>
                            <div className={styles.mainHeader}>
                                <div role="button" className={styles.mainButton}>
                                    <a><p>홈</p></a>                                
                                </div>
                                <div className={styles.mark}>
                                    {">"}
                                </div>
                                <div role="button" className={styles.mainButton}>
                                    <a><p>전체</p></a>
                                </div>
                                <div className={styles.mark}>
                                    {">"}
                                </div>
                                <div role="button" className={styles.mainButton}>
                                    <a><p>커뮤니티</p></a>
                                </div>
                            </div>
                            <section className={styles.mainSection}>
                                <div className={styles.post}>
                                    <div className={styles.postTitle}>
                                        <h3>전체</h3>
                                        <button type="button" className={styles.categorybtn} onClick={() => {setClick(!click)}}>카테고리                                    
                                        </button>                              
                                    </div>
                                </div>
                                <div className={styles.postListTitle}>
                                    <div className={styles.postListBox}>
                                        <ul>
                                            <li>
                                                <span type="defult" className={styles.postSubjectData}>자유게시판</span> 
                                                <div className={styles.postContent}>
                                                    <p>제목 : 강아지</p>
                                                </div>
                                                <div className={styles.postContentDetail}>
                                                    <p>내용 : 강아지 귀여워</p>
                                                </div>
                                                <div>
                                                    <div className={styles.postUserBox}>
                                                        <div className={styles.userBox}>
                                                            <div className={styles.box}>
                                                                <div className={styles.shape}>
                                                                    아이콘
                                                                </div>
                                                                <div className={styles.userName}>
                                                                    <div>
                                                                        닉네임
                                                                    </div>
                                                                    <div>
                                                                        방금 전
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        <div className={styles.postOpinion}>
                                                        <div className={styles.icon}>
                                                        <i class="fa-regular fa-comments"></i>   
                                                        </div>
                                                        <div className={styles.icon}>
                                                        <i class="fa-solid fa-heart"></i>
                                                        </div>
                                                        <div className={styles.icon}>
                                                        <i class="fa-solid fa-ellipsis-vertical"></i>    
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div> 
                                                </div>
                                        </li>         
                                        </ul>                    
                                    </div>
                                </div>
                            </section>
                        </div> 
                    </div>
                </div>
            </div>
                <div id="modal" onClick={closeModal}>
                {
                    click && <CommunityModal></CommunityModal>
                }
               </div>
               
        </>
    )
}
export default Community;
                       