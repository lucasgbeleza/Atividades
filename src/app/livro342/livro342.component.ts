import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro342',
  templateUrl: './livro342.component.html',
  styleUrls: ['./livro342.component.css']
})
export class Livro342Component implements OnInit {

  arrFuncionario = [
    {id: 0, nome: "Lucas", salario: 1400.00},
    {id: 1, nome: "Raian", salario: 1400.00},
    {id: 2, nome: "Murilo", salario: 1400.00},
    {id: 3, nome: "José Maria", salario: 1400.00},
    {id: 4, nome: "Thiago", salario: 1400.00}
  ]

  constructor() { }

  ngOnInit() {
  }


  mostrarDados(nome: string):void {
    for (let index = 0; index < this.arrFuncionario.length; index++) {
      let element = `matricula = ${this.arrFuncionario[index].id} \n nome = ${this.arrFuncionario[index].nome.trim()} \n salario = ${this.arrFuncionario[index].salario}`; 
      if (this.arrFuncionario[index].nome == nome) {
        alert(element);
      }
      
    }
  }
}
