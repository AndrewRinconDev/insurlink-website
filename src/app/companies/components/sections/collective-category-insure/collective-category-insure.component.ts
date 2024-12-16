import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectiveInsureComponent } from './components/collective-insure/collective-insure.component';

@Component({
  selector: 'app-collective-category-insure',
  standalone: true,
  imports: [CommonModule, CollectiveInsureComponent],
  templateUrl: './collective-category-insure.component.html',
  styleUrl: './collective-category-insure.component.css'
})
export class CollectiveCategoryInsureComponent implements OnInit {
  selectedType: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.selectedType = params.get('type') ?? null;
    });
  }

  selectType(type: string) {
    this.selectedType = type;
    this.router.navigate([`/empresas/colectivos/${type}`]);
  }
}
