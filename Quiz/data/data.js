


//let questions= [];

/*
function entrar(){
    const startbtn= document.querySelector('#btn')
    const category= document.querySelector('#categoria');
    const difficulty= document.querySelector('#dificultad');
    
    const cat= category.value;
    const dif= difficulty.value;
    let api_url = `https://www.preguntapi.dev/api/categories/${cat}?level=${dif}&limit=5`;
    console.log(api_url)
    fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
        questions = data.results;
        console.log(questions);
    });
window.location = 'quiz.html';
}
*/


export const data = [
    {
        pregunta: "Cual de las siguientes opciones no es un editor de codigo?",
        elecciones: ["vim", "vscode", "emacs", "word"],
        respuesta: "word",
    },
    {
        pregunta: "Que lenguaje  no es orientado a objetos?",
        elecciones: ["java", "haskell", "c++", "Python"],
        respuesta: "haskell",
    },
    {
        pregunta: "Que lenguaje no sirve para estilizar sitios web?",
        elecciones: ["stylus", "less", "sass", "PostCSS"],
        respuesta: "PostCSS",
    },
];
