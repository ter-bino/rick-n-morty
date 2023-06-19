import { useEffect, useState } from "react"
import { Modal, Card } from "react-bootstrap"
import axios from "axios"

const CharacterDetails = ({characterId, setError}) => {

  const [showModal, setShowModal] = useState(false)
  const [character, setCharacter] = useState({})

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
    <div>
        <Modal show={showModal}>
        <Modal.Header closeButton onClick={()=>setShowModal(false)}>
            <Modal.Title>Character Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Card>
            <Card.Body>
                Name
                <Card>
                    : {character.name}
                </Card>
                Status
                <Card>
                    : {character.status}
                </Card>
                Gender
                <Card>
                    : {character.gender}
                </Card>
                Species
                <Card>
                    : {character.species}
                </Card>
                Origin
                <Card>
                    : {character.origin? character.origin.name: ''}
                </Card>
                Last Seen
                <Card>
                    : {character.location? character.location.name: ''}
                </Card>
                Record Creation Date/Time
                <Card>
                    : {character.created}
                </Card>
            </Card.Body>
            </Card>
        </Modal.Body>
        </Modal>
    </div>
  )
}

export default CharacterDetails
