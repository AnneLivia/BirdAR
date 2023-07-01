import birdPoster from './assets/images/bird_model.webp';
import birdModel from './assets/object/bird_orange.glb';

import { Container, Row, Col } from 'react-bootstrap';

import ModelViewer from './components/ModelViewer';

const App = () => {
  return (
    <Container className='container'>
      <Row className='justify-content-center'>
        <Col md={6}>
          <ModelViewer model3D={birdModel} modelPoster={birdPoster} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
