import React from 'react';
import styles from "./styles/Introduction.module.css";

const NotVolunteer = () => {
    return(
      <div className="bg-notVolunteer-image bg-cover text-white text-center py-10 px-2 md:p-10 font-semibold">
        <p className="my-5 text-xl md:text-3xl">iSaraは<br className="md:hidden"/>ボランティアではありません</p>
        <p className="mb-10">ここまでみると、実質0円で各種サポートもある、特典が多すぎて逆に怪しい。<br />そう思われるかもしれません。<br />しかし、iSaraが目指すことは異なります。</p>
        <div className="relative my-5">
          <div className={styles.WText}>
            <h2 className="text-xl md:text-3xl font-semibold pt-6 pb-4 px-2">月10万円稼げる<br className="md:hidden"/>エンジニアを排出し続ける。</h2>
          </div>
        </div>
        <p className="mb-10 md:text-xl">最大の価値がこれです。<br/>iSaraの卒業生が稼ぎ続けることで、小さな経済が動き始めます。<br/>ここに最大の勝ちがあり、この講座はその序章に過ぎません。</p>
      </div>
    )
}

export default NotVolunteer;