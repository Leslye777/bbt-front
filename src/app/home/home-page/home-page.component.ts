import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SessionStorageService } from 'angular-web-storage';
import { HomeService } from '../home.service';
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

  images: string[] = [
    'assets/imagem1.png',
    'assets/gf1.png',
    'assets/gf2.png'
    // Adicione mais imagens conforme necessário
  ];
  currentIndex = 0;
  prevIndex = 0;

  newsList = [
    { title: 'Nova funcionalidade lançada!', description: 'Agora você pode consultar dados em tempo real.' },
    { title: 'Manutenção programada', description: 'O sistema ficará indisponível no dia 20/05 das 00h às 06h.' },
    { title: 'Atualização de segurança', description: 'Recomendamos atualizar suas credenciais.' }
  ];

  currentNewsIndex = 0;

  // Exemplo dentro do seu GenericModalComponent
  cadastralResult: any = null;
  loading = false;

  // No componente do menu lateral
  configMenuOpen = false;
  infoMenuOpen = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private session: SessionStorageService,
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getData();
    this.startCarousel();
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

  startCarousel(): void {
    setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  nextSlide(): void {
    this.prevIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateCarouselClasses();
  }

  updateCarouselClasses(): void {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
      item.classList.remove('active', 'prev');
      if (index === this.currentIndex) {
        item.classList.add('active');
      } else if (index === this.prevIndex) {
        item.classList.add('prev');
      }
    });
  }

  prevNews() {
    this.currentNewsIndex = (this.currentNewsIndex - 1 + this.newsList.length) % this.newsList.length;
  }

  nextNews() {
    this.currentNewsIndex = (this.currentNewsIndex + 1) % this.newsList.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  gerarRelatorio() {
    this.loading = true;
    this.cadastralResult = null;

    // Simula delay e gera dados mockados
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

  toggleConfigMenu(event: Event) {
    event.preventDefault(); // Impede navegação do link
    this.configMenuOpen = !this.configMenuOpen;
  }

  toggleInfoMenu(event: Event) {
    event.preventDefault();
    this.infoMenuOpen = !this.infoMenuOpen;
  }
}
