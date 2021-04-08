import React from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
      <div className="bg-footerColor text-center pt-10 pb-5 px-4">
        <p className="text-xs pb-2">バンコクのノマドエンジニア育成講座、iSara[イサラ]</p>
        <p className="text-xs pb-2">Copyright iSara All Right Reserved.</p>
        <div className=" mt-4">
          <Link href="#">
            <a className="bg-blue-500 hover:bg-blue-700 text-white mt-4 font-bold py-1 px-1 rounded-md">
              <FontAwesomeIcon icon={faTwitter} className="mr-2"/>
              ツイート
            </a>
          </Link>
          <Link href="#">
            <a className="bg-blue-500 hover:bg-blue-700 text-white mx-4 mt-4 font-bold py-1 px-1 rounded-md">いいね!</a>
          </Link>
          <Link href="#">
            <a className="bg-blue-500 hover:bg-blue-700 text-white mt-4 font-bold py-1 px-1 rounded-md">シェア</a>
          </Link>
        </div>
        <p className="pt-8  text-xs">Designed by Maya Ogi / Developed by Kentaro Koga</p>
      </div>
    )
}

export default Footer;