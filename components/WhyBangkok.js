import React from 'react';

const WhyBangkok = () => {
    return(
      <div className="bg-whyBangkok-image bg-cover text-white p-4 md:p-20">
        <h2 className="text-2xl mb-5 text-center md:text-left">なぜバンコクなのか？</h2>
        <p className="text-sm">ここまで見ると、iSaraは日本でも実施可能に見えます。<br />しかし、バンコクを選んだのには理由があります。</p>
        <div className="mt-5 font-semibold">
          <p className="mb-3">・プログラミングフリーランスの最先端</p>
          <p className="mb-3">・水準は日本と同じなのに、生活費が安い（毎月8万円ほど）</p>
          <p className="mb-3">・昼、夜共に遊びが充実（稼ぐモチベーションアップと息抜きにGOOD）</p>
          <p className="mb-3">・日本人が住みやすい（食事が美味しい/気候が良い/親日である）</p>
        </div>
        <p className="font-semibold text-xl">環境が大切。更にこの価格が実現できるのがバンコクなのです。</p>
      </div>
    )
}

export default WhyBangkok;