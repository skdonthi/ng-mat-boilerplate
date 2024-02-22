import { Routes } from '@angular/router';
import { GroupByComponent } from './group-by/group-by.component';

export const routes: Routes = [
  {
    path: 'groupby',
    component: GroupByComponent,
  },
  {
    path: '',
    component: GroupByComponent
  }
];
