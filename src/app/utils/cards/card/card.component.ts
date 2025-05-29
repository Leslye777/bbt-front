import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() description!: string;
  @Input() icon!: string;
  @Input() details?: string[];
  @Output() actionClick = new EventEmitter<void>();

  onActionClick() {
    this.actionClick.emit(); // Emite o evento quando o card é clicado
  }
}
