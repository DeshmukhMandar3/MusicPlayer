import React, { useEffect, useRef, useState } from "react";
import Style from "../Styles/Player.module.css";
import { Flex } from "@chakra-ui/react";
import { RxTrackPrevious, RxTrackNext } from "react-icons/rx";
import { MdOutlineForward30, MdReplay30 } from "react-icons/md";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import { MusicContext } from "../Context/Context";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const { songInd, changeSong } = React.useContext(MusicContext);
  let songs = [
    "./Songs/Attention.mp3",
    "./Songs/Havana.mp3",
    "./Songs/Best day of my life.mp3",
    "./Songs/Hymn for the weekend.mp3",
    "./Songs/This is what we live for.mp3",
    "./Songs/Tightrope.mp3",
  ];

  const audioPlayer = useRef(null);
  const range = useRef(null);
  const animationRef = useRef(null);

  function togglePlayPause() {
    let prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  function whilePlaying() {
    range.current.value = audioPlayer.current.currentTime;
    setCurrentTime(range.current.value);
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  function rangeChange() {
    audioPlayer.current.currentTime = range.current.value;
    setCurrentTime(range.current.value);
  }

  function displayTime(time) {
    let min = Math.floor(time / 60);
    let minutes = min < 10 ? `0${min}` : min;
    let sec = Math.floor(time % 60);
    let seconds = sec < 10 ? `0${sec}` : sec;
    return `${minutes}:${seconds}`;
  }

  function backThirty() {
    range.current.value = +range.current.value - 30;
    rangeChange();
  }

  function forwardThirty() {
    range.current.value = +range.current.value + 30;
    rangeChange();
  }

  useEffect(() => {
    if (songInd) {
      setIsPlaying(true);
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  }, [songInd]);

  useEffect(() => {
    let time = Math.floor(audioPlayer.current.duration);
    setDuration(time);
    range.current.max = time;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);
  console.log(songInd);
  return (
    <div className={Style.wrapper}>
      <input
        ref={range}
        type="range"
        defaultValue="0"
        className={Style.range}
        onChange={rangeChange}
      />
      <Flex className={Style.time}>
        <div>{displayTime(currentTime)}</div>
        <div>{duration && !isNaN(duration) && displayTime(duration)}</div>
      </Flex>
      <Flex className={Style.buttons}>
        <button onClick={() => changeSong("PREV")}>
          <RxTrackPrevious />
        </button>
        <button onClick={backThirty}>
          <MdReplay30 />
        </button>
        <button onClick={togglePlayPause}>
          {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
        </button>
        <button onClick={forwardThirty}>
          <MdOutlineForward30 />
        </button>
        <button onClick={() => changeSong("NEXT")}>
          <RxTrackNext />
        </button>
      </Flex>
      <audio ref={audioPlayer} src={songs[songInd]} autoPlay></audio>
    </div>
  );
};

export default Player;
