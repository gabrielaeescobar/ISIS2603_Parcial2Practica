import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pais } from './pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://gist.githubusercontent.com/fai-aher/434fb96e22762f4d7ebf2d5179eb8622/raw/6692b671d7e76cb40df7a56f88afda080a0f3392/countries.json"
  constructor(private http: HttpClient) { }
  getPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.apiUrl);
  }
}
