import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private galleryUrl = '../assets/Json-mockup/Gallery.json';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getGallery(): Observable<any> {
    return this.http.get<any>(this.galleryUrl);
  }
}
