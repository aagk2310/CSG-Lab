import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Navigation } from "./Navigation.js";
import GridComponent from './GridComponent.js'
import publications from './resources/publications.json';

function Publications() {

  const rows = [];
  for (let i = 0; i < publications.length; i += 3) {
    rows.push(publications.slice(i, i + 3));
  }

  return (
    <div className="App">
      <Navigation />
      <div>
            {rows.map((item, index) => (
                <Container>
                <Row>
                    <GridComponent data={item} />
                </Row>
                </Container>
             ))}
      </div>
   </div>
  )
}

export default Publications;