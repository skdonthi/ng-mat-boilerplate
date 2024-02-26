import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-group-by',
  standalone: true,
  imports: [MatGridListModule, MatListModule, MatCardModule, MatButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './group-by.component.html',
  styleUrl: './group-by.component.scss',
})
export class GroupByComponent {
  private config: ConfigService = inject(ConfigService);
  public apiUrl = this.config.apiUrl;
}
