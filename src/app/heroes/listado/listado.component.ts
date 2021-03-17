import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  //styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

 heroes: string[] = ['Iroman', 'hulk', 'Goku', 'Vegueta','vision', 'Capitan America', 'Wolverine']
 heroeBorrado: string = '';

 borrarHeroe() {
 return this.heroeBorrado = this.heroes.shift();
 }




}
