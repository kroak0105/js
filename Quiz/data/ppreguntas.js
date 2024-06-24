import { preguntas } from "../models/preguntas.js";
import { data } from "./data.js";

export const newPregunta = data.map(Preguntas => new preguntas(Preguntas.pregunta, Preguntas.elecciones, Preguntas.respuesta));