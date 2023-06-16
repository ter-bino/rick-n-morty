import Card from 'react-bootstrap/Card'
import ContainerHeader from './components/ContainerHeader';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <div style={rootContainerStyling}>
      <Card>
        <Card.Body>
          <ContainerHeader title="Rick 'n Morty Characters" />
          <CharacterList />
        </Card.Body>
      </Card>
    </div>
  );
}

const rootContainerStyling = {
  margin: '50px auto',
  maxWidth: '90%',
  boxShadow: '0px 5px 10px 1px black',
  borderRadius: '5px'
}

export default App;
