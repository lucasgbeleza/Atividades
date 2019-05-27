import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teste-com-json',
  templateUrl: './teste-com-json.component.html',
  styleUrls: ['./teste-com-json.component.css']
})
export class TesteComJsonComponent implements OnInit {


  constructor(private httpService: HttpClient) { }

  pokeArray: string[];

  ngOnInit() {
    this.httpService.get('./assets/pokemons.json').subscribe(
      data => {
        this.pokeArray = data as string[];
      }
    )
  }

  displayData(){
   alert(this.pokeArray);
  }

}