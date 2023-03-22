import React from "react";
import { Player} from "@lottiefiles/react-lottie-player";

type Props = {src:string};

function LottieAnimation({src}: Props) {
  return (
    <Player
      src= {src}
      background="transparent"
      autoplay
      loop
      speed={1}
      style={{ height: "100%", width: "100%" }}
    >
    </Player>
  );
}

export default LottieAnimation;
