import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Gymnase } from './gymnase';
import { GymnaseService } from './service/gymnase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public gymnases!: Gymnase[];

  constructor(private gymnaseService : GymnaseService) {}

  ngOnInit() {
    this.getGymnases();
  }

  public getGymnases():void {
    this.gymnaseService.getGymnases().subscribe(
      (response:Gymnase[]) => {
        this.gymnases = response;
      },
      (error:HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }
}
