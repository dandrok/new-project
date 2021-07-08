import { useEffect, useState } from 'react'

import PaginationComponent from './PaginationComponent'

import Card from './Card'
import styles from './Main.module.css'

const Main = () => {
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`

  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch(url)
      const fetchedEmployees = await response.json()

      setItems(fetchedEmployees.results)
      console.log('fetchedEmployess', fetchedEmployees.results)
    }
    fetchEmployees()
  }, [])

  async function fetchEmployees() {
    const response = await fetch(url)
    const fetchedEmployees = await response.json()

    setItems(fetchedEmployees.results)
    console.log('fetchedEmployess', fetchedEmployees.results)
  }

  const pages = 34

  // const refreshPage = () => {
  //   window.location.reload()
  // }
  // const updatePage = () => {
  //   setCurrentPage(currentPage + 1)
  // }

  const handlerNext = () => {
    setCurrentPage(currentPage + 1, fetchEmployees())
    console.log(currentPage)
  }
  const handlerBack = () => {
    setCurrentPage(currentPage - 1, fetchEmployees())
    console.log(currentPage)
  }

  return (
    <div>
      <PaginationComponent />
      <input
        type='text'
        onChange={(event) => setCurrentPage(event.target.value)}
        placeholder='2'
      />
      <button onClick={fetchEmployees}>Go</button>
      <button onClick={handlerBack}>Back</button>
      <button onClick={handlerNext}>Next</button>

      <section className={styles.main}>
        {items.map((i) => {
          return <Card key={i.id} {...i} />
        })}
      </section>
    </div>
  )
}

export default Main
