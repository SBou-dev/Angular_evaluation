import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from '../film';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  // Variables
  @Input() films: Film[] = [];
  // pour envoyer l'id du film pour modifier son score
  @Output() editScoreEvent = new EventEmitter<Film>();

  // Constructeur
  constructor() { }

  // Méthodes
  ngOnInit(): void {
  }

  addScore(film: Film){
    film.score = film.score + 1;
    this.editScoreEvent.emit(film);
  }

  reduceScore(film: Film){
    film.score = film.score -1;
    this.editScoreEvent.emit(film);
  }

}
