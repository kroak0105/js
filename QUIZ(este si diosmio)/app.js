//@ts-check
import { Quiz } from "./models/Quiz.js";
import { preguntas } from "./data/preguntas.js";
import { Interfaz } from "./models/Interfaz.js";

// Función para mezclar el array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const renderPage = (quiz, interfaz) => {
    if (quiz.finalizado()) {
        interfaz.showPuntos(quiz.puntos, quiz.preguntas.length);
    } else {
        interfaz.showQuestion(quiz.getPreguntaIndex().text);
        interfaz.showChoices(quiz.getPreguntaIndex().choices, (currentChoice) => {
            quiz.adivina(currentChoice);
            renderPage(quiz, interfaz);
        });
        interfaz.showProgress(quiz.preguntaIndex + 1, quiz.preguntas.length);
        interfaz.showCurrent(quiz.puntos, quiz.preguntas.length)
    }
}

function main() {
    const shuffledPreguntas = shuffleArray(preguntas); // mezclar las preguntas jjj
    const quiz = new Quiz(shuffledPreguntas);
    const interfaz = new Interfaz();

    renderPage(quiz, interfaz);
}

main();
