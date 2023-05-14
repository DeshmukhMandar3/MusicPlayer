import React, { useEffect, useRef, useState } from "react";
import Style from "../Styles/Player.module.css";
import { Flex } from "@chakra-ui/react";
import { RxTrackPrevious, RxTrackNext } from "react-icons/rx";
import { MdOutlineForward30, MdReplay30 } from "react-icons/md";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import { MusicContext } from "../Context/Context";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  //length of the song
  const [duration, setDuration] = useState(0);
  //current time of the song
  const [currentTime, setCurrentTime] = useState(0);
  //songInd and changefunction
  const { songInd, changeSong } = React.useContext(MusicContext);

  //References
  const audioPlayer = useRef(null);
  const range = useRef(null);
  const animationRef = useRef(null);

  let songs = [
    "./Songs/Attention.mp3",
    "./Songs/Havana.mp3",
    "./Songs/Best day of my life.mp3",
    "./Songs/Hymn for the weekend.mp3",
    "./Songs/This is what we live for.mp3",
    "./Songs/Tightrope.mp3",
  ];

  //toggle play and pause
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

  //change the input range and timer with audio.currentTime
  function whilePlaying() {
    range.current.value = audioPlayer.current.currentTime;
    setCurrentTime(range.current.value);
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  //change the audio.currentTime with input from user
  function rangeChange() {
    audioPlayer.current.currentTime = range.current.value;
    setCurrentTime(range.current.value);
  }

  //convert seconds into min:sec format
  function displayTime(time) {
    let min = Math.floor(time / 60);
    let minutes = min < 10 ? `0${min}` : min;
    let sec = Math.floor(time % 60);
    let seconds = sec < 10 ? `0${sec}` : sec;
    return `${minutes}:${seconds}`;
  }

  //move backward 30sec
  function backThirty() {
    range.current.value = +range.current.value - 30;
    rangeChange();
  }

  //move forward 30sec
  function forwardThirty() {
    range.current.value = +range.current.value + 30;
    rangeChange();
  }

  //autoplays the song once page loads
  useEffect(() => {
    if (songInd) {
      setIsPlaying(true);
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  }, [songInd]);

  //sets total time once song loads or changes
  useEffect(() => {
    let time = Math.floor(audioPlayer.current.duration);
    setDuration(time);
    range.current.max = time;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  return (
    <div className={Style.wrapper}>
      {/* input range slider */}
      <input
        ref={range}
        type="range"
        defaultValue="0"
        className={Style.range}
        onChange={rangeChange}
      />

      {/* Timer section */}
      <Flex className={Style.time}>
        <div>{displayTime(currentTime)}</div>
        <div>{duration && !isNaN(duration) && displayTime(duration)}</div>
      </Flex>

      {/* Play,Pause,Next,Prev and forward buttons */}
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
      {/* audio tag */}
      <audio ref={audioPlayer} src={songs[songInd]} autoPlay></audio>
    </div>
  );
};

export default Player;
