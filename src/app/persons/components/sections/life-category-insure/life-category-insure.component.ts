import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LifeInsureComponent } from "./components/life-insure/life-insure.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-life-category-insure',
  standalone: true,
  imports: [CommonModule, LifeInsureComponent],
  templateUrl: './life-category-insure.component.html',
  styleUrl: './life-category-insure.component.css'
})
export class LifeCategoryInsureComponent implements OnInit {
  selectedType: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.selectedType = params.get('type') ?? null;
    });
  }

  selectType(type: string) {
    this.selectedType = type;
    this.router.navigate([`/personas/vida/${type}`]);
  }
}
