import React from 'react';
import Image from 'next/image';
import styles from "./styles/Introduction.module.css";

const Explanation = () => {
    return(
      <div className="bg-ExplanationColor">
        <div className="w-11/12 mx-auto text-center py-20">
          <div className="relative">
            <div className={styles.LText}>
              <p className=" text-lg md:text-3xl font-semibold pt-6 pb-4">
                ノマドエンジニア育成講座<br />iSara[イサラ]とは
              </p>
            </div>
          </div>
          <p className="mt-9 mb-6 md:text-lg">「稼ぐこと」にフォーカスしたWebエンジニア育成講座です。</p>
          <div className="bg-white border-2 border-DocumentColor p-8">
            <p className="text-lg font-semibold mb-4">稼げるエンジニアに必要な5つのスキルとは？</p>
            <div className="flex flex-wrap justify-center text-xs md:text-sm font-light">
              <div className=" mr-1 md:p-2 md:flex-1">
                <div className="">
                  <Image
                    src="/skill.jpg"
                    alt="skill-img"
                    width={72}
                    height={72}
                  />
                </div>
                <p className="mt-2">基礎的な<br/>プログラミングスキル</p>
              </div>
              <div className=" ml-1 md:p-2 md:flex-1">
                <div>
                  <Image
                    src="/sales.jpg"
                    alt="sales-img"
                    width={72}
                    height={72}
                  />
                </div>
                <p className="mt-2">案件獲得に必要な<br/>営業力</p>
              </div>
              <div className="my-4 mr-1 md:p-2 md:flex-1">
                <div>
                  <Image
                    src="/document.jpg"
                    alt="document-img"
                    width={72}
                    height={72}
                  />
                </div>
                <p className="mt-2">見積作成から<br/>納品までの知識</p>
              </div>
              <div className="my-4 ml-1 md:p-2 md:flex-1">
                <div>
                  <Image
                    src="/plusone.jpg"
                    alt="plusone-img"
                    width={72}
                    height={72}
                  />
                </div>
                <p className="mt-2">自分の付加価値を<br/>高めるスキル</p>
              </div>
              <div className="md:p-2 md:flex-1">
                <div>
                  <Image
                    src="/connection (1).jpg"
                    alt="connection-img"
                    width={125}
                    height={50}
                  />
                </div>
                <p className="mt-2">フリーランス同士の<br/>横のつながり</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Explanation;