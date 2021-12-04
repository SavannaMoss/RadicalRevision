import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Character }  from "../models/character";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getCharacters(): Observable<any> {
    return this.http.get<Observable<Character[]>>('api/characters');
  }

  filterCharacters(filter: string): Observable<any> {
    return this.http.get<Observable<Character[]>>('api/characters?' + filter);
  }
}
