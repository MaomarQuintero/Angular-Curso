
import { Component } from '@angular/core';





@Component({
   selector: 'app-heroe',
   templateUrl: 'heroe.component.html'



})

export class Heroecomponent{
   nombre: string = 'iroman';
   Edad: number = 14

   get nombreCapitalizado(){
      return this.nombre.toUpperCase();
   }
  
   obtenerNombre() : string {
      return `${ this.nombre } - ${ this.Edad }`;


   }

   cambiarNombre() : void{
      this.nombre = 'Spiderman';

   }

   cambiarEdad() : void{

      this.Edad= 15;
   }
   



}