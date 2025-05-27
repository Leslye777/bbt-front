import { Component } from '@angular/core';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css'],
})
export class ConsultasComponent {
  tipoConsulta: string = 'cadastral-neoway';
  informacoesCanalEntrada: any = {
    razaoSocial: '',
    produtos: [{ produto: '', investimento: '', cobertura: '' }],
    cnpj: '',
    coberturas: [],
    processo: '',
    canal: '',
    ramo: '',
  };
  coberturasInput: string = '';
  resultado: any = null;

  availablePacks: string[] = [
    'Cadastral Neoway',
    'PEP',
    'BVS',
    'APIs Públicas',
  ];
  selectedPacks: string[] = [];
  isRazaoSocialDisabled: boolean = true;

  devolutivaOpen = false;
  dadosFonteOpen = false;
  pendenciasOpen = false;

  buscarConsulta(): void {
    // Atualiza o resultado com os dados mockados
    this.resultado = {
      devolutivaMotorCalculo: {
        regrasResponse: [
          {
            codigoRetorno: 2,
            nomeAmigavel: "Validação Similaridade da Razão Social",
            devolutiva: "Razão social da proposta não está similar a Razão social declarado na fonte",
            encaminhamento: "Encaminhar para ER como reprovado",
            semaforo: "VERMELHO",
          },
          {
            codigoRetorno: 6,
            nomeAmigavel: "Validação do CNPJ na lista de análises especiais",
            devolutiva: "Não consta na lista de Análises Especiais",
            encaminhamento: "Seguir com fluxo de aprovação",
            semaforo: "VERDE",
          },
        ],
      },
      dadosConsultaFonte: {
        analisesEspeciais: "Nada consta",
        cep: "25520662",
        uf: "RIO_DE_JANEIRO",
        cidade: "SAO JOAO DE MERITI",
        bairro: "CENTRO",
        logradouro: "AVENIDA GETULIO DE MOURA SN",
        numeroResidencia: "SN",
        classificacao: "MEDIO",
        area: "Operacional",
        cadastroUnico: {
          cepim: [
            {
              numeroConvenioSiafi: "3409/2004",
              dataVigencia: "08/05/2025",
              motivo: "DESCUMPRIMENTO DE CLAUSULA PELO CONVENENTE",
            },
          ],
          ceis: [
            {
              orgaoSancionador: "1º Grau - TRF2 / Seção Judiciária do Rio de Janeiro",
              dataInicioSancao: "16/07/2020",
              dataFimSancao: "16/07/2030",
            },
          ],
          cnep: [],
        },
      },
    };
  }

  onPackSelectionChange(): void {
    this.isRazaoSocialDisabled = this.selectedPacks.length === 1;
  }

  removePack(pack: string): void {
    const index = this.selectedPacks.indexOf(pack);
    if (index >= 0) {
      this.selectedPacks.splice(index, 1);
      this.onPackSelectionChange();
    }
  }
}
