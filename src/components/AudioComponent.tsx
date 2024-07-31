import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

interface AudioPlayerProps {
  url: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ url }) => {
  const playerRef = useRef<ReactPlayer | null>(null);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
    }
  }, [url]);

  return (
    <ReactPlayer
      ref={playerRef}
      url={url}
      playing
      controls={false}
      config={{
        youtube: {
          playerVars: { autoplay: 1, loop: 1, modestbranding: 1 },
        },
      }}
    />
  );
};

export default AudioPlayer;
