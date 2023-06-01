import { IPaises } from "./Paises";

export interface ILigas{
    id : number;
    logo: string;
    name: string;
    type: string;
}

export interface ISeasons{
    current: boolean;
    end: string;
    start: string ;
    year: Date;

}

export interface IObjetoLigas{

league : ILigas;
country : IPaises;
seasons : ISeasons;
}

