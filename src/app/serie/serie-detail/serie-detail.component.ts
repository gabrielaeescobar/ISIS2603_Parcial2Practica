import { Component, Input, OnInit } from '@angular/core';
import { SerieDetail } from '../serie-detail';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrl: './serie-detail.component.css'
})
export class SerieDetailComponent implements OnInit{
  @Input() serieDetail !: SerieDetail;

  constructor(){}

  ngOnInit(): void {
      
  }
}
