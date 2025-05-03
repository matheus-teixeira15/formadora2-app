import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private api_key = 'CHAVE_DA_API_AQUI'; // Placeholder para a chave da API
  private api_url_base = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  // Busca os filmes mais populares no TMDB
  filmes_mais_populares() {
    return this.http.get(`${this.api_url_base}/movie/popular?api_key=${this.api_key}&language=pt-BR&page=1`);
  }
}
