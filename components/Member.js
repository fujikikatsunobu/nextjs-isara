import React from 'react';
import Image from 'next/image';

const Member = () => {
    return(
      <div className="bg-menber-image text-white p-2 md:p-12 text-center bg-cover">
        <h2 className="text-2xl font-semibold mb-8">創業メンバー</h2>
        <p className="text-sm md:text-base mb-5">実際にフリーランスとして活躍しているエンジニアが立ち上げました。</p>
        <div className="flex flex-col md:flex-row justify-center md:max-w-6xl md:mx-auto">
          <div className="md:flex-1">
            <div className="relative">
              <Image
                src="/keisuke_someya.jpg"
                alt="keisuke_someya-img"
                width={198}
                height={198}
                className="rounded-full w-56 h-56"
              />
            </div>
            <div className="border-2 border-white p-2 md:p-10 md:mx-3.5">
              <p>フリーランス講師</p>
              <p className="my-2.5">染谷　圭佑</p>
              <p className="text-left">ISARA（THAILAND）CO.LTDの代表です。岳嬰起業のあとにリクルートへ就職、その後独立し、海外移住しました。今はフリーランスとしてリモートワークで日本円を稼ぎ、外国通貨に変えて使い、海外を旅しています。営業、ブログPVアップ（最高月間150万PV）、ビジネス構築が専門です。</p>
            </div>
          </div>
          <div className=" my-4 md:my-0 md:flex-1">
            <div>
              <Image
                src="/yuki.png"
                alt="yuki-img"
                width={198}
                height={198}
                className="rounded-full w-56 h-56"
              />
            </div>
            <div className="border-2 border-white p-2 md:p-10 md:mx-3.5">
              <p>フリーランス講師</p>
              <p className="my-2.5">成田　雄輝</p>
              <p className="text-left">バンコクのシェアハウスのオーナーをやりながら一年の大半をタイで過ごしています。大学時代から今に至るまでネットだけで生計を立てているので、自由歴だけは講師の中で最長です！母親が対人ということもありますので、タイには精通しておりますので、こちらでの生活のサポートはお任せください！</p>
            </div>
          </div>
          <div className="md:flex-1">
            <div>
              <Image
                src="/manabu.png"
                alt="manabu-img"
                width={198}
                height={198}
                className="rounded-full w-56 h-56"
              />
            </div>
            <div className="border-2 border-white p-2 md:p-10 md:mx-3.5">
              <p>フリーランスエンジニア</p>
              <p className="my-2.5">坂内　学</p>
              <p className="text-left">アドバイザーとして参画しました。新卒で海外就職して11ヶ月後に退職。今は日本にいたり海外にいたりゆるくフリーランスをしています。</p>
              <p className="text-left mt-3">お仕事はWebマーケティングとプログラミングが専門領域です。</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Member;