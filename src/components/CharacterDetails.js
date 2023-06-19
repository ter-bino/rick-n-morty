import { useEffect, useState } from "react"
import { Modal, Card } from "react-bootstrap"
import axios from "axios"

const CharacterDetails = ({characterId, setError}) => {

  const [showModal, setShowModal] = useState(false)
  const [character, setCharacter] = useState({})


  const transparent = {
    backgroundColor: 'transparent',
    opacity: '0 !important'
  }

  const modalHeader = {
    backgroundColor: '#444',
    color: '#DDDDDD'
  }

  const modalBody = {
    backgroundColor: '#8B8D',
    color: '#222',
    fontSize: '1.5em',
    padding: '10px 50px'
  }

  const textArea = {
    margin: '10px 0px',
    padding: '5px',
    borderRadius: '15px',
    border: '1px dashed #0F0',
    display: 'block',
    backgroundColor: '#441155',
    color: '#EEEEEE',
  }

  useEffect(()=>{
    if(characterId) {
      fetchCharacter(characterId);
    } else {
      setShowModal(()=>false);
    }
  }, [characterId])

  const fetchCharacter = async (id) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(()=>response.data);
        setShowModal(()=>true);
    } catch (error) {
        if(axios.isAxiosError(error))
            setError(`Unable to get details of character ${id}: ` + error.response.data.error);
        else
            setError(`Unable to get details of character ${id}: ` + error.message);
    }
  }

  return (
    <>
        <Modal style={transparent} show={showModal}>
        <Modal.Header style={modalHeader} closeButton onClick={()=>setShowModal(false)}>
            <Modal.Title>Character Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={modalBody}>
            Name
            <Card style={textArea}>
                : {character.name}
            </Card>
            Status
            <Card style={textArea}>
                : {character.status}
            </Card>
            Gender
            <Card style={textArea}>
                : {character.gender}
            </Card>
            Species
            <Card style={textArea}>
                : {character.species}
            </Card>
            Origin
            <Card style={textArea}>
                : {character.origin? character.origin.name: ''}
            </Card>
            Last Seen
            <Card style={textArea}>
                : {character.location? character.location.name: ''}
            </Card>
            Record Creation Date/Time
            <Card style={textArea}>
                : {character.created}
            </Card>
        </Modal.Body>
        </Modal>
    </>
  )
}

export default CharacterDetails
