import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
export interface Picture {
  copyright: string;
  date: string;
  explanation: string;
  media_type: string;
  service_version: string;
  title: string;
  hdurl: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  Dday!: string;
  private configUrl!: string;
  constructor(private http: HttpClient) { }

  getPicture(): Observable<Picture> {
    const year = environment.year;
    const month = environment.month;
    const day = this.Dday;
    this.configUrl = `${environment.nasaUrl}/planetary/apod?date=${year}-${month}-${day}&api_key=${environment.nasaKey}`;
    const picture = this.http.get<Picture>(this.configUrl);
    return picture;
  }

  /* getDate() {
    let date = this.Dday;
    date = date as string
    return date;
  } */
}