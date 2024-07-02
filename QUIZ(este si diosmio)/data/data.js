/*const categorySelect= document.getElementById('categorias');
const startButton= document.getElementById('startButton');

//Arreglo para almacenar los datos de la api
let dataPreguntas= [];

//Funcion para generar la url de la api y obtener los datos

function fetchApiData() {
    let selectedCategory= categorySelect.value;
    const apiKey = '$2b$12$kCSaaRC4OklipqPgc4D8/OsRkzGuByXdN0Y3JsJr45/8jNfBrNKFa';
    const apiUrl = `https://api.quiz-contest.xyz/questions?limit=5&page=1&category${selectedCategory}=&format=multiple`;

    fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      })
        .then(response => response.json())
        .then(data => {
          dataPreguntas.push(...data)
          console.log('datos obtenidos', dataPreguntas)
        })
        .catch(error => {
          console.error('Error al obtener las preguntas:', error);
        });

}

//Evento para ejecutar la funcion cuando se haga clic en el boton
startButton.addEventListener('click', fetchApiData);
*/

export const data = [
  {
    question: "¿Cuál es la integral de la Sec (x)?",
    choices: ["Ln|sec(x)+tg(x)|", "Ln|Sec(x)–tg(x)|", "Tg(x)", "Sec(x)tg(x)"],
    answer: "Ln|sec(x)+tg(x)|",
  },
  {
    question: "94 x 7÷2",
    choices: ["329", "281", "414", "429"],
    answer: "329",
  },
  {
    question: "¿Que lenguaje tiene más hablantes nativos?",
    choices: ["Ingles", "Mandarin", "Francés", "Español"],
    answer: "Español",
  },
  {
    question: "¿Cuál es el metal más caro del mundo?",
    choices: ["El oro", "El diamante", "El rodio", "La esmeralda"],
    answer: "El rodio",
  },
  {
    question: "¿Cuál es la unidad de medida de la resistencia eléctrica?",
    choices: ["Voltio", "Ohmio", "Amperio", "Newton"],
    answer: "Ohmio",
  },
  {
    question: "¿Cuál de los lenguajes no es un lenguaje de programación?",
    choices: ["HTML", "JavaScript", "Python", "C++"],
    answer: "HTML",
  },
  {
    question: "¿Cuál es símbolo químico del sodio?",
    choices: ["S", "Na", "Br", "Zn"],
    answer: "Na",
  },
  {
    question: "¿Cómo convierten las plantas la luz en energía?",
    choices: ["Iluminación", "Transpiración", "Fotosíntesis", "Translocación"],
    answer: "Fotosíntesis",
  },
  {
    question: "¿Que órgano elimina el exceso de agua y desechos de la sangre?",
    choices: ["Los riñones", "El hígado", "Los pulmones", "El páncreas"],
    answer: "Los riñones",
  },
  {
    question: "¿En qué año empieza la 5ta republica (MVR)?",
    choices: ["1980", "1899", "1997", "1999"],
    answer: "1997",
  },
];