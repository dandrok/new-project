import styles from './Card.module.css'

const Card = ({ name, image, status, species, location }) => {
  //   const checkIf = () => {
  //     if (status === 'Alive') {
  //       return <div className={styles.green}>{status}</div>
  //     } else if (status === 'Dead') {
  //       return <div className={styles.red}>{status}</div>
  //     } else {
  //       return <div className={styles.gray}>{status}</div>
  //     }
  //   }

  return (
    <section className={styles.card__main}>
      <article className={styles.card}>
        <div className={styles.card__left}>
          <img className={styles.card__img} src={image} alt={name} />
        </div>
        <div className={styles.card__right}>
          <div className={styles.card__bg}>
            <div>{name}</div>
            <div className={styles.card__status}>
              {status === 'Alive' ? (
                <div className={styles.card__status}>
                  <div className={styles.green} /> <div>{status}</div>
                </div>
              ) : status === 'Dead' ? (
                <div className={styles.card__status}>
                  <div className={styles.red} /> <div>{status}</div>
                </div>
              ) : (
                <div className={styles.card__status}>
                  <div className={styles.gray} /> <div>{status}</div>
                </div>
              )}
              - <span>{species}</span>
            </div>
            <div>last location: {location.name}</div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Card
