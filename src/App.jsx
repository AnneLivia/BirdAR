import birdPoster from './assets/images/bird_model.webp';
import birdModel from './assets/object/bird_orange.glb';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import './app.css';

import { TbBrandUnity } from 'react-icons/tb';

import { useCallback, useEffect, useRef, useState } from 'react';

const App = () => {
  const modelViewerRef = useRef();
  const progressBarRef = useRef();
  const [progress, setProgress] = useState(0);

  const onProgress = useCallback((event) => {
    const totalProgress = event.detail.totalProgress;
    setProgress(Math.floor(totalProgress * 100));

    const currentProgressBar = progressBarRef.current;
    currentProgressBar.classList.remove('hide');
    if (totalProgress === 1) {
      const currentModelViewer = modelViewerRef.current;
      currentProgressBar.classList.add('hide');
      currentModelViewer.removeEventListener('progress', onProgress);
    }
  }, []);

  useEffect(() => {
    const currentModelViewer = modelViewerRef.current;
    currentModelViewer.addEventListener('progress', onProgress);
  }, [onProgress]);

  return (
    <Container className='container'>
      <Row id='model-viewer-container'>
        <Col>
          <model-viewer
            src={birdModel}
            poster={birdPoster}
            ar
            ar-modes='webxr scene-viewer quick-look'
            camera-controls
            shadow-intensity='1'
            ar-placement='floor'
            autoplay
            ref={modelViewerRef}
          >
            <Button
              slot='ar-button'
              className='arButtom justify-content-center'
              variant='warning'
            >
              <TbBrandUnity className='mb-1 me-1' size={20} /> View in your
              space
            </Button>
            <ProgressBar
              className='hide'
              slot='progress-bar'
              variant='warning'
              now={progress}
              ref={progressBarRef}
              visuallyHidden
            />
          </model-viewer>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
