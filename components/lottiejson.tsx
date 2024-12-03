'use client';

import { FC } from "react";
import Player from "lottie-react";
import animationData from "../public/animations/mascot_sing.json"; // Update the path
import animationData2 from "../public/animations/mascot_laptop use.json"; // Update the path
import animationData3 from "../public/animations/Mascot_Creating_AI.json"; // Update the path
import animationData4 from "../public/animations/Mascot_QnA_Search.json"; // Update the path
import dynamic from 'next/dynamic';


export const LottieAnimation1: FC<LottieAnimationProps> = ({
  height = 300,
  width = 300,
  loop = true,
  autoplay = true,
}) => {
  return (
    <Player
      autoplay={autoplay}
      loop={loop}
      animationData={animationData}
      style={{ height, width }}
    />
  );
};

export const LottiePlayer = dynamic(() => Promise.resolve(LottieAnimation1), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export const LottieAnimation2: FC<LottieAnimationProps> = ({
  height = 200,
  width = 200,
  loop = true,
  autoplay = true,
}) => {
  return (
    <Player
      autoplay={autoplay}
      loop={loop}
      animationData={animationData2}
      style={{ height, width }}
    />
  );
};

export const LottiePlayer2 = dynamic(() => Promise.resolve(LottieAnimation2), {
  ssr: false,
  loading: () => <div>Loading Animation 2...</div>
});

export const LottieAnimation3: FC<LottieAnimationProps> = ({
    height = 200,
    width = 200,
    loop = true,
    autoplay = true,
  }) => {
    return (
      <Player
        autoplay={autoplay}
        loop={loop}
        animationData={animationData3}
        style={{ height, width }}
      />
    );
  };
  
  export const LottiePlayer3 = dynamic(() => Promise.resolve(LottieAnimation3), {
    ssr: false,
    loading: () => <div>Loading Animation 2...</div>
  });

  export const LottieAnimation4: FC<LottieAnimationProps> = ({
    height = 200,
    width = 200,
    loop = true,
    autoplay = true,
  }) => {
    return (
      <Player
        autoplay={autoplay}
        loop={loop}
        animationData={animationData4}
        style={{ height, width }}
      />
    );
  };
  
  export const LottiePlayer4 = dynamic(() => Promise.resolve(LottieAnimation4), {
    ssr: false,
    loading: () => <div>Loading Animation 2...</div>
  });

  export const LottieAnimation5: FC<LottieAnimationProps> = ({
    height = 200,
    width = 200,
    loop = true,
    autoplay = true,
  }) => {
    return (
      <Player
        autoplay={autoplay}
        loop={loop}
        animationData={animationData5}
        style={{ height, width }}
      />
    );
  };
  
  export const LottiePlayer5 = dynamic(() => Promise.resolve(LottieAnimation5), {
    ssr: false,
    loading: () => <div>Loading Animation 2...</div>
  });