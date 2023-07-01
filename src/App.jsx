import birdPoster from './assets/images/bird_model.webp';
import birdModel from './assets/object/bird_orange.glb';

import { Container, Row, Col } from 'react-bootstrap';

import ModelViewer from './components/ModelViewerAR';

const App = () => {
  return (
    <Container className='container'>
      <Row className='justify-content-center'>
        <Col md={6}>
          <ModelViewer
            modelData={{
              glb: birdModel,
              poster: birdPoster,
              title: 'Yellow Bird - 3D model',
              link: 'https://github.com/AnneLivia/BirdAR',
            }}
            customButton={{
              title: 'View in your space',
              variant: 'warning',
            }}
            customProgressBar={{
              variant: 'warning',
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
