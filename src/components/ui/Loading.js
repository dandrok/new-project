import styles from './Loading.module.css'

const Loading = () => {
  return (
    <section className={styles.loadingBox}>
      <div className={styles.loadingBox__loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export default Loading
