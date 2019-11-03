import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import { TokenModel } from './common/token.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

  static ACCESS_TOKEN_KEY = 'accessToken';
  static REFRESH_TOKEN_KEY = 'refreshToken';

  readonly url: string;

  constructor(
    private httpClient: HttpClient
  ) {
    const identityConfig = environment.service.identity;
    this.url = `${identityConfig.url}/pools/${identityConfig.poolId}/tokens`;
  }

  login(form: {
    name: string,
    password: string;
  }): Observable<TokenModel> {
    return this.httpClient.post<TokenModel>(this.url, form)
      .pipe(
        tap((token: TokenModel) => {
          this.storeToken(token);
        })
      );
  }

  refreshLogin(): Observable<TokenModel> {
    const refreshToken = this.resolveRefreshToken();
    this.removeToken();

    return this.httpClient.put<TokenModel>(this.url, { refreshToken })
      .pipe(
        tap((token: TokenModel) => {
          this.storeToken(token);
        })
      );
  }

  logout() {
    this.removeToken();
  }

  resolveRefreshToken() {
    return localStorage.getItem(AuthenticationService.REFRESH_TOKEN_KEY);
  }

  private storeToken(token: TokenModel) {
    localStorage.setItem(AuthenticationService.ACCESS_TOKEN_KEY, token.accessToken);
    localStorage.setItem(AuthenticationService.REFRESH_TOKEN_KEY, token.refreshToken);
  }

  private removeToken() {
    localStorage.removeItem(AuthenticationService.ACCESS_TOKEN_KEY);
    localStorage.removeItem(AuthenticationService.REFRESH_TOKEN_KEY);
  }
}
