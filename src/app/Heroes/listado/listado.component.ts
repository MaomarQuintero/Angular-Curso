import { Component,  } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {
   Heroes: string [] = ['Spiderman','Batman','Hulk','Thor','Maomar'];
   
   HeroeBorrado2: string = '';
  
   borrarHeroe() {
    
    console.log("Borrando");
     this.HeroeBorrado2 = this.Heroes.pop() || '';

   }

}
