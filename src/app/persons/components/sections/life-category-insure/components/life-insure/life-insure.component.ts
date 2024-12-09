import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbComponent, BreadcrumbItemComponent } from '@coreui/angular';
import { lifeProductsData } from '../../../../../../../constants/data/productData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-life-insure',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, BreadcrumbComponent, BreadcrumbItemComponent],
  templateUrl: './life-insure.component.html',
  styleUrl: './life-insure.component.css'
})
export class LifeInsureComponent {
  selectedTypeInfo: any | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const selectedType = params.get('type') ?? null;
      this.selectTypeInfo(selectedType);
    });
  }

  selectTypeInfo(type: string | null) {
    if (!type) return;

    this.selectedTypeInfo = lifeProductsData.find((product) => product.shortName === type);
  }
}
