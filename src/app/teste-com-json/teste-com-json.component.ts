import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teste-com-json',
  templateUrl: './teste-com-json.component.html',
  styleUrls: ['./teste-com-json.component.css']
})
export class TesteComJsonComponent implements OnInit {


  constructor(private httpService: HttpClient) { }

  pokeArray: string;

  ngOnInit() {
    this.httpService.get('./assets/country.json').subscribe(
      data => { // Nome do Array serve pra demonstrar qual dos itens dentro do JSON irá ser acessado
        // this.pokeArray = data["Pokemons"] as string; 
        this.pokeArray = data as string;
      }
    )
  }


  displayData(){
    // Tá mostrando erro mas deu certo sim e não são apresentados erros no browser
    // for (const item of this.pokeArray) {
    //   console.log(item);
    // }
    console.log(this.pokeArray.name)
  }

}
