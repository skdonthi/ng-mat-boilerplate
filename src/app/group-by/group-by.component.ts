import { Component } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-group-by',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './group-by.component.html',
  styleUrl: './group-by.component.scss'
})
export class GroupByComponent {

}
