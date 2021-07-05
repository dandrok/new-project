import { useEffect, useState } from 'react'

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
    <div>
      {items.map((i) => {
        return (
          <div style={{ display: 'flex' }}>
            <p>{i.name}</p>
            <img src={i.image} alt={i.name}></img>
          </div>
        )
      })}
    </div>
  )
}

export default Main
