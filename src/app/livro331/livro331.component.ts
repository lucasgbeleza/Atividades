import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-livro331',
  templateUrl: './livro331.component.html',
  styleUrls: ['./livro331.component.css']
})
export class Livro331Component implements OnInit {
  hero = [
    {id: 0, name: "Thanos"},
  ]


  adicionarHeroi(id: number, name: string){
    this.hero.push({id, name});
  }

  listarHerois(){
    let temp = " ";
    for (let index = 0; index < this.hero.length; index++) {
      temp += `${this.hero[index].id},  ${this.hero[index].name} \n `
    }
    alert(temp);
  }

  getHeroes(): void {
    
  }

  constructor() { }

  ngOnInit() {
    this.getHeroes();
  }

}
