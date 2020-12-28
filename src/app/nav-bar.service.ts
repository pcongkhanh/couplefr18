import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  private NavsUrl = '/couplefr18/assets/Json-mockup/Navs.json';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getNavs(): Observable<any> {
    return this.http.get<any>(this.NavsUrl);
  }

  updateState(): Observable<any> {
    return this.http.put<any>(this.NavsUrl, {"state": true, "title": "Home"});
  }
}
