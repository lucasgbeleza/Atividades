import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-livro311',
  templateUrl: 'livro311.component.html',
  styleUrls: ['./livro311.component.css']
})
export class Livro311Component implements OnInit {
  
  //Decorator to change this variable content and use within the html template
  @Input() mensagem = "";
  
  // Method to be used when the button is clicked
  onClickMe(novaMensagem: string){
   this.mensagem = novaMensagem;
  }

  constructor() { }

  ngOnInit() {
  }

}
