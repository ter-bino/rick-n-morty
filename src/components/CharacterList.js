import { CardGroup } from "react-bootstrap"
import { useEffect, useState } from "react"
import Character from "./Character"
import axios from "axios"

const CharacterList = () => {
  //temporary, should come from api
  const [characters, setCharacters] = useState([]);


  const fetchData = async(page) => {
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character/?page="+page);
        setCharacters(response.data.results);
    } catch(error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching characters:', error.response.data);
        } else {
            console.error('Error fetching characters:', error.message);
        }
    }
  }

  useEffect(() => {
    fetchData();
  })

  return (
    <>
        <CardGroup className="d-flex flex-wrap justify-content-around">
        {characters.map((char, index) => {
            return <Character key={index} character={char}/>
        })}
        </CardGroup>
    </>
  )
}

export default CharacterList
