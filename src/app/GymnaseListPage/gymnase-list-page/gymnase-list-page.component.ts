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

  public gymnases: Gymnase[] | undefined;
  public updateGymnase!: Gymnase;

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
  public onOpenModal(gymnase: Gymnase | null, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addGymnaseModal');
    }
    if (mode === 'update') {
      button.setAttribute('data-target', '#updateGymnaseModal');
    }
    if (mode === 'delete') {
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
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
    // addForm.value va retourner un document en format json
  }

  public onUpdateGymnase(gymnase:Gymnase): void {
    this.gymnaseService.updateGymnases(gymnase).subscribe(
      (response: Gymnase) => {
        console.log(response);

        this.getGymnaseList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }
  
}