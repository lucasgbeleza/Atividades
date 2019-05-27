import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro361',
  templateUrl: './livro361.component.html',
  styleUrls: ['./livro361.component.css']
})
export class Livro361Component implements OnInit {


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

  public displayData(id?:number, nome?:string, salario?:number): void{
      for (const funcionario of this.arrFuncionario) {
        if (funcionario.id == id) {
          alert(funcionario.id)
        } else if (funcionario.id == id && funcionario.nome == nome){
          alert(funcionario.id + funcionario.nome)
        } else if (funcionario.id == id && funcionario.salario == salario){
          alert(funcionario.id + funcionario.salario)
        }
      }
    }

}
