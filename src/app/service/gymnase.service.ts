import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gymnase } from '../gymnase';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GymnaseService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(
    private http : HttpClient
    ) { }

  public getGymnases():Observable<Gymnase[]> {
    return this.http.get<Gymnase[]> (`${this.apiServerUrl}/gymnase/liste`);
  }

  public addGymnases(gymnase:Gymnase):Observable<Gymnase> {
    return this.http.post<Gymnase> (`${this.apiServerUrl}/gymnase/add`, gymnase);
  }

  public updateGymnases(gymnase:Gymnase):Observable<Gymnase> {
    return this.http.put<Gymnase> (`${this.apiServerUrl}/gymnase/update`, gymnase);
  }

  public deleteGymnases(id:number):Observable<void> {
    return this.http.delete<void> (`${this.apiServerUrl}/gymnase/delete/${id}`);
  }

}
