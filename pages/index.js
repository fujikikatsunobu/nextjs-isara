import React from 'react';
import Header from "../components/Header";
import TopImage from  "../components/TopImage";
import Document from  "../components/Document";
import Introduction from  "../components/Introduction";
import Explanation from  "../components/Explanation";
import Step from  "../components/Step";
import Teach from  "../components/Teach";
import Merit from  "../components/Merit";
import Member from  "../components/Member";
import Question from  "../components/Question";
import Answer from  "../components/Answer";
import StudyContent from  "../components/StudyContent";
import Flow from  "../components/Flow";
import WhyBangkok from  "../components/WhyBangkok";
import Benefits from  "../components/Benefits";
import NotVolunteer from  "../components/NotVolunteer";
import Message from  "../components/Message";
import Form from  "../components/Form";
import QuestionAndAnswer from  "../components/Accordion";
import Footer from  "../components/Footer";

export default function Home() {
  return (
      <main>
        <Header />
        <TopImage />
        <Document />
        <Introduction />
        <Explanation />
        <Step />
        <Teach />
        <Merit />
        <Member />
        <Question />
        <Answer />
        <StudyContent />
        <Flow />
        <WhyBangkok />
        <Benefits />
        <NotVolunteer />
        <Message />
        <Form />
        <QuestionAndAnswer />
        <Footer />
      </main>
  )
}
