import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character: any

  constructor(
    private route: ActivatedRoute,
    private service: CharactersService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let { id } = params
      this.service.getCharacter(id).then((character) => {
        this.character = character
        console.log(this.character)
      })

    })
  }

}
