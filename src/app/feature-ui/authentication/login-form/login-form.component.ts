import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { FeatureState } from '@app/feature/feature.state';
import { LoginRequestAction, AuthenticationSelectors } from '@app/feature/authentication';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ErrorPayload } from '@app/common/payload';

@Component({
  selector: 'feature-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  mainForm: FormGroup;

  isAuthenticating$: Observable<boolean>;
  isAuthenticated$: Observable<boolean>;
  error$: Observable<ErrorPayload>;

  constructor(
    private store: Store<FeatureState>,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.isAuthenticating$ = this.store.pipe(select(AuthenticationSelectors.isAuthenticating));
    this.isAuthenticated$ = this.store.pipe(select(AuthenticationSelectors.isAuthenticated));
    this.error$ = this.store.pipe(select(AuthenticationSelectors.error));
  }

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

    this.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['/']);
      }
    });

    this.error$.subscribe(error => {
      if (error) {
        Object.keys(this.mainForm.controls).forEach(key => {
          if (error.details[key]) {
            this.mainForm.controls[key].setErrors({
              serverError: error.details[key]
            });
          }
        });
      }
    });
  }

  get nameControl() {
    return this.mainForm.get('name');
  }

  get passwordControl() {
    return this.mainForm.get('password');
  }

  onSubmit() {
    const formValue = this.mainForm.value;

    const loginRequest = new LoginRequestAction();
    loginRequest.name = formValue.name;
    loginRequest.password = formValue.password;

    this.store.dispatch(loginRequest);
  }
}
