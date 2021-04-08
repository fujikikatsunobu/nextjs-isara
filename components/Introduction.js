import React from 'react';
import styles from "./styles/Introduction.module.css";

const Introduction = () => {
  return (
    <div className="text-center bg-hero-pattern py-10 h-587px bg-cover ">
      <div className="bg w-11/12 mx-auto">
        <div className="relative">
          <div className={styles.LText}>
            <h2 className="md:text-3xl font-semibold pt-6 pb-4">
              エンジニアとして<br className="md:hidden"/>本当の自由を手に入れるためには？
            </h2>
          </div>
        </div>
        <div className="py-9 text-sm md:text-base">
          <p className="mb-9">
            エンジニア需要の高まりに伴い、<br className="md:hidden"/>プログラミングスクールが増えています。<br/>
            しかしそこでの学習の先は、<br className="md:hidden"/>提携して決められた就職先に就職すること。
          </p>
          <p className="mb-9">
            これで本当にいいのですか？<br />
            日本人エンジニアはアメリカと比べて<br className="md:hidden" />給料が格段に低い。<br />
            <br className="md:hidden" />
            その理由がここにあり、<br className="md:hidden"/>エンジニアは自分の給料を<br className="md:hidden"/>コントロールすべきなのです。
          </p>
          <p className="mb-9">
            スキルを身に着けたエンジニアは、<br className="md:hidden"/>人生をコントロールすることでより自由に。<br />
            そこで必要なのが<span className="font-semibold bg-gradient-to-b from-white to-yellow-300">「稼ぐ力」</span>です。
          </p>
        </div>
      </div>
      <div className="relative -top-1 container">
        <p className="absolute left-1/3 md:left-1/2 text-2xl md:text-base text-white bg-DocumentColor rounded-full h-24 w-24 text-center inline-block leading-20 py-7 md:py-9 md:mr-">
          ABOUT
        </p>
      </div>
    </div>
    )
}

export default Introduction;