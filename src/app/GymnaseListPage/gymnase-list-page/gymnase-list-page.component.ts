import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Gymnase } from 'src/app/gymnase';
import { GymnaseService } from 'src/app/service/gymnase.service';

@Component({
  selector: 'app-gymnase-list-page',
  templateUrl: './gymnase-list-page.component.html',
  styleUrls: ['./gymnase-list-page.component.css']
})
export class GymnaseListPageComponent implements OnInit {
  public gymnases: Gymnase[] | undefined;

  constructor(private gymnaseService : GymnaseService) {
  }

  ngOnInit():void {
    this.gymnaseService.getGymnases().subscribe((data : Gymnase[]) => {
      this.gymnases = data;
    });
  }
}
