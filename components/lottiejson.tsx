'use client';

import { FC } from "react";
import Player from "lottie-react";
import animationData from "../public/animations/mascot_sing.json"; // Update the path
import animationData2 from "../public/animations/mascot_laptop use.json"; // Update the path
import animationData3 from "../public/animations/Mascot_Creating_AI.json"; // Update the path
import animationData4 from "../public/animations/Mascot_QnA_Search.json"; // Update the path
import animationData5 from "../public/animations/Mascot_Multimedia.json"; // Update the path
import animationData6 from "../public/animations/Mascot Home Default.json"; // Update the path
import animationData7 from "../public/animations/Mascot Login.json"; // Update the path
import dynamic from 'next/dynamic';



type LottieAnimationProps1 = {
  height?: number;
  width?: number;
  loop?: boolean;
  autoplay?: boolean;
};

export const LottieAnimation1: FC<LottieAnimationProps1> = ({
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

export const LottieAnimation2: FC<LottieAnimationProps1> = ({
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

export const LottieAnimation3: FC<LottieAnimationProps1> = ({
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

  export const LottieAnimation4: FC<LottieAnimationProps1> = ({
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

  export const LottieAnimation5: FC<LottieAnimationProps1> = ({
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

  export const LottieAnimation6: FC<LottieAnimationProps1> = ({
    height = 200,
    width = 200,
    loop = true,
    autoplay = true,
  }) => {
    return (
      <Player
        autoplay={autoplay}
        loop={loop}
        animationData={animationData6}
        style={{ height, width }}
      />
    );
  };
  
  export const LottiePlayer6 = dynamic(() => Promise.resolve(LottieAnimation6), {
    ssr: false,
    loading: () => <div>Loading Animation 2...</div>
  });

  export const LottieAnimation7: FC<LottieAnimationProps1> = ({
    height = 400,
    width = 400,
    loop = true,
    autoplay = true,
  }) => {
    return (
      <Player
        autoplay={autoplay}
        loop={loop}
        animationData={animationData7}
        style={{ height, width }}
      />
    );
  };
  
  export const LottiePlayer7 = dynamic(() => Promise.resolve(LottieAnimation7), {
    ssr: false,
    loading: () => <div>Loading Animation 2...</div>
  });