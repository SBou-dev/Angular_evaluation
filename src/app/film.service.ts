import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from './film';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class FilmService {

  // Variables
  films: Film[] = [];

  // Constructeur
  constructor(private httpClient: HttpClient) { }

  // Méthodes
  // Récupère la liste des films
  getAll(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(`${environment.serveurURL}/movies`);
  }

  // Récupère le film correspondant à l'id
  getFilm(filmId: number): Observable<Film> {
    return this.httpClient.get<Film>(`${environment.serveurURL}/movies/${filmId}`);
  }

  // Modifie le film correspondant à l'id
  updateFilm(film: Film): Observable<Film> {
    return this.httpClient.put<Film>(`${environment.serveurURL}/movies/${film.id}`, film, httpOptions);
  }


}
