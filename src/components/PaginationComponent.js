import styles from './PaginationCOmponent.module.css'

const PaginationComponent = ({ handlerBack, handlerNext, currentPage }) => {
  return (
    <div className={styles.main__btns}>
      <button onClick={handlerBack}>Back</button>
      <p>{currentPage}</p>
      <button onClick={handlerNext}>Next</button>
    </div>
  )
}

export default PaginationComponent
