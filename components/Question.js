import React from 'react';
import styles from "./styles/Introduction.module.css";

const Question = () => {
    return(
      <div className="bg-DocumentColor text-white py-9 relative">
        <div className="w-11/12 mx-auto">
          <div className="container text-center">
          <p className="text-base text-mainColor bg-white rounded-full h-20 w-20 text-center inline-block leading-20 py-7">
            Q&A
          </p>
          </div>
          <div className={styles.Triangle}>
            <div className="relative text-center">
                <div className={styles.WText}>
                  <h2 className=" text-base md:text-3xl font-semibold pt-6 pb-4">
                    ノマドエンジニアとして自由に稼ぐことは<br />「本当に」可能なのか？
                  </h2>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Question;