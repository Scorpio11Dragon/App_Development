import { Component } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import { PokemonService } from '../services/pokemon.service';
import { debounceTime } from "rxjs/operators"

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  offset = 0;
  pokemon = [];
  public searchControl: FormControl;

  constructor(private pokeService: PokemonService) {
    this.searchControl = new FormControl;
  }

  ngOnInit(){
    this.loadPokemon();
    this.onSearch

    this.searchControl.valueChanges
      .subscribe(search => {
        this.onSearch(search);
      });
  }

  loadPokemon(){
    this.pokeService.getPokemon(this.offset).subscribe(res => {
      console.log('result: ', res);
      this.pokemon = res;
    })
  }

  findPokemon(searchTerm){
    return this.pokemon.filter(poke => {
      return poke.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    })
  }

  onSearch(searchTerm){
    this.pokemon = this.findPokemon(searchTerm);
    if(searchTerm == ['']){
      this.pokeService.getPokemon(this.offset).subscribe(res => {
        console.log('result: ', res);
        this.pokemon = res;
      })
    }
  }
}
