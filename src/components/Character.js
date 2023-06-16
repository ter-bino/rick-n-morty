import { Card } from "react-bootstrap"
import { useState } from "react"

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
    backgroundColor: '#222222',
    color: '#EEEEEE'
  }

  const paddedText = {
    padding: '5px'
  }

  const characterStyling = {
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    maxWidth: '450px',
    minWidth: '300px',
    margin: '10px',
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
        <Card.Img variant="top" src={character.image} />
        <Card.Body style={darkBackground}>
            <Card.Title style={darkBackground}>{character.name.toUpperCase()}</Card.Title>
            <Card.Text style={darkBackground}>
                <p style={{...darkerBackground, ...paddedText}}>
                    Status: <span style={{...darkerBackground, ...((()=>{
                        switch(character.status) {
                            case "Alive": return greenText;
                            case "Dead": return redText;
                            case "Unknown": return yellowText;
                        }
                    })())}}>{character.status}</span>
                </p>
                <p style={{...darkerBackground, ...paddedText}}>Species: {character.species}</p>
                
                <p style={{...darkerBackground, ...paddedText}}>Origin: {character.origin.name}</p>
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
  )
}

export default Character
