import React from 'react';
import Image from 'next/image';
import MediaQuery from "react-responsive";

const TopImage = () => {
  return (
    <div className="relative md:pt-20">
      <MediaQuery query="(max-width: 767px)">
        <Image
          src="/mainsp.jpg"
          alt="mainsp-img"
          width={640}
          height={715}
          layout={"responsive"}
        />
      </MediaQuery>
      <MediaQuery query="(min-width: 767px)">
        <Image
          src="/main.jpg"
          alt="main-img"
          width={1200}
          height={493}
          layout={"responsive"}
        />
      </MediaQuery>
      <div className="absolute inset-y-1/4 inset-x-1/5 md:inset-x-1/4 bg-white bg-opacity-0 flex flex-col justify-center items-center">
        <p className="mt-6 md:mt-30">プログラミングで</p>
        <p>人生の安定を手に入れよう</p>
        <div className="my-3 md:my-0">
          <Image
            src="/isaralogolarge.png"
            alt="isaralogolarge-img"
            width={634}
            height={222}
          />
        </div>
        <p>バンコクのノマドエンジニア育成講座</p>
        <p>iSara[イサラ]</p>
      </div>
    </div>
    )
}

export default TopImage;