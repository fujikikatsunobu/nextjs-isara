import React from 'react';
import Image from 'next/image';

const Flow = () => {
    return(
      <div className="text-center md:px-10 md:my-10">
        <div className="text-white bg-StepColor md:text-xl py-10 px-2">
          講座費用258,000円以上の金額が稼げるまで「永久サポート延長」します。<br />
          つまりリスク0で参加できます。
        </div>
        <h2 className="text-3xl font-semibold leading-10 my-8 md:my-0">受講の流れ</h2>
        <div className="hidden md:block mx-10">
          <Image
            src="/flow.jpg"
            alt="flow-img"
            width={1000}
            height={182}
          />
        </div>
        <div className="mb-10">
          <div className="bg-FlowColor md:flex rounded-lg py-3 md:px-9">
            <div className="p-5 md:w-52 grid grid-cols-3 gap-4 items-center md:grid-cols-none">
              <Image
                src="/skypeconsulting.png"
                alt="skypeconsulting-img"
                width={106}
                height={95}
                className="col-span-1"
              />
              <p className="inline text-lg font-semibold col-span-2">Skypeで<br className="hidden md:block"/>事前コンサル</p>
            </div>
            <div className="hidden md:block flex-1 text-left p-5">
              <p className="font-semibold">
                事前のスキルの状況、パソコンの環境説明、渡航での注意点を話します。
              </p>
              <p className="my-4 font-semibold">簡単なテストあり</p>
              <p>
                iSaraでは受講料を稼げることを保証しています。従って、事前コンサル時点で簡単なテストを実施し、場合によってはお断りをしております。（テストの内容はPCの基本知識に関するテストですので、普段からパソコンを利用する方でしたら問題有りません。テストはもちろん無料ですので、まずはお問い合わせください。）
              </p>
            </div>
          </div>
          <div className="hidden md:block mx-20">
            <Image
              src="/flowline1.png"
              alt="flowline1-img"
              width={762}
              height={64}
              layout={"responsive"}
            />
          </div>
          <div className="bg-FlowColor md:flex rounded-lg py-3 md:px-9 my-2 md:my-0">
            <div className="p-5 md:w-52 grid grid-cols-3 gap-4 items-center md:grid-cols-none">
              <Image
                src="/preworks.png"
                alt="preworks-img"
                width={106}
                height={95}
                className="col-span-1"
              />
              <p className="inline text-lg font-semibold col-span-2">事前課題の提出</p>
            </div>
            <div className="hidden md:block flex-1 text-left p-5">
              <p className="font-semibold">
                出発前の1ヶ月前に事前課題を送ります。
              </p>
              <p className="my-4">0から始めるプログラミング事前学習講座、環境構築の事前学習、jQueryの事前学習講座、Bootstrapの事前学習講座、PHP/Mysqlの事前学習講座</p>
              <p className="font-semibold">
                課題は多いですが、ここで努力が必須です。プログラミングは高付加価値なスキルです。そのためには学習が必須です。回数無制限のチャットサポート付きですので、最初は努力してください。<br />
                また、参加者グループコミュニティも作成するので、横のつながりでモチベーションを高めることもできます。
              </p>
            </div>
          </div>
          <div className="hidden md:block mx-20">
            <Image
              src="/flowline2.png"
              alt="flowline2-img"
              width={762}
              height={64}
              layout={"responsive"}
            />
          </div>
          <div className="bg-FlowColor md:flex rounded-lg py-3 md:px-9">
            <div className="p-5 md:w-52 grid grid-cols-3 gap-4 items-center md:grid-cols-none">
              <Image
                src="/flight.png"
                alt="flight-img"
                width={106}
                height={95}
                className="col-span-1"
              />
              <p className="inline text-lg font-semibold col-span-2">現地に渡航</p>
            </div>
            <div className="hidden md:block flex-1 text-left p-5">
              <p className="font-semibold">
                到着日には空港でお出迎えし、初日のオリエンテーションを行います。<br />
                滞在先は空港からすぐの出来たてのシェアハウス。美味しいタイ料理ではなどもご紹介します。
              </p>
              <p className="my-4 font-semibold">
                iSaraは『ノマド』フリーランス養成講座です。<br />
                楽しいノマド体験ができるよう、バンコクでの生活はこちらでサポートします。
              </p>
            </div>
          </div>
          <div className="hidden md:block mx-20">
            <Image
              src="/flowline1.png"
              alt="flowline1-img"
              width={762}
              height={64}
              layout={"responsive"}
            />
          </div>
          <div className="bg-FlowColor md:flex rounded-lg py-3 md:px-9 my-2 md:my-0">
            <div className="p-5 md:w-52 grid grid-cols-3 gap-4 items-center md:grid-cols-none">
              <Image
                src="/personwithlight.png"
                alt="personwithlight-img"
                width={106}
                height={95}
                className="col-span-1"
              />
              <p className="inline text-lg font-semibold col-span-2">実案件を<br className="hidden md:block"/>通して学ぶ</p>
            </div>
            <div className="hidden md:block flex-1 text-left p-5">
              <p className="font-semibold">
                現役フリーランスが抱える案件に加え、クラウドソーシングを使って実案件をこなします。
              </p>
              <p className="my-4 font-semibold">案件獲得のためのメールの書き方や見積もりの仕方など、<br />
                他のプログラミングスクールでは教えてくれない実務スキルを学ぶことが出来ます。
              </p>
              <p>
                ※現役フリーランスがサポートします。
              </p>
            </div>
          </div>
          <div className="hidden md:block mx-20">
            <Image
              src="/flowline2.png"
              alt="flowline2-img"
              width={762}
              height={64}
              layout={"responsive"}
            />
          </div>
          <div className="bg-FlowColor md:flex rounded-lg py-3 md:px-9">
            <div className="p-5 md:w-52 grid grid-cols-3 gap-4 items-center md:grid-cols-none">
              <Image
                src="/jobsupport.png"
                alt="jobsupport-img"
                width={106}
                height={95}
                className="col-span-1"
              />
              <p className="inline text-lg font-semibold col-span-2">帰国後の仕事獲得<br className="hidden md:block"/>サポート付き</p>
            </div>
            <div className="hidden md:block flex-1 text-left p-5">
              <p className="font-semibold">
                経験年数の少ないフリーランスが高単価で継続的に仕事を受注するコツ、それがチームを組むことです。
              </p>
              <p className="my-4 font-semibold">iSaraではフリーランスコミュニティを形成し、帰国後のエンジニアでも継続的に稼げる仕組みを提供します。</p>
              <p>
                もちろん、個人で十分に稼げるようになった場合はいつでも脱退できますし、制限などは何もありません。
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Flow;