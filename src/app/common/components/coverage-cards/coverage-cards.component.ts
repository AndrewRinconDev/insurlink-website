import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coverage-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coverage-cards.component.html',
  styleUrl: './coverage-cards.component.css'
})
export class CoverageCardsComponent implements OnInit {
  @Input() coverageCardsData: any | null = null;
  @Input() coverageCardsTitle: string | null = "Principales coberturas";
  @Input() isSecondary = false;

  constructor() {
  }
  
  ngOnInit() {
    this.coverageCardsData = this.coverageCardsData ?? [];
    this.coverageCardsTitle = this.coverageCardsTitle ?? "Principales coberturas";
  }
}
