import styles from "../../../css/mypage/MypageArticle.module.css";


function MypageArtilce() {

    return (
        <>
            <div className={styles.articleBox}>
                <div>
                    <p className={styles.articleTitle}>제목</p>
                </div>
                <div>
                    <p className={styles.articleContent}>내용내용내용내용내용내용내용내용내용내용내용내용</p>
                </div>
                <div className={styles.articleDetail}>
                    <div>
                        <p className={styles.articleContent}>2024-05-16</p>
                    </div>
                    <div className={styles.articleLikeBox}>
                        <div className={styles.articleDetailBox}>
                            <i class="fa-regular fa-heart"></i>
                            <p className={styles.articleDetailContent}>0</p>
                        </div>
                        <div className={styles.articleDetailBox}>
                            <i class="fa-regular fa-comment"></i>
                            <p className={styles.articleDetailContent}>0</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.articleBox}>
                <div>
                    <p className={styles.articleTitle}>제목</p>
                </div>
                <div>
                    <p className={styles.articleContent}>내용내용내용내용내용내용내용내용내용내용내용내용</p>
                </div>
                <div className={styles.articleDetail}>
                    <div>
                        <p className={styles.articleContent}>2024-05-16</p>
                    </div>
                    <div className={styles.articleLikeBox}>
                        <div className={styles.articleDetailBox}>
                            <i class="fa-regular fa-heart"></i>
                            <p className={styles.articleDetailContent}>0</p>
                        </div>
                        <div className={styles.articleDetailBox}>
                            <i class="fa-regular fa-comment"></i>
                            <p className={styles.articleDetailContent}>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MypageArtilce;