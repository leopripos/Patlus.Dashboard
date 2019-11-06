import { Component, Input } from '@angular/core';
import { PoolModel } from '@feature/pool-management';

@Component({
  selector: 'ui-pool-list-table',
  templateUrl: './pool-list-table.component.html',
  styleUrls: ['./pool-list-table.component.scss']
})
export class PoolListTableComponent {

  @Input()
  items: PoolModel[] = [];

  @Input()
  columns: string[] = [
    'position',
    'name',
    'description',
    'active'
  ];
}
