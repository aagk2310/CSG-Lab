import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Navigation } from "./Navigation.js";
import ProGridComponent from './ProGridComponent.js'
import projects from './resources/Projects.json';


function Projects() {
  const rows = [];
  for (let i = 0; i < projects.length; i += 3) {
    rows.push(projects.slice(i, i + 3));
  }

  return (
    <div className="App">
      <Navigation />
      <div>
            {rows.map((item, index) => (
                <Container>
                <Row>
                    <ProGridComponent data={item} />
                </Row>
                </Container>
             ))}
      </div>
   </div>
  )
}

export default Projects;