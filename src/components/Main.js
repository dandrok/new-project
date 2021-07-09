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
  }
  const handlerBack = () => {
    if (currentPage >= 1) {
      setCurrentPage(currentPage - 1, fetchCharacter())
    }
  }

  console.log(currentPage)
  return (
    <div>
      <PaginationComponent
        handlerNext={handlerNext}
        handlerBack={handlerBack}
      />

      <section className={styles.main}>
        {items.map((i) => {
          return <Card key={i.id} {...i} />
        })}
      </section>
    </div>
  )
}

export default Main
