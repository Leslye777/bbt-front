import { Component } from '@angular/core';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent {
  // Gráfico de pizza: Distribuição de status das consultas
  statusChartData = [
    { name: 'Sucesso', value: 120 },
    { name: 'Erro', value: 15 },
    { name: 'Pendente', value: 8 }
  ];

  // Gráfico de barras: Consultas por dia
  consultasPorDia = [
    { name: 'Seg', value: 30 },
    { name: 'Ter', value: 45 },
    { name: 'Qua', value: 38 },
    { name: 'Qui', value: 50 },
    { name: 'Sex', value: 42 }
  ];

  // Gráfico de linhas: Uso do sistema ao longo do tempo
  usoSistema = [
    {
      name: 'Usuários ativos',
      series: [
        { name: '08:00', value: 5 },
        { name: '10:00', value: 12 },
        { name: '12:00', value: 20 },
        { name: '14:00', value: 18 },
        { name: '16:00', value: 25 },
        { name: '18:00', value: 15 }
      ]
    }
  ];
}
