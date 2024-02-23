import { Component } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-group-by',
  standalone: true,
  imports: [MatGridListModule, MatListModule],
  templateUrl: './group-by.component.html',
  styleUrl: './group-by.component.scss',
})
export class GroupByComponent {}
