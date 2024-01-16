import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})

export class ListarPensamentoComponent {

  listarPensamentos: Pensamento [] = [];

  constructor (private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listarPensamentos().subscribe((listarPensamentos) => {
      this.listarPensamentos = listarPensamentos
    })
  }

}
