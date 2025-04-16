import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SessionStorageService } from 'angular-web-storage';
import { HomeService } from './../home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user: any;
  isCollapsed = false;
  sections: { [key: string]: boolean } = {
    consultas: true,
    auditoria: true,
    solicitacoes: true,
  };

  constructor(
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private session: SessionStorageService,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  // Retorna true para o exemplo; você pode implementar a lógica correta conforme sua necessidade.
  public verificaUser(): boolean {
    return true;
  }

  // Método de saída, removendo o token da sessão
  exit(): void {
    this.session.remove('token');
    console.log("saiu");
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  // Recupera os dados do usuário
  public getData(): void {
    const email = this.session.get('email');
    console.log(email);
    console.log(this.session.get('role'));
    this.homeService.getUserByEmail(email).subscribe(response => {
      this.user = response;
      console.log(response);
    });
  }

  openModal(type: string): void {
    console.log(`Abrindo modal para: ${type}`);
    // Aqui você pode implementar a lógica para abrir o modal com base no tipo
  }

  toggleSection(section: string): void {
    this.sections[section] = !this.sections[section];
  }
}
