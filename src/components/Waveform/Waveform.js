import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import WaveSurfer from 'wavesurfer.js';

const formWaveSurferOptions = (ref) => ({
   container: ref,
   waveColor: '#3a3b3c',
   progressColor: '#9f9f9f',
   cursorColor: 'transparent',
   barWidth: 0,
   barRadius: 1,
   responsive: true,
   height: 56,
   hideScrollbar: true,
   // If true, normalize by the maximum peak instead of 1.0.
   normalize: true,
   // Use the PeakCache to improve rendering speed of large waveforms.
   barGap: 0,
});

export default function Waveform({ url }) {
   const waveformRef = useRef(null);
   const wavesurfer = useRef(null);
   const [playing, setPlay] = useState(false);
   const [volume, setVolume] = useState(0.5);

   // create new WaveSurfer instance
   // On component mount and when url changes
   useEffect(() => {
      const options = formWaveSurferOptions(waveformRef.current);
      wavesurfer.current = WaveSurfer.create(options);

      wavesurfer.current.load(url);

      // wavesurfer.current.on('ready', function () {
      //    // https://wavesurfer-js.org/docs/methods.html
      //    // wavesurfer.current.play();
      //    // setPlay(true);

      //    // make sure object stillavailable when file loaded
      //    if (wavesurfer.current) {
      //       wavesurfer.current.setVolume(volume);
      //       setVolume(volume);
      //    }
      // });

      // Removes events, elements and disconnects Web Audio nodes.
      // when component unmount
      return () => wavesurfer.current.destroy();
   }, [url]);

   const handlePlayPause = () => {
      setPlay(!playing);
      wavesurfer.current.playPause();
   };

   const onVolumeChange = (e) => {
      const { target } = e;
      const newVolume = +target.value;

      if (newVolume) {
         setVolume(newVolume);
         wavesurfer.current.setVolume(newVolume || 1);
      }
   };

   return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
         {/* <div className='controls' style={{ marginRight: 20 }}>
            <div className='play-button' onClick={handlePlayPause}>
               {!playing ? 'Play' : 'Pause'}
            </div>
            
         </div> */}
         <div style={{ flex: 1 }}>
            <div id='waveform' ref={waveformRef} />
         </div>
      </div>
   );
}
