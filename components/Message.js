import React from 'react';
import Image from 'next/image';

const Message = () => {
    return(
      <div className="text-center py-10">
        <h2 className="mb-9 text-lg md:text-3xl font-semibold">創業者からのメッセージ</h2>
        <p className="md:text-xl mb-2">「一生もののスキル」を身に着け、<br className="hidden"/>ノマドライフを楽しもう！</p>
        <div className=" m-2 md:flex md:mx-20">
          <div className="md:mr-6">
            <Image
              src="/IMG_1139-768x576.jpg"
              alt="Pioneer-img"
              width={768}
              height={576}
              layout={"responsive"}
            />
          </div>
          <div className="text-left">
            <p className="mb-3">初めまして、「iSara（イサラ）」創業者の染谷圭佑と申します。</p>
            <p className="mb-4">iSaraの開講は、僕たち講師陣にとってとても大きま挑戦です。今回、参加者に圧倒的な価値提供をするために、超少人数制だからできる内容を用意しました。</p>
            <p>・「Webエンジニアとして稼ぐ」に特化した超実践的カリキュラム</p>
            <p>・フリーランスとして生計を立て、いつでも世界中を旅できるスキル、収入のある講師陣のみを厳選</p>
            <p>・講座参加者が25万8,000円の参加費以上を稼ぐまでの無制限サポート延長</p>
            <p className="mt-8 mb-4">
              ここまでのカリキュラムを備えた講座は、世界で唯一iSaraだけでしょう。iSaraでプログラミングや営業を学ぶことで、「一生モノのつぶしが効くスキル」が身につきます。もちろん勉強だけでなく、万国を楽しめるプログラムも用意しています！
            </p>
            <p>
              3ヶ月感徹底的にサポートします。ぜひバンコクでお愛しましょう。
            </p>
          </div>
        </div>
      </div>
    )
}

export default Message;