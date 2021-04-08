import React from 'react';
import Image from 'next/image';
import MediaQuery from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="bg-white fixed z-10 container mx-auto md:py-4 md:px-4">
      <div className="flex justify-between">
        <div className="flex flex-col pl-2 pt-2">
          <p className="text-xs md:text-base">
            バンコクのノマドエンジニア育成講座
          </p>
          <Image
            src="/isaralogo.png"
            alt="isaralogo-img"
            width={100}
            height={30}
            layout={"fixed"}
          />
        </div>
        <MediaQuery query="(max-width: 767px)">
          <div className="bg-submitColor text-white text-xs flex flex-col justify-center items-center p-2">
            <FontAwesomeIcon icon={faFileAlt} size="2x"/>
            資料請求
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 767px)">
          <div className="bg-submitColor hover:bg-red-500 text-white font-bold py-4 px-4 rounded-full">
            お問い合わせ／資料請求はこちら
          </div>
        </MediaQuery>
      </div>
    </div>
  )
}

export default Header;