import React from "react";

const Options = ({ options, question }) => {
  // background-color: red;
  //   return (
  //     <>
  //       <li className="question-list-item flex justify-between">
  //         <label htmlFor="rita">
  //           <div>Rita är bäst</div>
  //         </label>
  //         <input type="radio" name="option" value="Rita" id="rita" />
  //       </li>
  //       <li className="question-list-item">
  //         <div>Ferenc är bäst</div>
  //         <input type="radio" name="option" value="Ferenc" />
  //       </li>
  //       <li className="question-list-item">
  //         <div>Daniel är bäst</div>
  //         <input type="radio" name="option" value="Daniel" />
  //       </li>
  //       <li className="question-list-item">
  //         <div>Mansoor är bäst</div>
  //         <input type="radio" name="option" value="Mansoor" />
  //       </li>
  //     </>
  //   );

  return (
    <>
      {options.map((option, iterator) => {
        return (
          <li className="question-list-item" key={iterator}>
            <div className="">{option}</div>
            <input type="radio" name={question} value={option} />
          </li>
        );
      })}
    </>
  );
};

export default Options;
