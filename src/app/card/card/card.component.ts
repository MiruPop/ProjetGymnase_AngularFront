import { Component, Input, OnInit } from '@angular/core';
import { Gymnase } from 'src/app/gymnase';
import { GymnaseListPageComponent } from 'src/app/GymnaseListPage/gymnase-list-page/gymnase-list-page.component';

@Component({
  selector: 'app-card',       //le selector permet d'utiliser ce composant dans d'autres pages (ici gymnaseListPage.html)
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() gymnase : any;
  /*gymnase c'est ce qui permet à son parent 
  de communiquer avec ce composant (le parent = gymnaseListPage)*/
  constructor() { }

  ngOnInit(): void {
  }

  //   public onOpenModal(gymnase: Gymnase, mode: string): void {
  //   const container = document.getElementById('main-container');
  //   const button = document.createElement('button');
  //   button.type = 'button';
  //   button.style.display = 'none';
  //   button.setAttribute('data-toggle', 'modal');
  //   if (mode === 'update') {
  //     button.setAttribute('data-target', '#updateGymnaseModal');
  //   }
  //   if (mode === 'delete') {
  //     button.setAttribute('data-target', '#deleteGymnaseModal');
  //   }
  //   container?.appendChild(button);
  //   button.click();
  // }
}
