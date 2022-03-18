import React, { useEffect, useState, createContext, Dispatch, SetStateAction } from "react";
import { desktop, tablet, mobile } from "styles/media";

export const ScreenContext = createContext({
  fullWidth: false,
  desktop: false,
  tablet: false,
  mobile: false,
});

const Providers: React.FC = ({ children }) => {
  const [screen, setScreen] = useState({
    fullWidth: false,
    desktop: false,
    tablet: false,
    mobile: false,
  });

  useEffect(() => {
    const calcScreen = () => {
      setScreen({
        fullWidth: window.innerWidth > desktop,
        desktop: window.innerWidth > tablet && window.innerWidth <= desktop,
        tablet: window.innerWidth > mobile && window.innerWidth <= tablet,
        mobile: window.innerWidth <= mobile,
      });
    };

    calcScreen();

    window.addEventListener("resize", calcScreen);

    return () => {
      window.removeEventListener("resize", calcScreen);
    };
  }, []);

  return (
    <ScreenContext.Provider value={screen}>
      {children}
    </ScreenContext.Provider>
  );
};

export default Providers;
