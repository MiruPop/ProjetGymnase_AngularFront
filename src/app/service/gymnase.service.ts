import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gymnase } from '../gymnase';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GymnaseService {
  private gymnaseBaseUrl: string;

  constructor(
    private httpClient : HttpClient
    ) { 
      this.gymnaseBaseUrl = 'http://localhost:9000/gymnase';
    }

  public getGymnases():Observable<Gymnase[]> {
    return this.httpClient.get<Gymnase[]> (`${this.gymnaseBaseUrl}/liste`);
  }

  public addGymnases(gymnase:Gymnase):Observable<Gymnase> {
    return this.httpClient.post<Gymnase> (`${this.gymnaseBaseUrl}/add`, gymnase);
  }

  public updateGymnases(gymnase:Gymnase):Observable<Gymnase> {
    return this.httpClient.put<Gymnase> (`${this.gymnaseBaseUrl}/update`, gymnase);
  }

  public deleteGymnases(id:number):Observable<void> {
    return this.httpClient.delete<void> (`${this.gymnaseBaseUrl}/delete/${id}`);
  }

  public getGymnaseByName(nomGymnase:string):Observable<Gymnase> {
    return this.httpClient.delete<Gymnase> (`${this.gymnaseBaseUrl}/nom/${nomGymnase}`);
  }

}
