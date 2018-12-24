import { Component, Input } from '@angular/core';
import { WishesService } from '../services/wishes.service';
import { Lista } from '../Models/list.model';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { AddPage } from '../pages/add/add.component';
@Component({
    selector: 'app-lists',
    templateUrl: 'lists.component.html'
})
export class ListsComponent{
    items: any[] = [];
    @Input() ended: boolean = false;
    constructor(public wisheService: WishesService,
         private navCtrl: NavController, private alertCtrl: AlertController ){
        this.items = wisheService.lists;
    }
    listSelected(list: Lista){
        this.navCtrl.push(AddPage,{
            title: list.title,
            lista: list,
        });
    }

    deleteList(list: Lista){
        this.wisheService.deleteList(list);
       
    }

    editList(lista: Lista, slidingItem: ItemSliding,){
        slidingItem.close();
        const alert = this.alertCtrl.create({
            title: 'Edit name list',
            message: 'edit the list name',
            inputs: [{
                name: 'title',
                placeholder: 'Name list',
                value: lista.title
            }],
            buttons: [{
                text: 'Cancel'
            },{
                text: 'Save',
                handler: data => {
                    if(data.title.length === 0) {
                        return;
                    }
                    //console.log(data);
                    // para enviar un objeto de una pantalla a otra
                    lista.title = data.title;
                    this.wisheService.saveStorage();
                }
            }
            ]
        });
        alert.present();
    }
}