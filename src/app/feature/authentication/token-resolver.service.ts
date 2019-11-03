import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenResolverService {

  get hasToken() {
    return localStorage.getItem(AuthenticationService.ACCESS_TOKEN_KEY) !== null;
  }

  get accessToken() {
    return localStorage.getItem(AuthenticationService.ACCESS_TOKEN_KEY);
  }
}
