import React from 'react';
import Image from 'next/image';

const Answer = () => {
    return(
      <div className="py-10 text-center border-DocumentColor">
        <p className="font-semibold text-2xl md:text-3xl mb-2">実現可能です</p>
        <p className="font-semibold mb-4">その証拠に第三者の声を聞いてみました。</p>
        <p className=" text-xs md:text-base mb-4">※実際にフリーランスエンジニアを採用する企業様から、メッセージを頂きました。</p>
        <div className=" p-2 md:mx-20 md:px-20">
          <div className="col-span-4 grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <Image
                src="/take.jpg"
                alt="take-img"
                width={800}
                height={800}
              />
            </div>
            <div className="col-span-2 text-left">
              リモートワークという言葉がありますが、弊社では何も気にしません。エンジニアに求めるのは、快適なコミュニケーションと信頼と成果物のみ。
              <p className="underline mt-2">Kredo IT Aboad . Inc 代表取締役　横田　猛夫</p>
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-3 gap-4 my-10 md:my-0">
            <div className="col-span-1">
              <Image
                src="/minami_sato.jpg"
                alt="minami_sato-img"
                width={800}
                height={800}
              />
            </div>
            <div className="col-span-2 text-left">
              社内でのスキルのある人材を採用するのは難しい。外部パートナーとして継続的に依頼できるフリーランスには助かっています。
               <p className="underline mt-2">SAPEUR . Inc 代表取締役　佐藤　陽</p>
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <Image
                src="/asada.jpg"
                alt="asada-img"
                width={800}
                height={800}
              />
            </div>
            <div className="col-span-2 text-left">
              プログラマーが足りていないときに外部リソースとして、フリーランスに発注しています。今はどこの会社でもエンジニアが不足していますね。
               <p className="underline mt-2">株式会社BeautifulWorks 代表取締役　淺田　百合</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Answer;