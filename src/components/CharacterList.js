import { CardGroup, Alert } from "react-bootstrap"
import { useEffect, useState } from "react"
import CharacterDetails from "./CharacterDetails"
import Character from "./Character"
import Pager from "./Pager"
import pLimit from 'p-limit';
import axios from "axios"

const limit = pLimit(1);

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [pagerInfo, setPagerInfo] = useState({});
  const [modalChar, setModalChar] = useState();
  const [error, setError] = useState('');

  const fetchData = async(listPage) => {
    setError('');
    await limit(async () => {
      try {
          const response = await axios.get("https://rickandmortyapi.com/api/character/?page="+listPage);
          setCharacters(response.data.results);
          setPagerInfo(response.data.info);
      } catch(error) {
        console.log(error)
        if (axios.isAxiosError(error)) {
          setError(`Error fetching characters from page ${listPage}: ` + error.response.data.error);
        } else {
          setError(`Error fetching characters from page ${listPage}: ` + error.message);
        }
      }
    })
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
        <CharacterDetails characterId={modalChar} setError={setError}/>
        <div style={scrollableY}>
          <CardGroup className="d-flex flex-wrap justify-content-around">
          {characters.map((char, index) => {
              return <Character key={index} character={char} setModalChar={setModalChar}/>
          })}
          </CardGroup>
        </div>
        <div style={stickyBottom}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Pager  totalPages={pagerInfo.pages} onPageJump={fetchData} setError={setError}/>
        </div>
    </>
  )
}

export default CharacterList
