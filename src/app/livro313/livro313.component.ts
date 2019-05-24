import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-livro313',
  templateUrl: './livro313.component.html',
  styleUrls: ['./livro313.component.css']
})
export class Livro313Component implements OnInit {
  hero = [
    {id: 1, name: "Batman"},
    {id: 2, name: "Flash"},
    {id: 3, name: "Quicksilver"},
    {id: 4, name: "Iron Man"},
    {id: 5, name: "Joker"},
    {id: 6, name: "Wolverine"}
  ] 
  
  onClickMe(){
    let temp = " ";
    for (let index = 0; index < this.hero.length; index++) {
      temp += `${this.hero[index].id},  ${this.hero[index].name} \n `
    }
    alert(temp);
  }

  constructor() { }

  ngOnInit() {
  }

}
