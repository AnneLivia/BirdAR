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
        ar-modes='scene-viewer quick-look'
        camera-controls
        shadow-intensity='1'
        ar-placement='floor'
        autoplay
        ref={modelViewerRef}
        loading='eager'
      ></model-viewer>
    </div>
  );
};

export default ModelViewer;
