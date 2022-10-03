import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questionDetail }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
        questionDetail.map((question) => (

          <QuestionItem Key={question.id} question={question} />

        ))
      /* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
