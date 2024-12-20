import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbComponent, BreadcrumbItemComponent } from '@coreui/angular';
import { collectivesProductsData } from '../../../../../../../constants/data/productData';

@Component({
  selector: 'app-collective-insure',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, BreadcrumbComponent, BreadcrumbItemComponent],
  templateUrl: './collective-insure.component.html',
  styleUrl: './collective-insure.component.css'
})
export class CollectiveInsureComponent implements OnInit {
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

    this.selectedTypeInfo = collectivesProductsData.find((product) => product.shortName === type);
  }
}
