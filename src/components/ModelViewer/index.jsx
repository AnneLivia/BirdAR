import '@google/model-viewer';

import './index.css';

import { Button, ProgressBar } from 'react-bootstrap';
import { TbBrandUnity } from 'react-icons/tb';

import { useRef } from 'react';

import useProgressBar from '../../hooks/useProgressBar';

const ModelViewer = ({ model3D, modelPoster }) => {
  const modelViewerRef = useRef();
  const progressBarRef = useRef();

  const progressValue = useProgressBar(modelViewerRef, progressBarRef);

  return (
    <div id='model-viewer-container'>
      <model-viewer
        src={model3D}
        poster={modelPoster}
        ar
        ar-modes='webxr scene-viewer quick-look'
        camera-controls
        shadow-intensity='1'
        ar-placement='floor'
        autoplay
        ref={modelViewerRef}
        loading='eager'
      >
        <Button
          slot='ar-button'
          className='arButtom justify-content-center'
          variant='warning'
        >
          <TbBrandUnity className='mb-1 me-1' size={20} /> View in your space
        </Button>
        <ProgressBar
          slot='progress-bar'
          className='hide'
          variant='warning'
          now={progressValue}
          ref={progressBarRef}
          visuallyHidden
          striped
        />
      </model-viewer>
    </div>
  );
};

export default ModelViewer;
