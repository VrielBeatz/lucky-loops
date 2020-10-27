import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import WaveSurfer from 'wavesurfer.js';

const formWaveSurferOptions = (ref) => ({
   container: ref,
   waveColor: '#3a3b3c',
   progressColor: '#9f9f9f',
   cursorColor: '#9f9f9f',
   barWidth: 0,
   barRadius: 0,
   responsive: true,
   height: 56,
   hideScrollbar: true,
   // If true, normalize by the maximum peak instead of 1.0.
   // normalize: true,
   // Use the PeakCache to improve rendering speed of large waveforms.
   barGap: 0,
});

export default function Waveform({
   url,
   playing,
   setPlay,
   id,
   setCurrentPlaying,
   currentPlaying,
   number,
}) {
   const waveformRef = useRef(null);
   const wavesurfer = useRef(null);

   useEffect(() => {
      const options = formWaveSurferOptions(waveformRef.current);
      wavesurfer.current = WaveSurfer.create(options);

      wavesurfer.current.load(url);

      if (currentPlaying !== number) {
         wavesurfer.current.pause();
         setPlay(false);
      }
      wavesurfer.current.on('play', () => {
         setCurrentPlaying(number);
         setPlay(true);
      });
      wavesurfer.current.on('pause', () => {
         // wavesurfer.current.params.container.style.opacity = 0.2;
         // setPlay(false);
      });
      wavesurfer.current.on('seek', () => {
         wavesurfer.current.play();
         setPlay(true);
      });
      wavesurfer.current.on('finish', () => {
         wavesurfer.current.play();
         setPlay(true);
      });
      return () => wavesurfer.current.destroy();
   }, [url]);

   useEffect(() => {
      if (playing) {
         wavesurfer.current.play();
         setCurrentPlaying(number);
      } else if (!playing) {
         wavesurfer.current.pause();
      }
   }, [playing]);

   return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
         <div style={{ flex: 1 }}>
            <div id={'waveform' + id} ref={waveformRef} />
         </div>
      </div>
   );
}
