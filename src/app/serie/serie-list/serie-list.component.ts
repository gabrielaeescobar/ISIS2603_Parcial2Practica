import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';
import { SerieDetail } from '../serie-detail';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrl: './serie-list.component.css'
})
export class SerieListComponent implements OnInit{

  selectedSerie!: SerieDetail;
  selected: Boolean = false;
  averageSeasons: number = 0;

  series: Array<SerieDetail> = [];
  
  constructor(private serieService: SerieService) { }

  getSeries(): void{
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;

      if (this.series.length > 0) {
        const totalSeasons = this.series.reduce((acc, serie) => acc + serie.seasons, 0);
        this.averageSeasons = totalSeasons / this.series.length;
      }
    });
  }
  ngOnInit(){
      this.getSeries();
  }

  onSelected(serie: SerieDetail): void{
    this.selected= true;
    this.selectedSerie = serie;
  }
}
