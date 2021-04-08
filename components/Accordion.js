import React from 'react';
import styles from "./styles/Introduction.module.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

function QuestionAndAnswer(){
    return(
      <div className="py-10 md:px-250">
        <p className="text-center my-5 text-3xl font-semibold">よくある質問</p>
        <Accordion allowZeroExpanded>
          <AccordionItem className="my-1">
            <div className=" relative cursor-pointer underline text-xl font-semibold p-5 border-liColor border">
              <AccordionItemHeading className={styles.QuestionToggle}>
                <AccordionItemButton className="">
                  プログラミングスキルは必要ですか？
                </AccordionItemButton>
              </AccordionItemHeading>
            </div>
            <AccordionItemPanel className="border-b border-liColor p-5">
              <p>いいえ、必要ありません。しかし、iSaraでは参加費以上の金額が稼げることを保証しております。従って、事前通話面談時点で簡単なテストを実施し、場合によってはお断りをしております。この点だけはご了承ください。</p>
            </AccordionItemPanel>
          </AccordionItem>
          <div className="my-1">
            <div className="relative cursor-pointer underline text-xl font-semibold p-5 border-liColor border">
              <div className={styles.QuestionToggle}>
                <p>
                  プログラミングスキルは必要ですか？
                </p>
              </div>
            </div>
            <div className="hidden border-b border-liColor p-5">
              <p>いいえ、必要ありません。しかし、iSaraでは参加費以上の金額が稼げることを保証しております。従って、事前通話面談時点で簡単なテストを実施し、場合によってはお断りをしております。この点だけはご了承ください。</p>
            </div>
          </div>
        </Accordion>
      </div>
    )
}

export default QuestionAndAnswer;