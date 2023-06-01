

export interface ITimes{
    id: number;
    name: string;
    code: string;
    logo: string; 
    
}

export interface ILigas{
    id : number;
    logo: string;
    name: string;
    type: string;
}

export interface IObjetoTimes{

    league : ILigas;
    team : ITimes;
    
    }