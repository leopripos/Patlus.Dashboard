import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, take, flatMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { FeatureState } from '@app/feature';
import { RefreshRequestAction } from '../../action/refresh.action';
import { AuthenticationState } from '../../authentication.state';
import { selectAuthentication } from '../../authentication.selector';
import { AuthenticationService } from '../../authentication.service';
import { TokenResolverService } from '../../token-resolver.service';

@Injectable()
export class BearerTokenInterceptor implements HttpInterceptor {

  private authenticationState$: Observable<AuthenticationState>;

  constructor(
    private tokenResolver: TokenResolverService,
    private authenticationService: AuthenticationService,
    private store: Store<FeatureState>,
  ) {
    this.authenticationState$ = store.pipe(select(selectAuthentication));
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authenticationState$
      .pipe(
        take(1),
        flatMap(state => {
          return this.handleRequest(request, next, state);
        })
      );
  }

  private handleRequest(request: HttpRequest<any>, next: HttpHandler, state: AuthenticationState): Observable<HttpEvent<any>> {

    const isAuthenticationUrl = this.authenticationService.url === request.url;

    if (state.isAuthenticated && !isAuthenticationUrl) {
      request = this.addAuthorizationToken(request, this.tokenResolver.accessToken);
    }

    return next.handle(request)
      .pipe(
        catchError(error => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            return this.handleUnauthorizedResponse(request, next, state, error);
          } else {
            return throwError(error);
          }
        })
      );
  }

  private addAuthorizationToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private handleUnauthorizedResponse(request: HttpRequest<any>, next: HttpHandler, oldState: AuthenticationState, error: any) {
    return this.authenticationState$
      .pipe(
        filter(currentState => {
          return currentState.isAuthenticating === false && this.authenticationService.url !== request.url;
        }),
        take(1),
        flatMap(currentState => {
          const currentLastAuthenticationTime = currentState.lastAuthenticationTime;
          const oldLastAuthenticationTime = oldState.lastAuthenticationTime;

          if (currentLastAuthenticationTime === oldLastAuthenticationTime && currentState.isAuthenticated) {
            this.store.dispatch(new RefreshRequestAction());

            return this.authenticationState$
              .pipe(
                filter(newState => newState.isAuthenticating === false),
                take(1),
                flatMap(newState => {
                  if (newState.isAuthenticated) {
                    return this.handleRequest(request, next, newState);
                  } else {
                    return throwError(error);
                  }
                })
              );
          } else if (currentState.isAuthenticated) {
            return this.handleRequest(request, next, currentState);
          } else {
            return throwError(error);
          }
        })
      );
  }
}
