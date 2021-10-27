import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Gymnase } from 'src/app/gymnase';
import { GymnaseService } from 'src/app/service/gymnase.service';

@Component({
  selector: 'app-gymnase-details',
  templateUrl: './gymnase-details.component.html',
  styleUrls: ['./gymnase-details.component.css']
})
export class GymnaseDetailsComponent implements OnInit {

  public gym!: Gymnase;
  public gymName!: string;

  constructor(private gymnaseService : GymnaseService) { }

  ngOnInit(): void {
    this.gymnaseService.getGymnaseByName(this.gym.nomGymnase).subscribe(
      (data : string) => {
        this.gym.nomGymnase = data;
      }
    );
  }

}
