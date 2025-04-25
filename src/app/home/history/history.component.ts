import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(      private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private session: SessionStorageService,
    private homeService: HomeService,
    private router: Router) {}
  data = [
    {
      consulta: 'Consulta Neoway Cadastral',
      id: '123',
      nome: 'João da Silva',
      data: '2025-04-20',
      cpfCnpj: '123.456.789-00',
      fonte: 'Neoway',
      ramo: 'Vida',
      processo: 'Análise',
      usuario: 'Ana Costa'
    },
    {
      consulta: 'Consulta PEP',
      id: '124',
      nome: 'Maria Oliveira',
      data: '2025-04-19',
      cpfCnpj: '987.654.321-00',
      fonte: 'PEP',
      ramo: 'Previdência',
      processo: 'Validação',
      usuario: 'Camila Santos'
    }
  ];

  filters = {
    consulta: '',
    id: '',
    nome: '',
    data: '',
    cpfCnpj: '',
    fonte: '',
    ramo: '',
    processo: '',
    usuario: ''
  };

  filteredData = [...this.data];

  ngOnInit(): void {}

  applyFilters(): void {
    this.filteredData = this.data.filter(item => {
      return (
        (!this.filters.consulta || item.consulta.includes(this.filters.consulta)) &&
        (!this.filters.id || item.id.includes(this.filters.id)) &&
        (!this.filters.nome || item.nome.includes(this.filters.nome)) &&
        (!this.filters.data || item.data === this.filters.data) &&
        (!this.filters.cpfCnpj || item.cpfCnpj.includes(this.filters.cpfCnpj)) &&
        (!this.filters.fonte || item.fonte.includes(this.filters.fonte)) &&
        (!this.filters.ramo || item.ramo.includes(this.filters.ramo)) &&
        (!this.filters.processo || item.processo.includes(this.filters.processo)) &&
        (!this.filters.usuario || item.usuario.includes(this.filters.usuario))
      );
    });
  }

   user: any;
    isCollapsed = false;
    sections: { [key: string]: boolean } = {
      consultas: true,
      auditoria: true,
      solicitacoes: true,
    };

    showModal = false;
    modalType = '';
    modalTitle = '';


    ngAfterViewInit() {
      this.cdr.detectChanges();
    }

    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    }

    toggleSection(section: string): void {
      this.sections[section] = !this.sections[section];
    }

    exit(): void {
      this.session.remove('token');
      console.log("saiu");
    }
}
