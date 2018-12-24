import { Injectable } from "@angular/core";
import { Lista } from '../Models/list.model';
// libreria injectable permite el uso de services en la app
@Injectable()
export class WishesService{
    lists: Lista[] = [];
    constructor(){
        this.loadStorage();
        //const l1 = new Lista('Get the infinity stoness');
        //const l2 = new Lista('Heroes to defeat');
        //this.lists.push(l1,l2);
        //console.log(this.lists);
    }
    
    addList(list: Lista) {
        this.lists.push(list);
        this.saveStorage();
    }

    // para realizar localstorage
    saveStorage(){
        localStorage.setItem('data',JSON.stringify(this.lists));
        //console.log(this.lists);
    }
    loadStorage(){
        if(localStorage.getItem('data')){
            this.lists = JSON.parse(localStorage.getItem('data'));
        }
        else{
           this.lists = [];  
        }
    }

    deleteList(list: Lista){
        // funcion que genera un filtro en la lista
        this.lists = this.lists.filter(listData => {return listData.id !== list.id});
        this.saveStorage();
    }
}