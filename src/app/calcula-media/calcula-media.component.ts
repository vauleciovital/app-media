import { Component, numberAttribute } from '@angular/core';
import { Nota } from './nota';

@Component({
  selector: 'app-calcula-media',
  templateUrl: './calcula-media.component.html',
  styleUrls: ['./calcula-media.component.css']
})
export class CalculaMediaComponent {

  boletim: Nota;
  resultado: string;
  mediaParcial: number;
  resAvFinal: string;

  constructor(){
    this.boletim = new Nota(0,0,0,0);
    this.resultado = ''
    this.mediaParcial = 0
    this.resAvFinal = '';
  }


  calcularMediaParcial(b1: number, b2: number, b3: number, b4: number): void {
    this.boletim.alterarBim1(b1);
    this.boletim.alterarBim2(b2);
    this.boletim.alterarBim3(b3);
    this.boletim.alterarBim4(b4);
    let mp = this.boletim.calcularMédiaParcial()
    this.mediaParcial = mp;
    let situação = this.boletim.obterSituação()
    this.resultado = `${situação} com média parcial ${mp.toFixed(2)}`
  }
  calcularMediaFinal(nav: number) {
    let mp = this.mediaParcial;
    let mf = this.boletim.calcularMédiaFinal(nav);
    let situação = this.boletim.obterSituação();
    this.resAvFinal = `${situação} com média final ${mf.toFixed(2)}`
  }
}
