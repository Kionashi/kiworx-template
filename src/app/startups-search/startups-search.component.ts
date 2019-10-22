import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
interface PokemonResponse {
  name: string
}
@Component({
  selector: 'app-startups-search',
  templateUrl: './startups-search.component.html',
  styleUrls: ['./startups-search.component.css']
})
export class StartupsSearchComponent implements OnInit {

  resultCount = 0;
  constructor(private http: HttpClient) { 
    
  }
  
  ngOnInit() {
  }
 
  searchStartups(){
    let pokeId = Math.floor(Math.random() * 151); 
    this.http.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${pokeId}`).subscribe(pokemon =>{
      alert(pokemon.name);
    })
  }
}
