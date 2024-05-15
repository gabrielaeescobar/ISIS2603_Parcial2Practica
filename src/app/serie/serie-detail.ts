import { Serie } from "./serie";

export class SerieDetail extends Serie{
    description: string;
    webpage:string;
    poster:string;
    constructor(
        id:number,
        name:string,
        channel:string,
        seasons:number,
        description:string,
        webpage:string,
        poster:string
    ){
        super(id, name, channel,seasons)
        this.description =description;
        this.webpage=webpage;
        this.poster=poster
    }
}