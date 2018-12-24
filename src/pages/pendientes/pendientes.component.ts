import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { Lista } from '../../Models/list.model';
import { NavController, AlertController } from 'ionic-angular';
import { AddPage } from '../add/add.component';


@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesPage{
    items: any[] = [];
    constructor(public wisheService: WishesService, 
        private navCtrl: NavController, private alertCtrl: AlertController,
        ){
        //this.wisheService.loadStorage();    
        this.items = wisheService.lists;
       
    }
    listSelected(list: Lista){
        this.navCtrl.push(AddPage,{
            title: list.title,
            lista: list,
        });
    }

    agregarLista(){
        const alert = this.alertCtrl.create({
            title: 'New list',
            message: 'Write the list name',
            inputs: [{
                name: 'title',
                placeholder: 'Name list'
            }],
            buttons: [{
                text: 'Cancel'
            },{
                text: 'Add',
                handler: data => {
                    if(data.title.length === 0) {
                        return;
                    }
                    //console.log(data);
                    // para enviar un objeto de una pantalla a otra
                    this.navCtrl.push(AddPage, {
                        title: data.title
                    });
                }
            }
            ]
        });
        alert.present();
    }

    selectedList(list: Lista){
        console.log(list.items);
        //console.log(this.items);
        this.navCtrl.push(AddPage,{
            title: list.title,
            lista: list,
        });
    }

    
}