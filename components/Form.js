import React from 'react';

const Form  = () => {
  return(
    <div className="bg-DocumentColor text-center py-10 px-4" id="form">
      <p className="my-5 text-3xl font-semibold">資料請求フォーム</p>
      <p className="font-semibold mb-5">まずは無料で資料請求からどうぞ</p>
      <div>
        <div className="w-full">
          <form
            action="https://api.staticforms.xyz/submit"
            method="post">
            <div>
              <input
                type="text"
                placeholder="性"
                name="Fname"
                required
                className="w-full h-14 mb-6 p-3 rounded-xl"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="名"
                name="Lname"
                required
                className="w-full h-14 mb-6 p-3 rounded-xl"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="メールアドレス"
                name="email"
                required
                className="w-full h-14 mb-6 p-3 rounded-xl"
              />
            </div>
            <div>
              <textarea
                placeholder="質問などはこちら(空欄でもOKです)"
                name="message"
                required
                className="w-full h-52 mb-6 p-3 rounded-xl"
              />
            </div>
            <button type="submit" className="w-full h-14 p-3 bg-submitColor text-white rounded-xl text-2xl">送信</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form;