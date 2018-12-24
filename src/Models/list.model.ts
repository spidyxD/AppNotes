import { ListItem } from './list-item.model';

export class Lista {
    id: number;
    title: string;
    created: Date;
    finished: Date;
    ended: boolean;
    items: ListItem[] = [];

    constructor(title:string){
        this.title = title;
        this.ended = false;
        this.created = new Date();
        this.finished = new Date();
        this.items = [];
        this.id = new Date().getTime();

    }

}