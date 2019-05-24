import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro341',
  templateUrl: './livro341.component.html',
  styleUrls: ['./livro341.component.css']
})
export class Livro341Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrarValor(valor1:string, valor2: string):void {
    alert(`Combobox1, valor selecionado: ${valor1}, \nCombobox2, valor selecionado: ${valor2}, `);
  }
}
