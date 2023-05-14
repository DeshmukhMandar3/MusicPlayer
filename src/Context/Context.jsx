import React from "react";
export const MusicContext = React.createContext();

const Context = ({ children }) => {
  const [songInd, setSongInd] = React.useState(0);
  function changeSong(ope) {
    if (ope === "NEXT") {
      if (songInd === 5) {
        setSongInd(0);
      } else {
        setSongInd((prev) => prev + 1);
      }
    } else if (ope == "PREV") {
      if (songInd === 0) {
        setSongInd(5);
      } else {
        setSongInd((prev) => prev - 1);
      }
    } else {
      setSongInd(ope);
    }
  }
  return (
    <MusicContext.Provider value={{ songInd, changeSong, setSongInd }}>
      {children}
    </MusicContext.Provider>
  );
};
export default Context;
