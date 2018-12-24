import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { Lista } from '../../Models/list.model';
@Component({
    selector: 'page-terminados',
    templateUrl: 'terminados.component.html'
})
export class TerminadosPage{
    items: any[] = [];
    constructor(public wisheService: WishesService ){
        this.items = wisheService.lists;
    }
    listSelected(list: Lista){
        console.log(list);
    }
}