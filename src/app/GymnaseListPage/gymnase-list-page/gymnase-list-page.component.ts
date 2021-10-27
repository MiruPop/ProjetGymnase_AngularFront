import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Gymnase } from 'src/app/gymnase';
import { GymnaseService } from 'src/app/service/gymnase.service';

@Component({
  selector: 'app-gymnase-list-page',
  templateUrl: './gymnase-list-page.component.html',
  styleUrls: ['./gymnase-list-page.component.css']
})
export class GymnaseListPageComponent implements OnInit {
  @Input() gymProp : any;

  public gymnases: Gymnase[] | undefined;
  public updateGymnase!: Gymnase; //c'est cette variable qui va faire le binding avec le formulaire
  public deletedGymnase!: Gymnase;

  constructor(private gymnaseService: GymnaseService) {
  }

  ngOnInit(): void {
    this.getGymnaseList();
  }


  public getGymnaseList(): void {
    this.gymnaseService.getGymnases().subscribe((data: Gymnase[]) => {
      this.gymnases = data;
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  //bouton "générique" et caché, qui sert de base à tous les boutons de la page, en ouvrant une modale
  public onOpenModal(gymnase: Gymnase, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addGymnaseModal');
    }
    if (mode === 'update') {
      this.updateGymnase = gymnase;
      button.setAttribute('data-target', '#updateGymnaseModal');
    }
    if (mode === 'delete') {
      this.deletedGymnase = gymnase;
      button.setAttribute('data-target', '#deleteGymnaseModal');
    }
    container?.appendChild(button);
    button.click();
  }

  //fonction pour ajouter une entrée dans le backend
  public onAddGymnase(addForm:NgForm): void {
    document.getElementById('add-gym-close')?.click();
    this.gymnaseService.addGymnases(addForm.value).subscribe(
      (response: Gymnase) => {
        console.log(response);

        this.getGymnaseList();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      });
    // addForm.value va retourner un document en format json
  }

  public onUpdateGymnase(gymnase:Gymnase): void {
    //la ligne suivante permet de fermer la modale une fois le bouton "Sauvegarder" clické
    document.getElementById('update-gym-close')?.click();
    this.gymnaseService.updateGymnases(gymnase).subscribe(
      (response: Gymnase) => {
        console.log(response);

        this.getGymnaseList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  public onDeleteGymnase(id:string): void {
    this.gymnaseService.deleteGymnases(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getGymnaseList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }
  
}