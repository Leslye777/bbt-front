import { Component } from '@angular/core';
import { LoansService } from '../loans.service';
import { ConfirmationModalComponent } from 'src/app/modal/confirmation-modal/confirmation-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent {
  bookCode!: string;
  userId!: string;
  toggleValue: boolean = false;

  constructor(private loansService: LoansService, private dialog: MatDialog,) {}

  submitLoan() {
    // Verifica se os campos foram preenchidos
    if (this.bookCode && this.userId) {
      // Chama o serviço para fazer a solicitação de empréstimo
      this.loansService.borrowBook(Number(this.userId), Number(this.bookCode))
        .subscribe(
          response => {
            this.openConfirmationModal("Success", 'OK');
            // Lógica adicional após o empréstimo do livro ser realizado
          },
          error => {
            this.openConfirmationModal(error.error, "Error");
          }
        );
    }
  }

  openConfirmationModal(message: string, title: string) {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      data: {
        title: title,
        message: message
      }
    });


    // dialogRef.afterClosed().subscribe(result => {

    //   this.route.navigate(['/loans']);

    //   if (result) {

    //   } else {
    //     // O usuário cancelou o modal
    //   }
    // });
  }

  toggleOption() {
    if (this.toggleValue) {
      console.log('Return option selected');
      // Lógica adicional para a opção Return
    } else {
      console.log('Loan option selected');
      // Lógica adicional para a opção Loan
    }
  }

}
