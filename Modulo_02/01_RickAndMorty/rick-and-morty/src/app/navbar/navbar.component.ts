import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <nav>
  <ul
  class="flex justify-end space-x-10 bg-blue-200 text-gray-600 px-5 py-2 text-xs"
  >
      <li><a routerLink="/"> Personajes </a></li>
      <li><a routerLink="/locations"> Ubicaciones </a></li>
      <li><a routerLink="/episodes"> Episodios </a></li>
  </ul>
</nav>
  `,
  styles: [
    `
    nav ul{
      display: normalizeGenFileSuffix;
    }
    `
    
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
