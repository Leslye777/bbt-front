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
  reportReady = false; // Controla se o botão de abrir relatório está habilitado

  simulateLoading(): void {
    this.loading = true;
    this.reportReady = false;

    // Simula um tempo de carregamento (ex.: 2 segundos)
    setTimeout(() => {
      this.loading = false;
      this.reportReady = true;
    }, 2000);
  }

  openReport(): void {
    const reportUrl = 'https://gestordefontes.segurosunimed.com.br/relatorio/9e5f3a4d-8b6b-4b20-9842-7795c5e6f493';
    window.open(reportUrl, '_blank'); // Abre o relatório em uma nova aba
  }

  closeModal(): void {
    this.close.emit(); // Emite o evento para o componente pai fechar o modal
  }
}
