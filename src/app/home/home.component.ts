import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Variables
  homeTitle: string = " Bienvenue sur ma base de données de films";

  // Constructeur
  constructor(private router: Router) { }

  // Méthodes
  ngOnInit(): void {
  }

  navBtnHome(){
    this.router.navigate(['/movies']);
  }

}
