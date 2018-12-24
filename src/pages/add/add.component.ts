import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { Lista, ListItem } from '../../Models';
import { AlertController,ItemSliding, NavParams, Item } from 'ionic-angular';
@Component({
    selector: 'page-add',
    templateUrl: 'add.component.html'
})
export class AddPage{
    lista: Lista = new Lista(' ');
    nameItem: string = '';
    constructor(public wisheService: WishesService
        ,private navParams: NavParams,private alertCtrl: AlertController ){
              
        // navparams obtiene los parametros obtenidos de la pagina anterior
      const t = this.navParams.get('title');
      if(this.navParams.get('lista')){
            this.lista = this.navParams.get('lista');
            //console.log(this.navParams.get('lista'));
        }
      else{
        this.lista = new Lista(t);
        this.wisheService.addList(this.lista);
      }
    }
    
    addItem(){ 
        if(this.nameItem.length === 0){
            return;
        }
       // console.log(this.lista.items);
        const newItem = new ListItem(this.nameItem);
        this.lista.items.push(newItem);
        this.wisheService.saveStorage();
        this.nameItem = '';
    }

    updateTask(item: ListItem){
        item.complete = !item.complete;
        const pendings = this.lista.items.filter(itemData => { return !itemData.complete} ).length;
        console.log(pendings);
        if(pendings === 0){
            this.lista.ended = true;
            this.lista.finished = new Date();
        }
        else{
            this.lista.ended = false;
            this.lista.finished = null;
        }
        this.wisheService.saveStorage();
    }

    deleteTask(i:number){
        this.lista.items.splice(i,1);
        this.wisheService.saveStorage();
    }
    
    editItem(slidingItem: ItemSliding, n:number){
        slidingItem.close();
        console.log(this.lista.items.slice(1,1)[0]);
        const alert = this.alertCtrl.create({
            title: 'Edit name item',
            message: 'edit the item name',
            inputs: [{
                name: 'title',
                placeholder: 'Name item',
                value: this.lista.items.slice(n,1)[0].desc
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
                    this.lista.items.slice(n,1)[0].desc = data.title;
                    this.wisheService.saveStorage();
                }
            }
            ]
        });
        alert.present();
    }
   
}