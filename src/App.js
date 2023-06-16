import Card from 'react-bootstrap/Card'
import ContainerHeader from './components/ContainerHeader';
import CharacterList from './components/CharacterList';

function App() {

  const rootContainerStyling = {
    position: 'relative',
    margin: '50px auto',
    maxWidth: '90%',
    maxHeight: '90vh',
    boxShadow: '0px 5px 10px 1px black',
    borderRadius: '5px'
  }
  
  const rootCardStyling = {
    maxHeight: '90vh',
    backgroundColor: '#8B8',
  }
  
  const scrollableY = {
    height: '85vh',
    overflowX: "hidden",
    overflowY: "scroll"
  }

  return (
    <div style={rootContainerStyling}>
      <Card style={rootCardStyling}>
        <Card.Body>
          <ContainerHeader title="Rick 'n Morty Characters" />
          <div style={scrollableY}>
            <CharacterList />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
