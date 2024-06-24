
class preguntas {

    /**
     * @param {string} text este es el texto de la pregunta
     * @param {string[]} choices estas son las opciones
     * @param {string} answer esta es la respuesta de la pregunta 
    */
constructor(text, choices, answer) {
    this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    /**
     * 
     * @param {string} choice algun texto para adivinar
     * @returns {boolean} return true si la respueta es correcta
     */
    
    correctAnswer(choice) {
        return choice === this.answer;
    }
}
export { preguntas }