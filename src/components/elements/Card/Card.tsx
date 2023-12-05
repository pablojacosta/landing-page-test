import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={`${styles.card__side} ${styles.card__side___front}`}>
        <div className={`${styles.card__picture} ${styles.card__picture___1}`}>
          &nbsp;
        </div>
        <h4 className={styles.card__heading}>
          <span
            className={`${styles.card__heading__span} ${styles.card__heading__span___1}`}
          >
            The Sea Explorer
          </span>
        </h4>
        <div className={styles.card__details}>
          <ul>
            <li>3 day tours</li>
            <li>Up to 30 people</li>
            <li>2 tour guides</li>
            <li>Sleep in cozy hotels</li>
            <li>Difficulty: easy</li>
          </ul>
        </div>
      </div>

      <div
        className={`${styles.card__side} ${styles.card__side___back} ${styles.card__side___back___1}`}
      >
        <div className={styles.card__cta}>
          <div className={styles.card__price___box}>
            <p className={styles.card__price___only}>Only</p>
            <p className={styles.card__price___value}>$297</p>
          </div>
          <a href="#popup" className="btn btn--white">
            Book now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
