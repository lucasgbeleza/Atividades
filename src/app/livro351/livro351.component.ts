import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Funcionario {
  id: number;
  nome: string;
  salario: number;
}

@Component({
  selector: 'app-livro351',
  templateUrl: './livro351.component.html',
  styleUrls: ['./livro351.component.css']
})
export class Livro351Component implements OnInit {
  arrFuncionario = [
    {id: 0, nome: "Lucas", salario: 1400.00},
    {id: 1, nome: "Raian", salario: 1400.00},
    {id: 2, nome: "Murilo", salario: 1400.00},
    {id: 3, nome: "José Maria", salario: 1400.00},
    {id: 4, nome: "Thiago", salario: 1400.00}
  ]
  
  funcionario: 'option2';

  constructor() { }

  ngOnInit() {
  }

}
