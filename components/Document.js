import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Document = () => {
    return(
      <div className="bg-DocumentColor text-center text-white py-9">
        <p className="md:text-xl">まずは20日間で、</p>
        <p className="md:text-xl">月10万円稼げるスキルを手に入れよう。</p>
        <p className=" text-red md:text-lg mt-2"><span className="bg-white">※受講料金は実質0円です。詳しくは請求資料をどうぞ。</span></p>
        <button className="bg-red-500 hover:bg-red-700 text-white mt-4 font-bold py-2 px-4 rounded-full">お問い合わせ＆資料請求はこちら</button>
        <p className="mt-4">第6期生：2019年11月25日〜2019年12月14日※締め切りました。</p>
        <p className="mt-4">第7期生：2020年2月17日〜2020年3月7日※締め切りました。</p>
        <p className="mt-4">第8期生：2021年2月〜3月ゴロを予定※資料請求受付中です</p>
        <div className="mt-4">
          <Link href="#">
            <a className="bg-blue-500 hover:bg-blue-700 text-white mt-4 font-bold py-1 px-1 rounded-md">
              <FontAwesomeIcon icon={faTwitter} className="mr-2"/>
              ツイート</a>
          </Link>
          <Link href="#">
            <a className="bg-blue-500 hover:bg-blue-700 text-white mx-4 mt-4 font-bold py-1 px-1 rounded-md">いいね!</a>
          </Link>
          <Link href="#">
            <a className="bg-blue-500 hover:bg-blue-700 text-white mt-4 font-bold py-1 px-1 rounded-md">シェア</a>
          </Link>
        </div>
      </div>
    )
}

export default Document;