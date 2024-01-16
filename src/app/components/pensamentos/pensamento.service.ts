import { CriarPensamentoComponent } from './criar-pensamento/criar-pensamento.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly URL = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listarPensamentos(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.URL)
  }

  criarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.URL, pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.URL}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.URL}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.URL}/${id}`
    return this.http.get<Pensamento>(url)
  }

}
