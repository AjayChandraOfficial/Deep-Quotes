import { Fragment, useRef, useState } from "react";
import style from "./Audio.module.css";
import music from "./audio1.mp3";

const Audio = () => {
  const [playingAudio, setPlayingAudio] = useState(false);
  const audioRef = useRef();
  const togglePlayAudio = () => {
    setPlayingAudio(!playingAudio);

    if (!playingAudio) audioRef.current.play();
    else audioRef.current.pause();
  };
  const audioStyle = {
    animationPlayState: !playingAudio ? "paused" : "running",
  };

  return (
    <Fragment>
      <div className={style["audio-container"]} onClick={togglePlayAudio}>
        <span className={style["audio-stick"]} style={audioStyle}></span>
        <span className={style["audio-stick"]} style={audioStyle}></span>
        <span className={style["audio-stick"]} style={audioStyle}></span>
        <span className={style["audio-stick"]} style={audioStyle}></span>
        <span className={style["audio-stick"]} style={audioStyle}></span>
        <span className={style["audio-stick"]} style={audioStyle}></span>

        <audio
          src={music}
          ref={audioRef}
          loop
          controlsList="nodownload"
        ></audio>
      </div>
    </Fragment>
  );
};
export default Audio;
