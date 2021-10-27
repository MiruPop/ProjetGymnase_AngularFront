import { Component, Input, OnInit } from '@angular/core';

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

}
