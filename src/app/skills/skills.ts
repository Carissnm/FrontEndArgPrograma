import { Persona } from "../persona/persona";

export interface Skills {
    id: number;
    skill: string;
    porcentaje: string;
    persona: Persona;
}