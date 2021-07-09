import styles from './PaginationCOmponent.module.css'

const PaginationComponent = ({ handlerBack, handlerNext }) => {
  return (
    <div className={styles.main__btns}>
      <button onClick={handlerBack}>Back</button>
      <button onClick={handlerNext}>Next</button>
    </div>
  )
}

export default PaginationComponent
