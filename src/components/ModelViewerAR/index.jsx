import '@google/model-viewer';

import './index.css';

import { Button, ProgressBar } from 'react-bootstrap';
import { TbBrandUnity } from 'react-icons/tb';

import { useCallback, useState, useRef } from 'react';
import { useEffect } from 'react';

const ModelViewer = ({
  modelData,
  customButton,
  customProgressBar,
  arPlacement = 'floor',
}) => {
  const modelViewerRef = useRef();
  const progressBarRef = useRef();

  const [progressValue, setProgressValue] = useState(0);

  const onProgress = useCallback(
    (event) => {
      const totalProgress = Math.floor(event.detail.totalProgress * 100);

      setProgressValue(totalProgress);

      const currentProgressBar = progressBarRef.current;

      currentProgressBar.classList.remove('hide');

      if (totalProgress === 100) {
        currentProgressBar.classList.add('hide');
        modelViewerRef.current.removeEventListener('progress', onProgress);
      }
    },
    [modelViewerRef, progressBarRef]
  );

  useEffect(() => {
    if (customProgressBar)
      modelViewerRef.current.addEventListener('progress', onProgress);
  }, [customProgressBar, modelViewerRef, onProgress]);

  return (
    <div id='model-viewer-container'>
      <model-viewer
        src={modelData.glb}
        poster={modelData.poster}
        ref={modelViewerRef}
        ar
        ar-modes='scene-viewer quick-look webxr'
        camera-controls
        shadow-intensity='1'
        ar-placement={arPlacement}
        autoplay
        loading='eager'
      >
        {customButton && (
          <Button
            slot='ar-button'
            className='arButtom justify-content-center'
            variant={customButton.variant}
          >
            <TbBrandUnity className='mb-1 me-1' size={20} />{' '}
            {customButton.title}
          </Button>
        )}
        {customProgressBar && (
          <ProgressBar
            slot='progress-bar'
            className='hide'
            variant={customProgressBar.variant}
            now={progressValue}
            ref={progressBarRef}
            visuallyHidden
            striped
          />
        )}
      </model-viewer>
    </div>
  );
};

export default ModelViewer;
