import { Seance } from "./seance";

export interface Gymnase {
    id:string;
	idGymnase:number;
	nomGymnase:string;
	adresse:string;
	ville:string;
	surface:number;
	// seances:Array<Seance>;
	seances:Seance[];
}