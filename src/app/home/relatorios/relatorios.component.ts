import { Component } from '@angular/core';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent {
  // Dados para o gráfico de pizza
  pieChartData = [
    { name: 'Colaborador A', value: 40 },
    { name: 'Colaborador B', value: 25 },
    { name: 'Colaborador C', value: 20 },
    { name: 'Equipe', value: 15 },
  ];

  // Dados para o gráfico de barras
  barChartData = [
    { name: 'Janeiro', value: 1200 },
    { name: 'Fevereiro', value: 1500 },
    { name: 'Março', value: 1800 },
    { name: 'Abril', value: 2000 },
  ];
}