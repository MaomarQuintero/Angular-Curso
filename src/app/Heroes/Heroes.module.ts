import { NgModule } from '@angular/core';
import { Heroecomponent } from './Heroe/Heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({
     declarations:[
      Heroecomponent,
      ListadoComponent

     ],
    exports: [
        ListadoComponent
    ],
    imports: [

         CommonModule
    ]




})
export class HeroesModule {}