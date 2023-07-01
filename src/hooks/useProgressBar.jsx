import { useCallback, useEffect, useState } from 'react';

const useProgressBar = (componentRef, progressBarRef) => {
  const [progress, setProgress] = useState(0);

  const onProgress = useCallback(
    (event) => {
      const totalProgress = event.detail.totalProgress;
      setProgress(Math.floor(totalProgress * 100));

      const currentProgressBar = progressBarRef.current;
      currentProgressBar.classList.remove('hide');

      if (totalProgress === 1) {
        const currentModelViewer = componentRef.current;
        currentProgressBar.classList.add('hide');
        currentModelViewer.removeEventListener('progress', onProgress);
      }
    },
    [componentRef, progressBarRef]
  );

  useEffect(() => {
    const currentModelViewer = componentRef.current;
    currentModelViewer.addEventListener('progress', onProgress);
  }, [componentRef, onProgress]);

  return progress;
};

export default useProgressBar;
