import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {
  URL: string = "https://rickandmortyapi.com/api/character"
  characters: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.getCharacters()
    .then(data => {
      this.characters= data.results
      console.log(this.characters)
    })
  }

  getCharacters = () => fetch(this.URL).then((response) => response.json())
}
