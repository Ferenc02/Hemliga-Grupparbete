import { useEffect, useState } from "react";
import "./App.css";
import Question from "./components/Question";

function App() {
  const [points, setPoints] = useState(0);

  const questionsList = [
    {
      question:
        "What was the original name of the planet that became Tatooine?",
      options: ["Lothal", "Tatooine Prime", "Arkanis", "Tund"],
      answer: "Arkanis",
    },
    {
      question: "What species is Jar Jar Binks?",
      options: ["Gungan", "Chagrian", "Togruta", "Rodian"],
      answer: "Gungan",
    },
    {
      question: "In the Expanded Universe, who was the first Sith Lord?",
      options: ["Darth Bane", "Darth Revan", "Darth Nihilus", "Darth Vitiate"],
      answer: "Darth Vitiate",
    },
    {
      question: "Which planet was the birthplace of Darth Maul?",
      options: ["Dathomir", "Mustafar", "Sithis", "Korriban"],
      answer: "Dathomir",
    },
    {
      question:
        "What was the name of the starship used by the rebels in the Battle of Yavin, before the Millennium Falcon?",
      options: ["Home One", "Profundity", "Tantive IV", "Ghost"],
      answer: "Tantive IV",
    },
    {
      question: "What species was Supreme Leader Snoke?",
      options: ["Hylian", "Human", "Zabrak", "Unknown"],
      answer: "Unknown",
    },
    {
      question:
        "What was the name of the Sith homeworld during the era of the Old Republic?",
      options: ["Moraband", "Korriban", "Ziost", "Dromund Kaas"],
      answer: "Korriban",
    },
    {
      question: "What was the name of the first lightsaber ever created?",
      options: [
        "The Blade of the Sith",
        "The First Blade",
        "The Dark Saber",
        "The Darksaber",
      ],
      answer: "The Darksaber",
    },
    {
      question:
        "Who was the original owner of the Kyber crystal that became the centerpiece of Kylo Ren’s lightsaber?",
      options: [
        "Darth Vader",
        "Anakin Skywalker",
        "Luke Skywalker",
        "Sith artifacts",
      ],
      answer: "Sith artifacts",
    },
    {
      question:
        "In Star Wars Legends, who were the first beings to wield the Force?",
      options: ["The Celestials", "The Old Ones", "The Ones", "The Rakata"],
      answer: "The Celestials",
    },
  ];

  let handleSubmitQuiz = (e) => {
    e.preventDefault();

    let localPoints = 0;

    const formData = new FormData(e.target);

    let formDataEntries = formData.entries();

    // let formDataEntriesLength = Array.from(formDataEntries).length;

    // console.log(formDataEntriesLength);
    // console.log(questionsList.length);
    // if (formDataEntriesLength !== questionsList.length) {
    //   alert("Please answer all questions");
    //   // return;
    // }

    formDataEntries.forEach((entry, index) => {
      let [question, answer] = entry;

      const correctAnswer = questionsList[index].answer === answer;
      let parentElement;

      for (let element of e.target.children) {
        if (element.querySelector("h2")?.textContent === question) {
          parentElement = element;
          break;
        }
      }

      if (correctAnswer) {
        //setPoints(points + 1);
        localPoints++;

        console.log(parentElement);
        parentElement.classList.add("correct");
        parentElement.classList.remove("wrong");
      } else {
        parentElement.classList.add("wrong");
        parentElement.classList.remove("correct");
      }
    });

    setPoints(localPoints);
    // e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmitQuiz}>
        <h1>Star Wars Quiz</h1>
        {questionsList.map((question, iterator) => {
          return <Question questionProp={question} key={iterator} />;
        })}
        <button type="submit">Submit</button>
      </form>
      <h3>
        Points: {points} / {questionsList.length}
      </h3>
    </>
  );
}

export default App;
