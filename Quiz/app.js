
//@ts-check
import { Quiz } from "./models/Quizz.js";
import { UI } from "./models/UI.js";
import { newPregunta } from "./data/ppreguntas.js";

// Renderring the page
const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score);
  } else {
    console.log(quiz);
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showProgress(quiz.questionIndex + 1, quiz.newPregunta.length);
    ui.showChoices(quiz.getQuestionIndex().choices, (currenChoice) => {
      quiz.guess(currenChoice);
      renderPage(quiz, ui);
    });
  }
};

function main() {
  const quiz = new Quiz(newPregunta);
  const ui = new UI();

  renderPage(quiz, ui);
}

main();

