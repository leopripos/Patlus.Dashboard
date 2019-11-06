import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FeatureState } from '@app/feature';
import { PoolManagementSelectors, PoolModel, LoadRequestAction } from '@feature/pool-management';

@Component({
  selector: 'page-home-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  pools: PoolModel[];

  constructor(
    private store: Store<FeatureState>,
  ) { }

  ngOnInit(): void {
    this.store.pipe(select(PoolManagementSelectors.collectionArray)).subscribe(pools => {
      this.pools = pools;
    });

    this.store.dispatch(new LoadRequestAction());
  }
}
