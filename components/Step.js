import React from 'react';

const Step = () => {
  return (
    <div>
      <div className="bg-step-image py-10 px-8 h-587px bg-cover text-center">
        <div className="text-white">
          <p className="mt-4 text-2xl">iSaraで「基本的なプログラミングスキル」は教えません</p>
          <p className="mt-4">基本的なプログラミングスキルは無料で学べる時代</p>
          <p className="mt-4">iSaraでは、基本知識学習は<span className="text-mainColor">事前課題</span>と<span className="text-mainColor">チャットサポート</span>のみ</p>
        </div>
        <div className="md:flex justify-center mt-4">
          <div className="pt-4 px-4 pb-3 bg-white md:w-1/3 rounded">
            <div className="bg-DocumentColor rounded text-white">STEP.1</div>
            <p className="mt-4 mb-2 font-semibold">【バンコク渡航前の1ヶ月】</p>
            <p className="font-semibold">事前課題で基礎知識を学ぶ</p>
          </div>
          <div className=" my-4 md:my-0 md:mx-2 pt-4 px-4 pb-3 bg-white md:w-1/3 rounded">
            <div className="bg-DocumentColor rounded text-white">STEP.2</div>
            <p className="mt-4 mb-2 font-semibold">【バンコク到着後】</p>
            <p className="font-semibold">実践的に稼ぐことに特化した学習</p>
          </div>
          <div className="pt-4 px-4 pb-3 bg-white md:w-1/3 rounded">
            <div className="bg-DocumentColor rounded text-white">STEP.3</div>
            <p className="mt-4 mb-2 font-semibold">【バンコク帰国後】</p>
            <p className="font-semibold">講座実施後の案件獲得サポート</p>
          </div>
        </div>
      </div>
      <div className="bg-StepColor text-white text-center py-4 px-8 text-xs md:text-base">
        <p>スキルアップしてもフリーランスエンジニアとして食べていくことは難しい。</p>
        <p>3ラン素には、<span className="text-mainColor">プログラミングスキル以外</span>が大切。</p>
      </div>
    </div>
    )
}

export default Step;