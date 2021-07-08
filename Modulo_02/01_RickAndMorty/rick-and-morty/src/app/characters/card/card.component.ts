import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
  <div>
  <h2>Lista de personajes</h2>
  <ul>
      
          <p><img src={{character.image}}></p>        
          <p>{{ character.name }}</p>
          <p>{{ character.species }}</p>
          <p>{{ character.status }}</p>
          <p>{{ character.type }}</p>
          <p>{{ character.origin.name }}</p>
          <p>{{ character.gender }}</p>
          <p>{{ character.location.name }}</p>
      
  </ul>
<a [routerLink]="['/characters', character.id]">

Leer mas..
</a>
</div>
  `,
})
export class CardComponent {
  @Input()
  character: any;

}
