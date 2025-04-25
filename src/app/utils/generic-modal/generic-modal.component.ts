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


  loading = false;
  result: any = null;

  simulatePackCadastral(): void {
    this.loading = true;
    this.result = null;

    // Simula um tempo de carregamento
    setTimeout(() => {
      this.loading = false;
      this.result = {
        id: '680acf0333b5763d779fcf43',
        nome: 'João da Silva',
        dataNascimento: '15/03/1985',
        cpfCnpj: '123.456.789-00',
        status: 'Consulta realizada com sucesso',
        rendaEstimada: 'R$ 5.000,00',
        fonte: 'NeowayRenda',
        data: '2023-10-01',
      };
    }, 2000); // 2 segundos de simulação
  }

  closeModal(): void {
    this.close.emit(); // Emite o evento para o componente pai fechar o modal
  }
}
