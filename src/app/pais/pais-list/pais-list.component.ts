import { Component, OnInit } from '@angular/core';
import { Pais } from '../pais';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css'] 
})
export class PaisListComponent implements OnInit {
  selectedPais!: Pais;
  selected: Boolean = false;
  paises: Array<Pais> = [];
  paisMasAntiguo: string = "";

  constructor(private paisService: PaisService) { }

  getPaises(): void {
    this.paisService.getPaises().subscribe((paises) => {
      this.paises = paises;
      this.calcularPaisMasAntiguo(); 
    });
  }

  ngOnInit() {
    this.getPaises();
  }

  onSelected(pais: Pais): void {
    this.selected = true;
    this.selectedPais = pais;
  }

  calcularPaisMasAntiguo(): void {
    let paisMasAntiguo: Pais | undefined;
    let formacionMasAntigua = Infinity;
  
    for (const pais of this.paises) {
      if (pais.formation_year < formacionMasAntigua) {
        formacionMasAntigua = pais.formation_year;
        paisMasAntiguo = pais;
      }
    }
  
    if (paisMasAntiguo) {
      this.paisMasAntiguo = `El país más antiguo es ${paisMasAntiguo.name}, formado en el año ${paisMasAntiguo.formation_year}`;
    } else {
      this.paisMasAntiguo = "";
    }
  }
  }
