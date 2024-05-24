import Category from "../../components/common/Category";
import styles from "../../css/hospital/HospitalAdmin.module.css"


function HospitalAdmin() {
    
    return (
        <>
            <div className="container">
                <Category></Category>
                <section>
                    <div className={styles.topNav}>
                        <div role="button" className={styles.smallNav}>
                            <a href="/"><p>홈</p></a>
                        </div>
                        <div className={styles.smallNav}>
                            {">"}
                        </div>
                        <div role="button" className={styles.smallNav}>
                            <a href="/hospitals"><p>병원 찾기</p></a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default HospitalAdmin;