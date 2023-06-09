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

  let tweets = [
    {
      name: "Shreyas Doshi",
      image:
        "https://s3-alpha-sig.figma.com/img/039f/f494/ffbf59d5c8715cd1918f7afb53669f7d?Expires=1684713600&Signature=nUTXmNpm9e7fV439DsamdB~yXNF1CtvXbP1NSZM~jDdDy~y3p8VQkCpF78ESwokMmoVBzUB7pnng5cjNR2TBSaNtt-EO3~JLH-y-gr7aEXTxjJolso9qW5ltZq4MP6OiSBy9PVbmRsndDd7AQvgPuBRs0H86~xEu5FV4q~bhv3v1Z~pabS4GuFKNSeXWgnrL3~2BDGRnKZr71qwbjQE6YpB~boikKVPOwykeeoO-0nZCw4YqOdmJPWOn9f3UmBkQkHpWtZx2aV49Wq0pKbBMIkQyXX2EuMTUVyvsNN0cBiZ-dklBa9mQRzIcAkkyCUMXQGa546zRZ31cW7g6QPJ4yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      subject: "Fundamentals of Product Design",
    },
  ];

  return (
    <div className={Style.homepage}>
      <Flex>
        <Text>
          Hey <span className={Style.Anirudh}>Anirudh</span> 👋
        </Text>
        <div className={Style.userimage}>
          <img
            src="https://s3-alpha-sig.figma.com/img/aa36/39a7/0f5ffa292521ddacef92c174b15c17b6?Expires=1684713600&Signature=iGhN5G-~IJd~M02ALqpMHxnuljZIQVxRTFf0QNgdmyXix9mDO~oIayaISEB8o2AaOOFDr5SYSOWY3WnY03RlMLTKLqqHJb3iOUA~kZCUG6xfbVlWLrtpRDGKMSbeqbMWySLQSd3PjC-APEwmwZdNwJV9tjCAyA0MmuKZpXdgHAgTYhyGijVS~mbPh0k~F5renNr4uO5TxrVX5EcLrRgk6W-Gj0AG3~y51aRwjd0bsSqKgW8YPcfZXPneNmcKKmFt7PErE3jYINo-yi1vtpV9h2dFJSDx9MsnQA2mYp4nxPxQ~CwpqL8CBYj-9UvSM5IZAyI5UjPmW3hjeA90IxP-tg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="user"
          />
        </div>
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
      <div className={Style.songsContainer}>
        <Text>Tweet Shorts</Text>
        <Text>Listen to audio versions of tweet threads</Text>
        <Flex>
          {tweets.map((el) => {
            return (
              <Flex className={Style.tweeter}>
                <div>
                  <img
                    style={{ width: "400px" }}
                    src={el.image}
                    alt={el.name}
                  />
                </div>
                <div>
                  <Text className={Style.tweetTitle}>{el.subject}</Text>
                  <Text className={Style.tweeterUser}>{el.name}</Text>
                </div>
              </Flex>
            );
          })}
        </Flex>
      </div>
    </div>
  );
};

export default HomePage;
