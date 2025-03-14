import React from "react";
import Options from "./Options";

const Question = ({ questionProp }) => {
  return (
    <section className="question">
      <h2>{questionProp.question}</h2>
      <ul className="question-list">
        <Options
          options={questionProp.options}
          question={questionProp.question}
        />
      </ul>
    </section>
  );
};
export default Question;
