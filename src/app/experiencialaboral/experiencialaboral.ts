import { Persona } from "../persona/persona";

export interface Experiencia {
    id: number;
    puesto: string;
    nombreEmpresa: string;
    fechaInicio: string;
    fechaFinalizacion: string;
    descripcion: string;
    persona: Persona;
}