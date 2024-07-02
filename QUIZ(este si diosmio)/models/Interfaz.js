function reintentar() {
    document.getElementById('reintentar');
    window.location = "inicio.html"
}
export class Interfaz {
  
    constructor() {}
  
    /**
     *
     * @param {string} text
     */
    showQuestion(text) {
      const questionTitle = document.getElementById("question");
      questionTitle.innerHTML = text;
    }
    
    /**
     *
     * @param {string[]} choices
     */
    showChoices(choices, callback) {
      const choicesContainer = document.getElementById("choices");
      choicesContainer.innerHTML= '';
  
      for (let i = 0; i < choices.length; i++) {
        const button = document.createElement("button");
        button.addEventListener("click", () => callback(choices[i]));
        button.className = "button";
        button.innerText = choices[i];
  
        choicesContainer.append(button);
      }
    }
    
    showPuntos(puntos, total) {
        const finalHTML = `
          <h1>Resultados</h1>
          <hr>
          <h2 id="puntos">Tu puntaje es: ${puntos} de ${total}</h2>
        `

        const element = document.getElementById("quiz");
        element.innerHTML = finalHTML;
      }
    
      
      showProgress(currentIndex, total){
        const element = document.getElementById('progress');
        element.innerHTML = `Pregunta ${currentIndex} de ${total}`;
}

      showCurrent(puntos, total){
        const element2 = document.getElementById('progress2');
        element2.innerHTML = `${puntos} puntos de ${total}`
      }
}
