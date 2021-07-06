import { useEffect, useState } from 'react'

import Card from './Card'
import styles from './Main.module.css'

const Main = () => {
  const [items, setItems] = useState([])

  const url = 'https://rickandmortyapi.com/api/character/'

  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch(url)
      const fetchedEmployees = await response.json()

      setItems(fetchedEmployees.results)
      console.log('fetchedEmployess', fetchedEmployees.results)
    }
    fetchEmployees()
  }, [])

  //   useEffect(() => {
  //     fetch(url)
  //       .then((res) => res.json)
  //       .then((json) => setItems(json))
  //   }, [])

  return (
    <section className={styles.main}>
      {items.map((i) => {
        return <Card key={i.id} {...i} />
      })}
    </section>
  )
}

export default Main
