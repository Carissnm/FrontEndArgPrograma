import { Persona } from "../persona/persona";

export interface Proyecto {
    id: number;
    nombreProyecto: string;
    descripcion: string;
    urlImagen: string;
    urlProyecto: string;
    persona: Persona;
}