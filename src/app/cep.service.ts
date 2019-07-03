import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpClient: HttpClient) { }

  getCep(cep: string) {
    return this.httpClient.get('http://viacep.com.br/ws/' + cep + '/json/');
  }
}
