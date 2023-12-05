import styles from "./Card.module.scss";

interface ICard {
  title: string;
  details: {
    days: string;
    people: string;
    guides: string;
    sleep: string;
    difficulty: string;
  };
  price: string;
  buttonText: string;
}

const Card = ({ title, details, price, buttonText }: ICard) => {
  const { days, people, guides, sleep, difficulty } = details;

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
            {title}
          </span>
        </h4>
        <div className={styles.card__details}>
          <ul>
            <li>{days} days tour</li>
            <li>Up to {people} people</li>
            <li>{guides} tour guides</li>
            <li>Sleep in {sleep}</li>
            <li>Difficulty: {difficulty}</li>
          </ul>
        </div>
      </div>

      <div
        className={`${styles.card__side} ${styles.card__side___back} ${styles.card__side___back___1}`}
      >
        <div className={styles.card__cta}>
          <div className={styles.card__price___box}>
            <p className={styles.card__price___only}>Only</p>
            <p className={styles.card__price___value}>${price}</p>
          </div>
          <a href="#popup" className="btn btn--white">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
