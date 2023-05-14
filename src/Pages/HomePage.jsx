import React from "react";
import Style from "../Styles/HomePage.module.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import { RiDiscordFill } from "react-icons/ri";
import { MusicContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { setSongInd } = React.useContext(MusicContext);
  const navigate = useNavigate();

  function handleClick(num) {
    setSongInd(num);
    navigate("/music");
  }
  let colours = ["red", "yellow", "green", "blue", "pink", "grey"];
  let poster = [
    {
      image: "./Posters/Attention.png",
      title: "Attention",
      by: "Charlie Puth",
    },
    { image: "/Posters/Havana.png", title: "Havana", by: "Camila Cabello" },
    {
      image: "./Posters/Best day of my life.jpeg",
      title: "Best day of my life",
      by: "American Authors",
    },
    {
      image: "./Posters/Hymn for the weekend.jpg",
      title: "Hymn for the weekend",
      by: "Coldplay",
    },
    {
      image: "./Posters/This is what we live for.jpeg",
      title: "This is what we live for",
      by: "American Authors",
    },
    {
      image: "./Posters/Tightrope.jpeg",
      title: "Tightrope",
      by: "Michelle Williams",
    },
  ];

  return (
    <div className={Style.homepage}>
      <Flex>
        <Text>
          Hey <span className={Style.Anirudh}>Anirudh</span> 👋
        </Text>
        <img
          src="https://64.media.tumblr.com/b552cb7e6d367311d3bc585aed7139be/e98d7122a8f0fac1-12/s1280x1920/c18387549857f8a51a9c0e067207bd2b2b8319c6.jpg"
          alt="user"
        />
      </Flex>
      <Text className={Style.tagline}>
        It’s a nice day to learn something new
      </Text>
      <Flex className={Style.joinus}>
        <Text>Join and help us in building Airvoice!</Text>
        <button>
          <span style={{ fontSize: "12px" }}>
            <RiDiscordFill />
          </span>
          Community
        </button>
      </Flex>
      <div className={Style.songsContainer}>
        <Text>Songs for you</Text>
        <Text>Based on your recent listening</Text>
        <Flex>
          {poster.map((el, ind) => {
            return (
              <div
                className={Style.card}
                onClick={() => {
                  handleClick(ind);
                }}
              >
                <Box
                  backgroundImage={`linear-gradient(to right,${
                    colours[Math.floor(Math.random() * (5 - 0) + 0)]
                  },${colours[Math.floor(Math.random() * (5 - 0) + 0)]})`}
                ></Box>
                <Text className={Style.title}>{el.title}</Text>
                <Text className={Style.singer}>{el.by}</Text>
              </div>
            );
          })}
        </Flex>
      </div>
    </div>
  );
};

export default HomePage;
