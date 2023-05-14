import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Style from "../Styles/Poster.module.css";
import { BsChevronDown, BsShare } from "react-icons/bs";
import { MusicContext } from "../Context/Context";

const Poster = () => {
  //index of the song
  let { songInd } = React.useContext(MusicContext);

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
    <div className={Style.poster}>
      <Flex>
        <BsChevronDown />
        <BsShare />
      </Flex>
      {/* Poster of the song */}
      <div>
        <img src={poster[songInd].image} alt={poster[songInd].title} />
      </div>
      {/* Title and Artist */}
      <Text>{poster[songInd].title}</Text>
      <p>{poster[songInd].by}</p>

      <button
        style={{ fontSize: "14px", fontWeight: "400", marginBottom: "8px" }}
      >
        View All Songs
      </button>
      <button
        style={{ fontSize: "14px", fontWeight: "400", marginBottom: "77px" }}
      >
        View Categories
      </button>
    </div>
  );
};

export default Poster;
