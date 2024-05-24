import React from "react";
import styles from "../../css/community/communitymadal.module.css"

function CommunityModal() { //카테고리 모달버튼 div
    return (
        <div className={styles.communityModalMain}>
            <div className={styles.communityModal}>
            <div className={styles.communityModalHeader}>
                <div className={styles.communityModalBox}>
                    <div className={styles.categoryBox}>카테고리선택</div>
                    <div className={styles.categoryList}></div>
                    <ul className={styles.cagoryListBox}>
                        <li className={styles.categoryListBoxBtn}>
                            <div className={styles.cagoryListTitle}> 
                                <p>전체</p>
                            </div>
                        </li>
                        <li className={styles.categoryListBoxBtn}>
                            <div className={styles.cagoryListTitle}>
                                <p>임신, 성고민</p>
                            </div>
                        </li>
                        <li className={styles.categoryListBoxBtn}>
                            <div className={styles.cagoryListTitle}>
                                <p>다이어트, 헬스</p>
                            </div>
                        </li>
                        <li className={styles.categoryListBoxBtn}>
                            <div className={styles.cagoryListTitle}>
                                <p>마음건강</p>
                            </div>
                        </li>
                        <li className={styles.categoryListBoxBtn}>
                            <div className={styles.cagoryListTitle}>
                                <p>탈모톡톡</p>
                            </div>
                        </li>
                        <li className={styles.categoryListBoxBtn}>
                            <div className={styles.cagoryListTitle}>
                                <p>피부고민</p>
                            </div>
                        </li>
                        <li className={styles.categoryListBoxBtn}>
                            <div className={styles.cagoryListTitle}>
                                <p>뼈와 관절</p>
                            </div>
                        </li>
                        <li className={styles.categoryListBoxBtn}>
                            <div className={styles.cagoryListTitle}>
                                <p>영양제</p>
                            </div>
                        </li>
                        <li className={styles.categoryListBoxBtn}>
                            <div className={styles.cagoryListTitle}>
                                <p>자유게시판</p>
                            </div>
                        </li>
                    </ul>

                    

                </div>
                </div>    

            </div>

        </div>

    )
}

export default CommunityModal ;