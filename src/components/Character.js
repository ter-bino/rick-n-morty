import { Card } from "react-bootstrap"
import { useState } from "react"
import ContainerHeader from "./ContainerHeader";
import styled from "styled-components"

const Character = ({character, setModalChar}) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const redText = {
    color: "#F00"
  }

  const greenText = {
    color: "#0F0"
  }

  const yellowText = {
    color: "#FF0"
  }

  const darkBackground = {
    backgroundColor: '#555555',
    color: '#DDDDDD'
  }

  const darkerBackground = {
    backgroundColor: '#441155',
    color: '#EEEEEE',
  }

  const textArea = {
    margin: '10px 0px',
    padding: '5px',
    textAlign: 'center',
    borderRadius: '15px',
    border: '1px dashed #0F0',
    display: 'block'
  }

  const hoverStyling = {
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    cursor: 'pointer'
  }

  const imageStyling = {
    marginTop: '-1em'
  }
  
  return (
    <CharacterContainer
      style = {hoverStyling}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={()=>setModalChar(character.id)}
    >
        <Card>
        <ContainerHeader title={character.name.toUpperCase()}/>
        <Card.Img variant="top" src={character.image} style={imageStyling}/>
        <Card.Body style={darkBackground}>
            <Card.Text style={darkBackground}>
                <span style={{...darkerBackground, ...textArea}}>
                    <span style={{...darkerBackground, ...((()=>{
                        switch(character.status) {
                            case "Alive": return greenText;
                            case "Dead": return redText;
                            case "unknown": return yellowText;
                            default: return {};
                        }
                    })())}}>{character.status}</span>
                </span>
                <span style={{...darkerBackground, ...textArea}}>{character.species}</span>
                
                <span style={{...darkerBackground, ...textArea}}>Origin: {character.origin.name}</span>
                <span style={{...darkerBackground, ...textArea}}>Location: {character.location.name}</span>
            </Card.Text>
        </Card.Body>
        </Card>
    </CharacterContainer>
  )
}

const CharacterContainer = styled.div`
  max-width: 380px;
  min-width: 380px;
  height: fit-content;
  margin: 10px;
  margin-top: 2em;
  box-shadow: 5px 5px 15px 5px;
  border: 2px dashed black;

  @media (max-width: 500px) {
    max-width: 80vw;
    min-width: 80vw;
    box-shadow: 0px 2px 4px 2px;
  }
  `;

export default Character
