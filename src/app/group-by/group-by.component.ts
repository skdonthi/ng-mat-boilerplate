import { Component } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-group-by',
  standalone: true,
  imports: [MatGridListModule, MatListModule, MatCardModule],
  templateUrl: './group-by.component.html',
  styleUrl: './group-by.component.scss',
})
export class GroupByComponent {}
