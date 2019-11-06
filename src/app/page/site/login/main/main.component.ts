import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FeatureState } from '@app/feature';
import { Observable } from 'rxjs';
import { AuthenticationSelectors } from '@app/feature/authentication';

@Component({
  selector: 'page-login-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;

  constructor(
    private store: Store<FeatureState>
  ) { }

  ngOnInit() {
    this.isAuthenticated$ = this.store.select(AuthenticationSelectors.isAuthenticated);
  }

}
