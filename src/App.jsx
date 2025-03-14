import { useEffect, useState } from "react";
import "./App.css";
import Question from "./components/Question";

function App() {
  const [points, setPoints] = useState(0);

  const questionsList = [
    // Easy Questions
    {
      question:
        "What is the name of the desert planet where Luke Skywalker grew up?",
      options: ["Tatooine", "Jakku", "Hoth", "Naboo"],
      answer: "Tatooine",
    },
    {
      question:
        "Who was the Sith Lord who killed Qui-Gon Jinn in The Phantom Menace?",
      options: ["Darth Vader", "Darth Maul", "Darth Sidious", "Count Dooku"],
      answer: "Darth Maul",
    },
    {
      question: "What color is Yoda’s lightsaber in the prequel trilogy?",
      options: ["Blue", "Purple", "Green", "Red"],
      answer: "Green",
    },

    // Medium Questions
    {
      question: "What is the name of the Wookiee homeworld?",
      options: ["Endor", "Kashyyyk", "Yavin 4", "Dantooine"],
      answer: "Kashyyyk",
    },
    {
      question:
        "In The Empire Strikes Back, who says, 'I am not a committee!'?",
      options: ["Leia Organa", "Han Solo", "Lando Calrissian", "Mon Mothma"],
      answer: "Leia Organa",
    },
    {
      question: "What type of ship is the Millennium Falcon?",
      options: ["X-wing", "YT-1300 freighter", "TIE Fighter", "Star Destroyer"],
      answer: "YT-1300 freighter",
    },

    // Hard Questions
    {
      question:
        "In The Clone Wars series, what is the name of the Mandalorian extremist group led by Pre Vizsla?",
      options: [
        "Death Watch",
        "Shadow Collective",
        "Night Owls",
        "True Mandalorians",
      ],
      answer: "Death Watch",
    },
    {
      question:
        "In Legends, what ancient species created the hyperspace-distorting region known as The Maw?",
      options: ["Rakata", "Celestials", "Gree", "Kwa"],
      answer: "Celestials",
    },

    // Hardcore Questions
    {
      question:
        "What was the name of the Jedi Master who trained Count Dooku before he became a Sith Lord?",
      options: ["Yoda", "Thame Cerulian", "Sifo-Dyas", "Jocasta Nu"],
      answer: "Thame Cerulian",
    },
    {
      question:
        "In Legends, what Sith Lord’s essence was trapped in a thought bomb on Ruusan, ending the New Sith Wars?",
      options: ["Darth Bane", "Lord Kaan", "Darth Zannah", "Exar Kun"],
      answer: "Lord Kaan",
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
