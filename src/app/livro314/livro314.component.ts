import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-livro314',
  templateUrl: './livro314.component.html',
  styleUrls: ['./livro314.component.css']
})
export class Livro314Component implements OnInit {
  hero = [
    {id: 0, name: "Batman"},
    {id: 1, name: "Flash"},
    {id: 2, name: "Quicksilver"},
    {id: 3, name: "Iron Man"},
    {id: 4, name: "Joker"},
    {id: 5, name: "Wolverine"}
  ] 

  mostrarHeroi(id:number){
   alert(this.hero[id].name);
  }

  // mostrarHeroi1(nome:string){
  //   alert(this.hero.find<any>(nome);
  //  }

  constructor() { }

  ngOnInit() {
  }

}
