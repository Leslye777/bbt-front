import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SessionStorageService } from 'angular-web-storage';
import { HomeService } from './../home.service';
import { GenericModalComponent } from 'src/app/utils/generic-modal/generic-modal.component';
import { Router, RouterLink } from '@angular/router';

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

  showModal = false;
  modalType = '';
  modalTitle = '';

  constructor(
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private session: SessionStorageService,
    private homeService: HomeService,
    private router: Router
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

  openModal(type: string, title: string): void {
    if(type === 'historico-consultas') {
      console.log('navegou');
      this.router.navigate(['home/historico']);
      return;
    }

    this.modalType = type;
    this.modalTitle = title;
    this.showModal = true; // Define `showModal` como `true` para exibir o modal
  }

  closeModal(): void {
    this.showModal = false; // Define `showModal` como `false` para ocultar o modal
    this.modalType = '';
    this.modalTitle = '';
  }

  toggleSection(section: string): void {
    this.sections[section] = !this.sections[section];
  }
}
