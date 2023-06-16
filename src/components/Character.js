import { Card } from "react-bootstrap"
import { useState } from "react"
import ContainerHeader from "./ContainerHeader";

const Character = ({character}) => {

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
    color: "#0FF"
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
    border: '1px dashed #0F0'
  }

  const characterStyling = {
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    maxWidth: '450px',
    minWidth: '300px',
    height: 'fit-content',
    margin: '10px',
    marginTop: '2em',
    boxShadow: '5px 5px 15px 5px',
    border: '2px dashed black'
  }
  
  return (
    <div
      style={characterStyling}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
        <Card>
        <ContainerHeader title={character.name.toUpperCase()}/>
        <Card.Img variant="top" src={character.image} />
        <Card.Body style={darkBackground}>
            <Card.Text style={darkBackground}>
                <div style={{...darkerBackground, ...textArea}}>
                    <span style={{...darkerBackground, ...((()=>{
                        switch(character.status) {
                            case "Alive": return greenText;
                            case "Dead": return redText;
                            case "Unknown": return yellowText;
                        }
                    })())}}>{character.status}</span>
                </div>
                <div style={{...darkerBackground, ...textArea}}>{character.species}</div>
                
                <div style={{...darkerBackground, ...textArea}}>Origin: {character.origin.name}</div>
                <div style={{...darkerBackground, ...textArea}}>Location: {character.location.name}</div>
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
  )
}

export default Character
