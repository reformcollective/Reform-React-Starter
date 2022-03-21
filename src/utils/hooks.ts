import { useContext } from "react";
import { ScreenContext } from "../components/Providers";

export const useMedia = (fw: any, d: any, t: any, m: any) => {
  const screen = useContext(ScreenContext);

  if (screen.fullWidth) {
    return fw;
  } else if (screen.desktop) {
    return d;
  } else if (screen.tablet) {
    return t;
  } else if (screen.mobile) {
    return m;
  }
};
