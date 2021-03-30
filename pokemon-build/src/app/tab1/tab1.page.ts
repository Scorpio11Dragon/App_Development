import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  logo: string;

  constructor() {
    this.logo = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Poké_Ball_icon.svg'
  }

  ngOnInit(){
  }

}
