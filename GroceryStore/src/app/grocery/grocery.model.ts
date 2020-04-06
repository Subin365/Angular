import { Listitem } from '../shared/content.model';

export class Grocery{
    public name:string;
    public description:string;
    public imagePath:string;
    public listItem:Listitem[];
    constructor(name:string, description:string, imagePath:string,listItem:Listitem[]){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.listItem = listItem;
    }
}