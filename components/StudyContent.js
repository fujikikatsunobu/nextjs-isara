import React from 'react';

const StudyContent = () => {
    return(
      <div className="bg-studyContents-image bg-cover text-center py-10">
        <h2 className="text-white md:text-3xl mt-6 mb-4">iSara[イサラ]で学べる内容</h2>
        <p className="text-white mb-8">渡航前の事前課題と渡航中に学べることの一覧です。</p>
        <div className=" p-2 md:py-10 md:flex justify-center md:mx-20 md:px-20">
          <div className="flex-1 mb-4 md:mb-0 md:mr-5 border-studyContentsColor border-2 rounded-sm">
            <p className="text-white bg-StepColor p-4 text-xl">渡航前の事前学習</p>
            <ul className="bg-white">
              <li className="border-liColor border-b border-dotted py-2">0から始めるプログラミング事前学習講座</li>
              <li className="border-liColor border-b border-dotted py-2">参加者グループコミュニティ</li>
              <li className="border-liColor border-b border-dotted py-2">チャットサポート</li>
              <li className="border-liColor border-b border-dotted py-2">事前スカイプコンサル</li>
              <li className="border-liColor border-b border-dotted py-2">環境構築の事前学習</li>
              <li className="border-liColor border-b border-dotted py-2">jQueryの事前学習講座</li>
              <li className="border-liColor border-b border-dotted py-2">Bootstrapの事前講座</li>
              <li className="border-liColor border-b border-dotted py-2">PHP/Mysqlの事前学習講座</li>
              <li className="border-liColor border-b border-dotted py-2">稼ぐためのHTML/CSS講座</li>
              <li className="py-2">WordPressの事前学習講座</li>
            </ul>
          </div>
          <div className="flex-1 rounded-sm">
            <p className="text-white bg-StepColor p-4 text-xl">バンコク渡航中</p>
            <ul className="bg-white border-studyContentsColor border-2">
              <li className="border-liColor border-b border-dotted py-2">フリーランス独立術講座</li>
              <li className="border-liColor border-b border-dotted py-2">実際の実務案件をこなす</li>
              <li className="border-liColor border-b border-dotted py-2">ノマドフリーランス体験</li>
              <li className="border-liColor border-b border-dotted py-2">バンコク生活体験</li>
              <li className="border-liColor border-b border-dotted py-2">クラウドソーシング活用講座</li>
              <li className="py-2">フリーランスのための営業講座</li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default StudyContent;