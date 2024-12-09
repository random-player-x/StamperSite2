import React from "react";
import Image from "next/image";
import "./style.css";
import rapunzel from '../public/images/bluerapunzel.jpeg';
import Alladin from '../public/images/purplealladin.jpeg';
import Alice from '../public/images/redalice.jpeg';
import Peter from '../public/images/greenpeter.jpeg';
import Tigger from '../public/images/tiggerOrange.jpg';
import Mickey from '../public/images/avatar-06.jpeg';
import Oswald from '../public/images/oswald.png';
import Zorro from '../public/images/zorro3.png';

const SliderAnimation: React.FC = () => {
  const AvatarImages = [
   rapunzel, Alladin, Alice, Peter, Tigger, Mickey, Oswald, Zorro
  ];

  return (
    <div className="banner w-screen mb-[-300px]">
      <div className="slider" style={{ '--quantity': '8' } as React.CSSProperties}>
        {AvatarImages.map((image, i) => (
          <div 
            className="item pb-4" 
            key={i} 
            style={{ '--position': `${i + 1}` } as React.CSSProperties}
          >
            <Image className="rounded-full border-4 border-amber-900" src={image} alt={`avatar ${i + 1}`} width={200} height={200} />
          </div>
        ))}
      </div>
      <div className="content">
        <div className="model"></div>
      </div>
    </div>
  );
};

export default SliderAnimation;
