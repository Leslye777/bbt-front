import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.css']
})
export class GenericModalComponent {
  @Input() modalType: string = ''; // Tipo do modal (ex.: 'neoway-cadastral')
  @Input() modalTitle: string = ''; // Título do modal
  @Output() close = new EventEmitter<void>(); // Evento para fechar o modal

  loading = false; // Controla o estado de carregamento
  cadastralResult: any = null; // Resultado da consulta cadastral

  gerarRelatorio() {
    this.loading = true;
    this.cadastralResult = null;

    // Simula um tempo de carregamento (ex.: 1.5 segundos)
    setTimeout(() => {
      this.cadastralResult = {
        nome: 'Maria da Silva',
        cpf: '123.456.789-00',
        nascimento: '01/01/1980',
        endereco: 'Rua das Flores, 123, Centro, São Paulo/SP',
        score: 850,
        situacao: 'Regular',
        telefones: ['(11) 99999-8888', '(11) 98888-7777'],
        emails: ['maria@email.com', 'contato@mariasilva.com'],
        restricoes: [
          { tipo: 'Protesto', data: '10/03/2024', valor: 1200.00 },
          { tipo: 'Ação Judicial', data: '15/02/2023', valor: 5000.00 }
        ]
      };
      this.loading = false;
    }, 1500);
  }

  closeModal(): void {
    this.close.emit(); // Emite o evento para o componente pai fechar o modal
  }
}
