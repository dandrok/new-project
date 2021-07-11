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
      const fetchedCharacter = await response.json()

      setItems(fetchedCharacter.results)
      console.log('fetched_Character', fetchedCharacter.results)
    }
    fetchCharacter()
  }, [currentPage])

  return (
    <div>
      <PaginationComponent
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setItems={setItems}
        url={url}
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
