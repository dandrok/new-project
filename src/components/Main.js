import { useEffect, useState } from 'react'

import PaginationComponent from './PaginationComponent'

import Card from './Card'
import styles from './Main.module.css'

const Main = () => {
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`

  useEffect(() => {
    async function fetchCharacter() {
      const response = await fetch(url)
      const fetchedEmployees = await response.json()

      setItems(fetchedEmployees.results)
      console.log('fetched_Character', fetchedEmployees.results)
    }
    fetchCharacter()
  }, [])

  async function fetchCharacter() {
    const response = await fetch(url)
    const fetchedEmployees = await response.json()

    setItems(fetchedEmployees.results)
    console.log('fetched_Character', fetchedEmployees.results)
  }

  const pages = 34

  const handlerNext = () => {
    if (currentPage >= 0 && currentPage < 34) {
      setCurrentPage(currentPage + 1, fetchCharacter())
    }
    console.log(currentPage)
  }
  const handlerBack = () => {
    if (currentPage >= 1) {
      setCurrentPage(currentPage - 1, fetchCharacter())
    }
    console.log(currentPage)
  }

  console.log(currentPage)
  return (
    <div>
      <PaginationComponent />
      {/* <div>
        <input
          type='number'
          onChange={(event) => setCurrentPage(event.target.value)}
          maxLength={2}
          min={1}
          max={34}
        />
        <button onClick={fetchCharacter}>Go</button>
      </div> */}
      <div className={styles.main__btns}>
        <button onClick={handlerBack}>Back</button>
        <button onClick={handlerNext}>Next</button>
      </div>

      <section className={styles.main}>
        {items.map((i) => {
          return <Card key={i.id} {...i} />
        })}
      </section>
    </div>
  )
}

export default Main
