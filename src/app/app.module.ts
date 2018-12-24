import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// pages
import { TabsPage } from '../pages/tabs/tabs';
import { PendientesPage } from '../pages/pendientes/pendientes.component';
import { TerminadosPage } from '../pages/terminados/terminados.component';
import { AddPage } from '../pages/add/add.component';

// services
import { WishesService } from '../services/wishes.service';

// pipes
import { FilterCompletePipe } from '../pipes/filter-complete/filter-complete';

// components
import { ListsComponent } from '../components/lists.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// NOTA se deben agregar los nuevos componentes tanto en declarations y en entrycomponents
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    TerminadosPage,
    PendientesPage,
    AddPage,
    FilterCompletePipe,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    TerminadosPage,
    PendientesPage,
    AddPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WishesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
