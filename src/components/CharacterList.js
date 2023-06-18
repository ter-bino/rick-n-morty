import { CardGroup } from "react-bootstrap"
import { useEffect, useState } from "react"
import Pager from "./Pager"
import Character from "./Character"
import axios from "axios"

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [pagerInfo, setPagerInfo] = useState({});


  const fetchData = async(listPage) => {
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character/?page="+listPage);
        setCharacters(response.data.results);
        setPagerInfo(response.data.info);
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
  }, [])

  const scrollableY = {
    height: '85vh',
    paddingTop: '20px',
    overflowX: "hidden",
    overflowY: "scroll"
  }

  const stickyBottom = {
    position: 'absolute',
    bottom: '0',
    marginBottom: '-1em',
    width: '100%'
  }

  return (
    <>
        <div style={scrollableY}>
          <CardGroup className="d-flex flex-wrap justify-content-around">
          {characters.map((char, index) => {
              return <Character key={index} character={char}/>
          })}
          </CardGroup>
        </div>
        <div style={stickyBottom}>
          <Pager  totalPages={pagerInfo.pages} onPageJump={fetchData}/>
        </div>
    </>
  )
}

export default CharacterList
