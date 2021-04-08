import React from 'react';
import Image from 'next/image';
import styles from "./styles/Introduction.module.css";

const Merit = () => {
  return(
    <div className="bg-ExplanationColor text-center py-4">
      <div className="w-11/12 mx-auto text-center">
        <div className="relative">
          <div className={styles.LText}>
            <h2 className=" md:text-3xl font-semibold pt-2 pb-2">
              <span className="text-xs md:text-base">
                他のプログラミングスクールとここが違う！
              </span><br/><br className="md:hidden"/>
              iSara[イサラ]の3つのメリット
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-6 px-4">
        <div className="md:flex justify-center mb-6">
          <div className="flex-1">
            <Image
              src="/learnfromfreelancer.jpg"
              alt="learnfromfreelancer-img"
              width={300}
              height={180}
            />
            <div className="px-2">
              <p className=" text-mainColor my-2 font-light"><b>現役フリーランスから学べる</b></p>
              <p className="font-light text-left">他のプログラミングスクールとは違い、実際にフリーランスとして活動している園児阿賀直接講師を勤めます。</p>
            </div>
          </div>
          <div className=" my-4 md:my-0 md:mx-2 flex-1">
            <Image
              src="/learnfromprojects.jpg"
              alt="learnfromprojects-img"
              width={300}
              height={180}
            />
            <div className="px-2">
              <p className=" text-mainColor my-2 font-light"><b>実践を通じて学べる</b></p>
              <p className="font-light text-left">フリーランスに撮って最短の学習方法は「実践」。iSaraでは実案件を通して学びます。現役フリーランサーの案件サポートに加え、クラウドソーシングを活用。初心者の自分じゃ無理かもですが、現役フリーランスがサポートしますので大丈夫。</p>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/actuallyfree.jpg"
              alt="actuallyfree-img"
              width={300}
              height={180}
            />
            <div className="px-2">
              <p className=" text-mainColor my-2 font-light"><b>授業料が実質0円</b></p>
              <p className="font-light text-left">口座費用258,000円以上の金額が稼げるまで「永久サポート延長」があります。</p>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-DocumentColor p-2 md:p-12 font-semibold">
          <p className=" text-mainColor text-2xl">さらに！帰国後もサポート付き</p>
          <p className="text-base my-2.5">リモートワーカーのチームを作ることで<br className="md:hidden"/>受注率、受注単価が大幅に向上します。</p>
          <p className=" text-xs md:text-sm">iSaraは講座が終わって終了では有りません。<br/>参加メンバーのチャットグループを作り、帰国後も継続的に参加できるようになります。<br/>また、チームで働くことで継続的に稼ぎやすい仕組み作りも構築しております。</p>
        </div>
        <div className="mt-8 mb-4 text-xs">
            事前課題が出来ない人はお断りしております。iSaraでは、無料で学べるプログラミング基礎知識は教えません。事前課題一覧はメールで送りつつ、<br/>チャットサポートのみ。従って、本気で取り組まないと結果は出ません。
        </div>
      </div>
    </div>
  )
}

export default Merit