import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gymnase } from '../gymnase';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GymnaseService {
  private gymnaseRoot: string;

  constructor(private httpClient : HttpClient) { 
      this.gymnaseRoot = `${environment.API_URL}/gymnase`;
    }

  public getGymnases():Observable<Gymnase[]> {
    return this.httpClient.get<Gymnase[]> (`${this.gymnaseRoot}/liste`);
  }

  public addGymnases(gymnase:Gymnase):Observable<Gymnase> {
    return this.httpClient.post<Gymnase> (`${this.gymnaseRoot}/add`, gymnase);
  }

  public updateGymnases(gymnase:Gymnase):Observable<Gymnase> {
    return this.httpClient.put<Gymnase> (`${this.gymnaseRoot}/update`, gymnase);
  }

  public deleteGymnases(id:string):Observable<void> {
    return this.httpClient.delete<void> (`${this.gymnaseRoot}/delete/${id}`);
  }

  public getGymnaseById(id:string):Observable<Gymnase> {
    return this.httpClient.delete<Gymnase> (`${this.gymnaseRoot}/nom/${id}`);
  }

}
