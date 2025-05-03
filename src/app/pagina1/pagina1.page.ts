import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
  standalone: false,
})
export class Pagina1Page implements OnInit {

  filmes: any[] = [];

  constructor(private tmdb: TmdbService) {}

  ngOnInit() {
    this.tmdb.filmes_mais_populares().subscribe((res: any) => {
      this.filmes = res.results;
    });
  }

}
