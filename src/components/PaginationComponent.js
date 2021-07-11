import styles from './PaginationCOmponent.module.css'

const PaginationComponent = ({
  currentPage,
  setItems,
  url,
  setCurrentPage,
  fetchCharacter,
}) => {
  const handlerNext = () => {
    if (currentPage >= 0 && currentPage < 34) {
      setCurrentPage(currentPage + 1, fetchCharacter())
    }
  }
  const handlerBack = () => {
    if (currentPage >= 2) {
      setCurrentPage(currentPage - 1, fetchCharacter())
    }
  }

  return (
    <div className={styles.btns}>
      <button onClick={handlerBack}>Back</button>
      <p>{currentPage}</p>
      <button onClick={handlerNext}>Next</button>
    </div>
  )
}

export default PaginationComponent
