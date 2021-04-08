import React from 'react';

const Benefits = () => {
    return(
      <div className="bg-BenefitColor text-center py-10">
        <h2 className="mb-10 text-xl md:text-3xl font-semibold">iSara受講生への参加特典</h2>
        <p className="text-white">講座費用258,000円以上の金額が稼げるまでの「永久サポート延長」<span className="text-black">を追加します。<br className="md:hidden"/>つまり、</span>実質0円<span className="text-black">です。</span></p>
        <div className="relative">
          <p className="md:text-3xl font-semibold absolute -top-5 bg-BenefitColor left-1/4">iSaraは『実質0円』！<br className="md:hidden" />更なる特典もあります。</p>
          <div className="md:hidden mt-10 mx-2 px-5 py-10 border-white border-2">
            <div className="grid grid-cols-3">
              <div className=" bg-white col-span-1 rounded-full w-20 h-20 text-mainColor text-xl pt-6">
                特典1
              </div>
              <div className="text-white col-span-2 ml-2 mt-4 text-left text-sm">
                参加費以上の金額が稼げるまで「永久サポート」<br/>参加費用は実質0円です。
              </div>
            </div>
            <div className="grid grid-cols-3 my-10">
              <div className=" bg-white col-span-1 rounded-full w-20 h-20 text-mainColor text-xl pt-6">
                特典2
              </div>
              <div className="text-white col-span-2 ml-2 mt-4 text-left text-sm">
                フリーランスエンジニアになるための動画講義を無料プレゼント
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className=" bg-white col-span-1 rounded-full w-20 h-20 text-mainColor text-xl pt-6">
                特典3
              </div>
              <div className="text-white col-span-2 ml-2 mt-4 text-left text-sm">
                フリーランス講師による個別コンサル(渡航前の週1回)
              </div>
            </div>
          </div>
          <div className=" hidden m-10 p-10 border-white border-2 md:flex justify-center">
            <div className=" bg-white w-250 h-250 rounded-full flex justify-center items-center">
              <div className="px-2">
                <p className="text-mainColor text-2xl mb-3">特典1</p>
                <p className="text-sm">講座費用258,000円以上の金額が稼げるまで、「永久サポート延長」。リスク0で参加できます。</p>
              </div>
            </div>
            <div className="md:mx-6 bg-white w-250 h-250 rounded-full flex justify-center items-center">
              <div className="px-2">
                <p className="text-mainColor text-2xl mb-3">特典2</p>
                <p className="text-sm">iSaraフリーランスコミュニティ参加権利。案件の紹介や、新施設OPENの際の優先利用券が受けられます。</p>
              </div>
            </div>
            <div className="bg-white w-250 h-250 rounded-full flex justify-center items-center">
              <div className="px-2">
                <p className="text-mainColor text-2xl mb-3">特典3</p>
                <p className="text-sm">講座参加後のシェアハウス利用権利（ドンムアン空港至近のため、とても便利です）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Benefits;