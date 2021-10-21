import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.scss']
})
export class ListFilmComponent implements OnInit {

  // Variables
  movieTitle: string = "Liste des films";
  films: Film[] = [];

  // Constructeur
  constructor(private filmService: FilmService) { }

  // Méthodes
  ngOnInit(): void {
    // récupère la liste de film depuis l'api
    this.filmService.getAll().subscribe(result => {
      console.log(result);
      this.films = result;
    });
  }

  editScoreFilm(film: Film){
    this.filmService.updateFilm(film).subscribe(result => {
      this.films.forEach(film => {
        if(film.id === result.id){
          film.score = result.score;
        }
      });
    });
  }


}
