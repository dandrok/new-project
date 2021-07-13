import { useEffect, useState } from 'react'

import PaginationComponent from './PaginationComponent'
import Loading from './ui/Loading'
import Card from './Card'
import styles from './Main.module.css'

const Main = () => {
  const [items, setItems] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`

  useEffect(() => {
    fetchCharacter().catch((e) => {
      console.log(`There has been a problem with your fetch: ${e.message}`)
    })
  }, [currentPage])

  async function fetchCharacter() {
    const response = await fetch(url)
    // await response.json().then((finish) => {
    //   setIsLoading(false)
    //   setItems(finish)
    //   console.log(finish)
    // })
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`
      throw new Error(message)
    }

    const fetchedCharacter = await response.json()

    setItems(fetchedCharacter.results)
    console.log('fetched_Character', fetchedCharacter.results)
  }

  // if (isLoading) {
  //   return <Loading />
  // }

  return (
    <div>
      <PaginationComponent
        fetchCharacter={fetchCharacter}
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
